!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.TimeScheduleTable=t():e.TimeScheduleTable=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class i{constructor(e){"string"==typeof e&&(e=this.parse(e)),"number"==typeof e&&(e=this.numParse(e)),this.hour=e.hour,this.min=e.min}valueOf(e){return 60*this.hour+this.min}toString(){return this.format("HH:mm")}format(e="HH:mm"){return e=(e=e.replace(/HH/,("00"+this.hour).slice(-2))).replace(/mm/,("00"+this.min).slice(-2))}parse(e){let t=/(\d+):(\d+)/.exec(e);return{hour:parseInt(t[1]),min:parseInt(t[2])}}numParse(e){return{hour:Math.floor(e/60),min:e%60}}}class o{constructor(e,t,n,i){this.day=e,this.begin=t,this.end=n,this.element=i}}t.default=class{constructor(e){if(this.options=Object.assign({element:null,timeFormat:"HH:mm",begin:new i("0:00"),end:new i("23:30"),range:new i("0:30"),days:["日","月","火","水","木","金","土"],rangeFormat:"～<br>"},e),"string"==typeof this.options.begin&&(this.options.begin=new i(this.options.begin)),"string"==typeof this.options.end&&(this.options.end=new i(this.options.end)),"string"==typeof this.options.range&&(this.options.range=new i(this.options.range)),!this.options.element)throw new Error("Unset option opts.element");"string"==typeof this.options.element&&(this.options.element=document.querySelector(this.options.element)),this.timeTable=[...function*(e){let t=e.options.begin,n=e.options.end;for(;t<=n;){let n={begin:t};t=new i(t+e.options.range),n.end=t,yield n}}(this)],this.schedules=[],this._tableInit()}_tableInit(){const{element:e,days:t,timeFormat:n,rangeFormat:i}=this.options;let o=document.createElement("thead"),r=document.createElement("tr"),s=document.createElement("th");r.appendChild(s),t.forEach(e=>{let t=document.createElement("th");t.innerText=e,t.dataset.day=e,t.classList.add("time-schedule-table-th"),r.appendChild(t)}),o.appendChild(r);let a=document.createElement("tbody");this.tableElements=this.timeTable.map(e=>{let o=document.createElement("tr");o.classList.add("time-schedule-table-tr");let r=document.createElement("td");r.innerHTML=e.begin.format(n)+i+e.end.format(n),o.appendChild(r);let s=t.map(t=>{let n=document.createElement("td");return n.dataset.time=e,n.dataset.day=t,n.style.position="relative",n.classList.add("time-schedule-table-td"),o.appendChild(n),n});return a.appendChild(o),s}),e.appendChild(o),e.appendChild(a)}set({day:e,begin:t,end:n,range:r}){const{element:s}=this.options;t=new i(t),r=new i(n?new i(n)-t:r),"string"==typeof e&&(e=this.options.days.findIndex(t=>t===e)),t<this.options.begin&&(t=this.options.begin);let a=document.createElement("div");a.classList.add("schedule"),a.style=`\n            background-color: rgb(100, 100, 238);\n            width: 100%;\n            height: ${r/this.options.range*100}%;\n            position: absolute;\n            top: 2px;\n            left: 0;\n            transform:scaleX(0.9);\n            z-index:1;\n        `;let l=Math.floor((t-this.options.begin)/this.options.range),d=this.tableElements[l][e],u=new o(e,t,r,a);return this.schedules.push(u),d.appendChild(a),u}}}]).default}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaW1lU2NoZWR1bGVUYWJsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGltZVNjaGVkdWxlVGFibGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGltZVNjaGVkdWxlVGFibGUvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIlRpbWVEYXRlIiwidGhpcyIsInBhcnNlIiwibnVtUGFyc2UiLCJob3VyIiwibWluIiwiZSIsImZvcm1hdCIsInN0ciIsInJlcGxhY2UiLCJzbGljZSIsInYiLCJleGVjIiwicGFyc2VJbnQiLCJNYXRoIiwiZmxvb3IiLCJTY2hlZHVsZSIsImRheSIsImJlZ2luIiwiZW5kIiwiZWxlbWVudCIsIm9wdHMiLCJvcHRpb25zIiwiYXNzaWduIiwidGltZUZvcm1hdCIsInJhbmdlIiwiZGF5cyIsInJhbmdlRm9ybWF0IiwiRXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lVGFibGUiLCJ0aW1lIiwiZW5kRGF0ZSIsInREYXRhIiwic2NoZWR1bGVzIiwiX3RhYmxlSW5pdCIsInRIZWFkIiwiY3JlYXRlRWxlbWVudCIsInRyIiwicmFuZ2VUaCIsImFwcGVuZENoaWxkIiwiZm9yRWFjaCIsInRoIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsImNsYXNzTGlzdCIsImFkZCIsInRCb2R5IiwidGFibGVFbGVtZW50cyIsIm1hcCIsInJhbmdlVGQiLCJpbm5lckhUTUwiLCJhcnIiLCJ0ZCIsInN0eWxlIiwicG9zaXRpb24iLCJmaW5kSW5kZXgiLCJ0aW1lSW5kZXgiLCJ0YXJnZXRFbGVtZW50Iiwic2NoZWR1bGUiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUEyQ0EsRUFBTUMsR0FDMUIsaUJBQVpDLFNBQTBDLGlCQUFYQyxPQUN4Q0EsT0FBT0QsUUFBVUQsSUFDUSxtQkFBWEcsUUFBeUJBLE9BQU9DLElBQzlDRCxPQUFPLEdBQUlILEdBQ2UsaUJBQVpDLFFBQ2RBLFFBQTJCLGtCQUFJRCxJQUUvQkQsRUFBd0Isa0JBQUlDLElBUjlCLENBU0dLLFFBQVEsV0FDWCxPLFlDVEUsSUFBSUMsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVVAsUUFHbkMsSUFBSUMsRUFBU0ksRUFBaUJFLEdBQVksQ0FDekNDLEVBQUdELEVBQ0hFLEdBQUcsRUFDSFQsUUFBUyxJQVVWLE9BTkFVLEVBQVFILEdBQVVJLEtBQUtWLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNNLEdBRy9ETCxFQUFPUSxHQUFJLEVBR0pSLEVBQU9ELFFBMERmLE9BckRBTSxFQUFvQk0sRUFBSUYsRUFHeEJKLEVBQW9CTyxFQUFJUixFQUd4QkMsRUFBb0JRLEVBQUksU0FBU2QsRUFBU2UsRUFBTUMsR0FDM0NWLEVBQW9CVyxFQUFFakIsRUFBU2UsSUFDbENHLE9BQU9DLGVBQWVuQixFQUFTZSxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVWLEVBQW9CZ0IsRUFBSSxTQUFTdEIsR0FDWCxvQkFBWHVCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZW5CLEVBQVN1QixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWVuQixFQUFTLGFBQWMsQ0FBRXlCLE9BQU8sS0FRdkRuQixFQUFvQm9CLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRbkIsRUFBb0JtQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQXhCLEVBQW9CZ0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9uQixFQUFvQlEsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnZCLEVBQW9CMkIsRUFBSSxTQUFTaEMsR0FDaEMsSUFBSWUsRUFBU2YsR0FBVUEsRUFBTzJCLFdBQzdCLFdBQXdCLE9BQU8zQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSyxFQUFvQlEsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlYsRUFBb0JXLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHN0IsRUFBb0JnQyxFQUFJLEdBSWpCaEMsRUFBb0JBLEVBQW9CaUMsRUFBSSxHLCtCQ2xGckQsYUFBTUMsRUFDRixZQUFZMUIsR0FDUyxpQkFBTkEsSUFBZ0JBLEVBQUkyQixLQUFLQyxNQUFNNUIsSUFDekIsaUJBQU5BLElBQWdCQSxFQUFJMkIsS0FBS0UsU0FBUzdCLElBQzdDMkIsS0FBS0csS0FBTzlCLEVBQUU4QixLQUNkSCxLQUFLSSxJQUFNL0IsRUFBRStCLElBRWpCLFFBQVFDLEdBQ0osT0FBTyxHQUFLTCxLQUFLRyxLQUFPSCxLQUFLSSxJQUVqQyxXQUNJLE9BQU9KLEtBQUtNLE9BQU8sU0FFdkIsT0FBT0MsRUFBTSxTQUdULE9BREFBLEdBREFBLEVBQU1BLEVBQUlDLFFBQVEsTUFBTyxLQUFPUixLQUFLRyxNQUFNTSxPQUFPLEtBQ3hDRCxRQUFRLE1BQU8sS0FBT1IsS0FBS0ksS0FBS0ssT0FBTyxJQUdyRCxNQUFNRixHQUNGLElBQ0lHLEVBRE0sY0FDRUMsS0FBS0osR0FDakIsTUFBTyxDQUNISixLQUFNUyxTQUFTRixFQUFFLElBQ2pCTixJQUFLUSxTQUFTRixFQUFFLEtBR3hCLFNBQVNsQixHQUNMLE1BQU8sQ0FDSFcsS0FBTVUsS0FBS0MsTUFBTXRCLEVBQUksSUFDckJZLElBQUtaLEVBQUksS0FLckIsTUFBTXVCLEVBQ0YsWUFBWUMsRUFBS0MsRUFBT0MsRUFBS0MsR0FDekJuQixLQUFLZ0IsSUFBTUEsRUFDWGhCLEtBQUtpQixNQUFRQSxFQUNiakIsS0FBS2tCLElBQU1BLEVBQ1hsQixLQUFLbUIsUUFBVUEsR0FJUixnQkFDWCxZQUFZQyxHQWVSLEdBZEFwQixLQUFLcUIsUUFBVTVDLE9BQU82QyxPQUFPLENBQ3pCSCxRQUFTLEtBQ1RJLFdBQVksUUFDWk4sTUFBTyxJQUFJbEIsRUFBUyxRQUNwQm1CLElBQUssSUFBSW5CLEVBQVMsU0FDbEJ5QixNQUFPLElBQUl6QixFQUFTLFFBQ3BCMEIsS0FBTSxDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLEtBQ3JDQyxZQUFhLFNBQ2ROLEdBRStCLGlCQUF2QnBCLEtBQUtxQixRQUFRSixRQUFvQmpCLEtBQUtxQixRQUFRSixNQUFRLElBQUlsQixFQUFTQyxLQUFLcUIsUUFBUUosUUFDM0QsaUJBQXJCakIsS0FBS3FCLFFBQVFILE1BQWtCbEIsS0FBS3FCLFFBQVFILElBQU0sSUFBSW5CLEVBQVNDLEtBQUtxQixRQUFRSCxNQUNyRCxpQkFBdkJsQixLQUFLcUIsUUFBUUcsUUFBb0J4QixLQUFLcUIsUUFBUUcsTUFBUSxJQUFJekIsRUFBU0MsS0FBS3FCLFFBQVFHLFNBRXRGeEIsS0FBS3FCLFFBQVFGLFFBQVMsTUFBTSxJQUFJUSxNQUFNLDZCQUNQLGlCQUF6QjNCLEtBQUtxQixRQUFRRixVQUFzQm5CLEtBQUtxQixRQUFRRixRQUFVUyxTQUFTQyxjQUFjN0IsS0FBS3FCLFFBQVFGLFVBRXpHbkIsS0FBSzhCLFVBQVksSUFBSSxVQUFZaEMsR0FDN0IsSUFBSWlDLEVBQU9qQyxFQUFFdUIsUUFBUUosTUFDakJlLEVBQVVsQyxFQUFFdUIsUUFBUUgsSUFDeEIsS0FBT2EsR0FBUUMsR0FBUyxDQUNwQixJQUFJQyxFQUFRLENBQ1JoQixNQUFPYyxHQUVYQSxFQUFPLElBQUloQyxFQUFTZ0MsRUFBT2pDLEVBQUV1QixRQUFRRyxPQUNyQ1MsRUFBTWYsSUFBTWEsUUFDTkUsR0FUTyxDQVdsQmpDLE9BQ0hBLEtBQUtrQyxVQUFZLEdBQ2pCbEMsS0FBS21DLGFBRVQsYUFDSSxNQUFNLFFBQUVoQixFQUFPLEtBQUVNLEVBQUksV0FBRUYsRUFBVSxZQUFFRyxHQUFnQjFCLEtBQUtxQixRQUN4RCxJQUFJZSxFQUFRUixTQUFTUyxjQUFjLFNBQy9CQyxFQUFLVixTQUFTUyxjQUFjLE1BQzVCRSxFQUFVWCxTQUFTUyxjQUFjLE1BQ3JDQyxFQUFHRSxZQUFZRCxHQUVmZCxFQUFLZ0IsUUFBUXpCLElBQ1QsSUFBSTBCLEVBQUtkLFNBQVNTLGNBQWMsTUFDaENLLEVBQUdDLFVBQVkzQixFQUNmMEIsRUFBR0UsUUFBUTVCLElBQU1BLEVBQ2pCMEIsRUFBR0csVUFBVUMsSUFBSSwwQkFDakJSLEVBQUdFLFlBQVlFLEtBRW5CTixFQUFNSSxZQUFZRixHQUNsQixJQUFJUyxFQUFRbkIsU0FBU1MsY0FBYyxTQUVuQ3JDLEtBQUtnRCxjQUFnQmhELEtBQUs4QixVQUFVbUIsSUFBSWxCLElBQ3BDLElBQUlPLEVBQUtWLFNBQVNTLGNBQWMsTUFDaENDLEVBQUdPLFVBQVVDLElBQUksMEJBQ2pCLElBQUlJLEVBQVV0QixTQUFTUyxjQUFjLE1BQ3JDYSxFQUFRQyxVQUFZcEIsRUFBS2QsTUFBTVgsT0FBT2lCLEdBQWNHLEVBQWNLLEVBQUtiLElBQUlaLE9BQU9pQixHQUNsRmUsRUFBR0UsWUFBWVUsR0FFZixJQUFJRSxFQUFNM0IsRUFBS3dCLElBQUlqQyxJQUNmLElBQUlxQyxFQUFLekIsU0FBU1MsY0FBYyxNQU1oQyxPQUxBZ0IsRUFBR1QsUUFBUWIsS0FBT0EsRUFDbEJzQixFQUFHVCxRQUFRNUIsSUFBTUEsRUFDakJxQyxFQUFHQyxNQUFNQyxTQUFXLFdBQ3BCRixFQUFHUixVQUFVQyxJQUFJLDBCQUNqQlIsRUFBR0UsWUFBWWEsR0FDUkEsSUFJWCxPQURBTixFQUFNUCxZQUFZRixHQUNYYyxJQUVYakMsRUFBUXFCLFlBQVlKLEdBQ3BCakIsRUFBUXFCLFlBQVlPLEdBRXhCLEtBQUksSUFBRS9CLEVBQUcsTUFBRUMsRUFBSyxJQUFFQyxFQUFHLE1BQUVNLElBRW5CLE1BQU0sUUFBRUwsR0FBWW5CLEtBQUtxQixRQUV6QkosRUFBUSxJQUFJbEIsRUFBU2tCLEdBSWpCTyxFQUFRLElBQUl6QixFQUhYbUIsRUFHb0IsSUFBSW5CLEVBQVNtQixHQUFPRCxFQUZwQk8sR0FLTixpQkFBUlIsSUFBa0JBLEVBQU1oQixLQUFLcUIsUUFBUUksS0FBSytCLFVBQVVuRixHQUFLQSxJQUFNMkMsSUFDdEVDLEVBQVFqQixLQUFLcUIsUUFBUUosUUFBT0EsRUFBUWpCLEtBQUtxQixRQUFRSixPQUVyRCxJQUFJWixFQUFJdUIsU0FBU1MsY0FBYyxPQUMvQmhDLEVBQUV3QyxVQUFVQyxJQUFJLFlBQ2hCekMsRUFBRWlELE1BQVEsc0dBR0k5QixFQUFReEIsS0FBS3FCLFFBQVFHLE1BQVEsNEpBUzNDLElBQUlpQyxFQUFZNUMsS0FBS0MsT0FBT0csRUFBUWpCLEtBQUtxQixRQUFRSixPQUFTakIsS0FBS3FCLFFBQVFHLE9BRW5Fa0MsRUFBZ0IxRCxLQUFLZ0QsY0FBY1MsR0FBV3pDLEdBRzlDMkMsRUFBVyxJQUFJNUMsRUFBU0MsRUFBS0MsRUFBT08sRUFBT25CLEdBSS9DLE9BSEFMLEtBQUtrQyxVQUFVMEIsS0FBS0QsR0FFcEJELEVBQWNsQixZQUFZbkMsR0FDbkJzRCxPIiwiZmlsZSI6IlRpbWVTY2hlZHVsZVRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVGltZVNjaGVkdWxlVGFibGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGltZVNjaGVkdWxlVGFibGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNsYXNzIFRpbWVEYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdzdHJpbmcnKSBkID0gdGhpcy5wYXJzZShkKVxyXG4gICAgICAgIGlmICh0eXBlb2YgZCA9PT0gJ251bWJlcicpIGQgPSB0aGlzLm51bVBhcnNlKGQpO1xyXG4gICAgICAgIHRoaXMuaG91ciA9IGQuaG91cjtcclxuICAgICAgICB0aGlzLm1pbiA9IGQubWluO1xyXG4gICAgfVxyXG4gICAgdmFsdWVPZihlKSB7XHJcbiAgICAgICAgcmV0dXJuIDYwICogdGhpcy5ob3VyICsgdGhpcy5taW47XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQoJ0hIOm1tJyk7XHJcbiAgICB9XHJcbiAgICBmb3JtYXQoc3RyID0gJ0hIOm1tJykge1xyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9ISC8sICgnMDAnICsgdGhpcy5ob3VyKS5zbGljZSgtMikpO1xyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9tbS8sICgnMDAnICsgdGhpcy5taW4pLnNsaWNlKC0yKSk7XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIHBhcnNlKHN0cikge1xyXG4gICAgICAgIGxldCByZWcgPSAvKFxcZCspOihcXGQrKS87XHJcbiAgICAgICAgbGV0IHYgPSByZWcuZXhlYyhzdHIpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhvdXI6IHBhcnNlSW50KHZbMV0pLFxyXG4gICAgICAgICAgICBtaW46IHBhcnNlSW50KHZbMl0pLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG51bVBhcnNlKG4pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBob3VyOiBNYXRoLmZsb29yKG4gLyA2MCksXHJcbiAgICAgICAgICAgIG1pbjogbiAlIDYwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTY2hlZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXksIGJlZ2luLCBlbmQsIGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRheSA9IGRheTtcclxuICAgICAgICB0aGlzLmJlZ2luID0gYmVnaW47XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBlbGVtZW50OiBudWxsLFxyXG4gICAgICAgICAgICB0aW1lRm9ybWF0OiAnSEg6bW0nLFxyXG4gICAgICAgICAgICBiZWdpbjogbmV3IFRpbWVEYXRlKCcwOjAwJyksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFRpbWVEYXRlKCcyMzozMCcpLFxyXG4gICAgICAgICAgICByYW5nZTogbmV3IFRpbWVEYXRlKCcwOjMwJyksXHJcbiAgICAgICAgICAgIGRheXM6IFsn5pelJywgJ+aciCcsICfngasnLCAn5rC0JywgJ+acqCcsICfph5EnLCAn5ZyfJ10sXHJcbiAgICAgICAgICAgIHJhbmdlRm9ybWF0OiAn772ePGJyPidcclxuICAgICAgICB9LCBvcHRzKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuYmVnaW4gPT09ICdzdHJpbmcnKSB0aGlzLm9wdGlvbnMuYmVnaW4gPSBuZXcgVGltZURhdGUodGhpcy5vcHRpb25zLmJlZ2luKTtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5lbmQgPT09ICdzdHJpbmcnKSB0aGlzLm9wdGlvbnMuZW5kID0gbmV3IFRpbWVEYXRlKHRoaXMub3B0aW9ucy5lbmQpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnJhbmdlID09PSAnc3RyaW5nJykgdGhpcy5vcHRpb25zLnJhbmdlID0gbmV3IFRpbWVEYXRlKHRoaXMub3B0aW9ucy5yYW5nZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmVsZW1lbnQpIHRocm93IG5ldyBFcnJvcignVW5zZXQgb3B0aW9uIG9wdHMuZWxlbWVudCcpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmVsZW1lbnQgPT09ICdzdHJpbmcnKSB0aGlzLm9wdGlvbnMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVUYWJsZSA9IFsuLi4oZnVuY3Rpb24qIChzKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gcy5vcHRpb25zLmJlZ2luO1xyXG4gICAgICAgICAgICBsZXQgZW5kRGF0ZSA9IHMub3B0aW9ucy5lbmQ7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aW1lIDw9IGVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbjogdGltZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGltZSA9IG5ldyBUaW1lRGF0ZSh0aW1lICsgcy5vcHRpb25zLnJhbmdlKTtcclxuICAgICAgICAgICAgICAgIHREYXRhLmVuZCA9IHRpbWU7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0RGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkodGhpcyldO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVzID0gW107XHJcbiAgICAgICAgdGhpcy5fdGFibGVJbml0KCk7XHJcbiAgICB9XHJcbiAgICBfdGFibGVJbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgZGF5cywgdGltZUZvcm1hdCwgcmFuZ2VGb3JtYXQgfSA9IHRoaXMub3B0aW9ucztcclxuICAgICAgICBsZXQgdEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgbGV0IHJhbmdlVGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHJhbmdlVGgpO1xyXG5cclxuICAgICAgICBkYXlzLmZvckVhY2goZGF5ID0+IHtcclxuICAgICAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgICAgICAgdGguaW5uZXJUZXh0ID0gZGF5O1xyXG4gICAgICAgICAgICB0aC5kYXRhc2V0LmRheSA9IGRheTtcclxuICAgICAgICAgICAgdGguY2xhc3NMaXN0LmFkZCgndGltZS1zY2hlZHVsZS10YWJsZS10aCcpXHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRIZWFkLmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICBsZXQgdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlRWxlbWVudHMgPSB0aGlzLnRpbWVUYWJsZS5tYXAodGltZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIHRyLmNsYXNzTGlzdC5hZGQoJ3RpbWUtc2NoZWR1bGUtdGFibGUtdHInKVxyXG4gICAgICAgICAgICBsZXQgcmFuZ2VUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIHJhbmdlVGQuaW5uZXJIVE1MID0gdGltZS5iZWdpbi5mb3JtYXQodGltZUZvcm1hdCkgKyByYW5nZUZvcm1hdCArIHRpbWUuZW5kLmZvcm1hdCh0aW1lRm9ybWF0KTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQocmFuZ2VUZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXJyID0gZGF5cy5tYXAoZGF5ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICB0ZC5kYXRhc2V0LnRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgdGQuZGF0YXNldC5kYXkgPSBkYXk7XHJcbiAgICAgICAgICAgICAgICB0ZC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcclxuICAgICAgICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoJ3RpbWUtc2NoZWR1bGUtdGFibGUtdGQnKTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZDtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodEhlYWQpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodEJvZHkpO1xyXG4gICAgfVxyXG4gICAgc2V0KHsgZGF5LCBiZWdpbiwgZW5kLCByYW5nZSB9KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5vcHRpb25zO1xyXG5cclxuICAgICAgICBiZWdpbiA9IG5ldyBUaW1lRGF0ZShiZWdpbik7XHJcbiAgICAgICAgaWYgKCFlbmQpIHtcclxuICAgICAgICAgICAgcmFuZ2UgPSBuZXcgVGltZURhdGUocmFuZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJhbmdlID0gbmV3IFRpbWVEYXRlKG5ldyBUaW1lRGF0ZShlbmQpIC0gYmVnaW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXkgPT09ICdzdHJpbmcnKSBkYXkgPSB0aGlzLm9wdGlvbnMuZGF5cy5maW5kSW5kZXgoZCA9PiBkID09PSBkYXkpO1xyXG4gICAgICAgIGlmIChiZWdpbiA8IHRoaXMub3B0aW9ucy5iZWdpbikgYmVnaW4gPSB0aGlzLm9wdGlvbnMuYmVnaW47XHJcblxyXG4gICAgICAgIGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdzY2hlZHVsZScpO1xyXG4gICAgICAgIGUuc3R5bGUgPSBgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMjM4KTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogJHtyYW5nZSAvIHRoaXMub3B0aW9ucy5yYW5nZSAqIDEwMH0lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGVYKDAuOSk7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgICBgXHJcblxyXG5cclxuICAgICAgICBsZXQgdGltZUluZGV4ID0gTWF0aC5mbG9vcigoYmVnaW4gLSB0aGlzLm9wdGlvbnMuYmVnaW4pIC8gdGhpcy5vcHRpb25zLnJhbmdlKTtcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSB0aGlzLnRhYmxlRWxlbWVudHNbdGltZUluZGV4XVtkYXldO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHNjaGVkdWxlID0gbmV3IFNjaGVkdWxlKGRheSwgYmVnaW4sIHJhbmdlLCBlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlcy5wdXNoKHNjaGVkdWxlKTtcclxuXHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChlKTtcclxuICAgICAgICByZXR1cm4gc2NoZWR1bGU7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==