// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// src/App.test.js
// import { render, screen } from '@testing-library/react';
// import {PersonList, AppContext} from './App'

// describe('PersonList', () => {
//   it('renders a PersonList', () => {
//     render(
//       <AppContext.Provider value={'Bill'}>
//         <PersonList/>
//       </AppContext.Provider>
//     );
//     const childElement = screen.getByText("Bill");
//     expect(childElement).toBeInTheDocument();
//   })
// })

// import { render, screen } from '@testing-library/react';

// import userEvent
// import userEvent from '@testing-library/user-event' 

// import App from './App'

// describe('App', () => {

//   // other tests here ...

//   it('clicking button shows the text', async () => {
//     // 'load' the page
//     const app = render(<App />);
    
//     // locate the button
//     // const button = app.getByText("Click Me");
//     let button = screen.getByRole('button', {name: 'Click Me'});

//     // click the button
//     userEvent.click(button);
//     let text = await screen.findByText('Button Clicked');
//     expect(text).toBeInTheDocument();

//     // locate the button, waiting for it to appear
//     screen.findByText('Button Clicked') 
//       .then( (text) => { 
//         // verify the expected change occurred
//         expect(text).toBeInTheDocument();
//     })
//   })
// })

// import { render } from '@testing-library/react';

// import App from './App'

// describe ('App', () => {
//   it ('renders a user profile', () => {
//     const app = render (<App />);
//     const user = app.getByText('Name: Jim');
//     const email = app.getByText('Email: jim@galvanize.com');
//     expect(user).toBeInTheDocument();
//     expect(email).toBeInTheDocument();
//   })
// })

//from sample video API stubbing
//App.test.js
import React from 'react';

import {http} from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

const data = {
  cars: [
    {
      manufacturer: 'Porsche',
      model: '911 GT2 RS',
      image: 'https....' //mock data
    }
  ]
}
const server = setupServer ( // mock server
  http.get('/cars', (req, res, ctx) => { //rest - acts like a restful API
    return res(ctx.json(data))
  })
)

beforeAll(() => server.listen())
afterEach(() => server. resetHandlers())
afterAll(() => server.close())

test('loads and displays cars', async () => {
  render(<App/>);
  await waitFor(() => screen.getByRole('img'))

  expect(screen.getByRole('heading')).toHaveTextContent('Porsche 911 GT2 RS')
})
  