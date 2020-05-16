class TimeDate {
    constructor(d) {
        if (typeof d === 'string') d = this.parse(d)
        if (typeof d === 'number') d = this.numParse(d);
        this.hour = d.hour;
        this.min = d.min;
    }
    valueOf(e) {
        return 60 * this.hour + this.min;
    }
    toString() {
        return this.format('HH:mm');
    }
    format(str = 'HH:mm') {
        str = str.replace(/HH/, ('00' + this.hour).slice(-2));
        str = str.replace(/mm/, ('00' + this.min).slice(-2));
        return str;
    }
    parse(str) {
        let reg = /(\d+):(\d+)/;
        let v = reg.exec(str);
        return {
            hour: parseInt(v[1]),
            min: parseInt(v[2]),
        }
    }
    numParse(n) {
        return {
            hour: Math.floor(n / 60),
            min: n % 60
        }
    }
}

class Schedule {
    constructor(day, begin, end, element) {
        this.day = day;
        this.begin = begin;
        this.end = end;
        this.element = element;
    }
}

export default class {
    constructor(opts) {
        this.options = Object.assign({
            element: null,
            timeFormat: 'HH:mm',
            begin: new TimeDate('0:00'),
            end: new TimeDate('23:30'),
            range: new TimeDate('0:30'),
            days: ['日', '月', '火', '水', '木', '金', '土'],
            rangeFormat: '～<br>'
        }, opts);

        if (typeof this.options.begin === 'string') this.options.begin = new TimeDate(this.options.begin);
        if (typeof this.options.end === 'string') this.options.end = new TimeDate(this.options.end);
        if (typeof this.options.range === 'string') this.options.range = new TimeDate(this.options.range);

        if (!this.options.element) throw new Error('Unset option opts.element');
        if (typeof this.options.element === 'string') this.options.element = document.querySelector(this.options.element);

        this.timeTable = [...(function* (s) {
            let time = s.options.begin;
            let endDate = s.options.end;
            while (time <= endDate) {
                let tData = {
                    begin: time
                }
                time = new TimeDate(time + s.options.range);
                tData.end = time;
                yield tData
            }
        })(this)];
        this.schedules = [];
        this._tableInit();
    }
    _tableInit() {
        const { element, days, timeFormat, rangeFormat } = this.options;
        let tHead = document.createElement('thead');
        let tr = document.createElement('tr');
        let rangeTh = document.createElement('th');
        tr.appendChild(rangeTh);

        days.forEach(day => {
            let th = document.createElement('th');
            th.innerText = day;
            th.dataset.day = day;
            th.classList.add('time-schedule-table-th')
            tr.appendChild(th)
        });
        tHead.appendChild(tr);
        let tBody = document.createElement('tbody');

        this.tableElements = this.timeTable.map(time => {
            let tr = document.createElement('tr');
            tr.classList.add('time-schedule-table-tr')
            let rangeTd = document.createElement('td');
            rangeTd.innerHTML = time.begin.format(timeFormat) + rangeFormat + time.end.format(timeFormat);
            tr.appendChild(rangeTd);

            let arr = days.map(day => {
                let td = document.createElement('td');
                td.dataset.time = time;
                td.dataset.day = day;
                td.style.position = 'relative'
                td.classList.add('time-schedule-table-td');
                tr.appendChild(td);
                return td;
            })

            tBody.appendChild(tr);
            return arr;
        })
        element.appendChild(tHead);
        element.appendChild(tBody);
    }
    set({ day, begin, end, range }) {

        const { element } = this.options;

        begin = new TimeDate(begin);
        if (!end) {
            range = new TimeDate(range);
        } else {
            range = new TimeDate(new TimeDate(end) - begin);
        }

        if (typeof day === 'string') day = this.options.days.findIndex(d => d === day);
        if (begin < this.options.begin) begin = this.options.begin;

        let e = document.createElement('div');
        e.classList.add('schedule');
        e.style = `
            background-color: rgb(100, 100, 238);
            width: 100%;
            height: ${range / this.options.range * 100}%;
            position: absolute;
            top: 2px;
            left: 0;
            transform:scaleX(0.9);
            z-index:1;
        `


        let timeIndex = Math.floor((begin - this.options.begin) / this.options.range);

        let targetElement = this.tableElements[timeIndex][day];


        let schedule = new Schedule(day, begin, range, e);
        this.schedules.push(schedule);

        targetElement.appendChild(e);
        return schedule;
    }

}