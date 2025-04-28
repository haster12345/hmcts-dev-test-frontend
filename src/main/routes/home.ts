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
//   app.post('/create-task', async(req, res)  => {
//     try {
//       console.log('Recieved body:', req.body);
//       const response = await axios(
//         {
//           method: 'post',
//           url : 'http://127.0.0.1:5000/tasks',
//           data: req.body
//         }
//       );
//       console.log(response.status);
//       res.send('Task POST request');
//     } catch (error) {
//       console.error('Error making request:', error);
//     }
//   });
// }
//
