import axios from 'axios';
import { Application } from 'express';

export default function get_tasks (app: Application): void {
  app.get('/', async (req, res) => {
    try {
      const response = await axios(
        {
          method: 'get',
          url: 'http://127.0.0.1:5000/tasks',
          responseType: 'json'
        }
      );
      console.log(response.data);
      res.render('home', { 'example': response.data });

    } catch (error) {
      console.error('Error making request:', error);
      res.render('home', {});
    }
  });
}


// export function post_task (app: Application): void {
//   app.post('/', async(req, res)  => {
//     try {
//       const response = await axios(
//         {
//           method: 'post',
//           url : 'http://127.0.0.1:5000/tasks',
//           data : {
//             'description': 'task2',
//             'CreatedDate': '26/04/2025',
//             'id': 2,
//             'status': 'incomplete',
//             'CaseNumber': 1,
//             'title': 'task2',
//           }
//         }
//       );
//       console.log(response.status);
//       res.send('Task POST request');
//     } catch (error) {
//       console.error('Error making request:', error);
//     }
//   });
// }

