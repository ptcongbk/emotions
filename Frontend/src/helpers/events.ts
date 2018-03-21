// import * as Rx from 'rxjs/Rx';

// export namespace AppEvents {
//   var handlers: any = {};
//   var subject = new Rx.Subject<{ event: string, args: any}>();
//   var observable = new Rx.Observable.from(subject);

//   observable.subscribe(
//     ({ event, args}) => {
//       if(handlers[event]) {
//         for (let handler of handlers[event]) {
//           handler.func({ 'event': event, 'args': args });
//         }
//       }
//     }
//   );

//   /**
// 	  * Registers a handler for processing data when a specified event has been raised/broadcasted
// 	  * @param event The string that presents the name of an event
// 	  * @param handler The function to handler data when an event was raised
// 	  * @param identity The string that presents identity of the handler for unregistering later
// 	*/
//   export function on(event: string, handler: (info: any) => void, identity?: string) {
//     if (isNotEmpty(event) && handler != undefined) {
//       handlers[event] = handlers[event] || [];
//       handlers[event].push({ func: handler, identity: isNotEmpty(identity) ? identity : '' });
//     }
//   }

//   /**
// 	  * Unregisters a handler
// 	  * @param event The string that presents the name of an event
// 	  * @param identity The string that presents the identity of the handler for unregistering
// 	*/
//   export function off(event: string, identity: string) {
//     if (isNotEmpty(event) && isNotEmpty(identity) && handlers[event]) {
//       let index = find<any>(handlers[event], h => h.identity == identity);
//         if (index != -1) {
//           handlers[event].splice(index, 1);
//       }
//     }
//   }


//   function isNotNull(obj?: any) {
//     return obj != undefined && obj != null;
//   }

//   function isNotEmpty(obj?: string) {
//     return isNotNull(obj) && typeof obj == 'string' && obj.trim() != '';
//   }
//   // tim phan tu dau tien
//   function find<T>(items: Array<T>, predicate: (item: T) => boolean): number {
//     for (let index = 0; index < items.length; index++) {
//       if (predicate(items[index])) {
//         return index;
//       }
//     }
//     return -1;
//   }
//   // llll
// }



