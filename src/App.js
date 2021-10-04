import './App.css';
import Homepage from './Components/Homepage';
import NavigationBar from './Components/NavigationBar';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import WhySakshamPage from './Components/Why_Saksham';
import Health from './Components/Health';
import ContactForm from './Components/campaign';
import SchoolForm from './Components/SchoolForm';
import ContactUsForm from './Components/ContactUsForm';

function App() {

    const text = "Health is characterized by World Health Organization (WHO) as, a 'Condition of complete physical, mental, and social prosperity, and not simply the shortfall of sickness or ailment.'For people, actual health implies a decent body health, which is sound as a result of customary active (work out), great sustenance, and sufficient rest. As a nation’s or alternately locale’s kin experience further developed sustenance, medical services, ways of life and personal satisfaction, their tallness and weight by and large increment."
    const image = "https://www.oneindia.com/ph-big/2020/04/homeless-poor-people-receive-foods-other-donation-across-india_15880458341.jpg"
    const title = 'A short story about “Saksham” helping people​'
    const quote = '“The purpose of our lives is to be happy.” — Dalai Lama'
    const story = [<div>
      <p>Got to hear the news few years back that a person will have to sell his house to get his treatment done as the doctors demanded ₹15,000/- for the operation, as the person who met with the accident needed a rod to be fixed in the place of his thigh bone.</p>
      <p>Mrs. Namita Gaur shared the story everywhere and within 3 to 4 hours collected approx. ₹30,000/- with which she not only helped him get the operation done successfully but also did fill his home with ration of 6 months.</p>
    </div>]
    const facts = [
      '27 crore people in 64 districts across 13 states don’t have a single blood bank',
      'Just 1833 people are there per one government hospital bed',
      'Just 1833 people are there per one government hospital bed',
      'Just 1833 people are there per one government hospital bed'
    ]

    return (
    <div className="App">
        <BrowserRouter>
        <NavigationBar />
          <Switch>
            <Route path="/WhySaksham">
              <div className="content-app">
                <WhySakshamPage />
              </div>
            </Route>
            <Route path="/Health">
              <div className="content-app">
                <Health quote={quote} text={text} image={image} story={story} facts={facts} title={title} />
              </div>
            </Route>
            <Route path="/Education">
              <div className="content-app">
                <Health quote={quote} text={text} image={image} story={story} facts={facts} title={title} />
              </div>
            </Route>
            <Route path="/WomenEmpowerment">
              <div className="content-app">
                <Health quote={quote} text={text} image={image} story={story} facts={facts} title={title} />
              </div>
            </Route>
            <Route path="/Poverty">
              <div className="content-app">
                <Health quote={quote} text={text} image={image} story={story} facts={facts} title={title} />
              </div>
            </Route>
            <Route path="/Hunger">
              <div className="content-app">
                <Health quote={quote} text={text} image={image} story={story} facts={facts} title={title} />
              </div>
            </Route>
            <Route path="/Campaign1">
              <div className="content-app">
                <ContactForm title="Lorean Ipsum" button="learn more" cardTitle="Hello World" cardContent="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." cardTitle1="Hello World" cardContent1="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." image="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9vciUyMGNoaWxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" image1="https://thumbs.dreamstime.com/b/indian-poor-children-street-mandu-india-poverty-major-issue-february-unidentified-120730284.jpg" image2="https://images.pexels.com/photos/732613/pexels-photo-732613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" imageTitle="Hello" imageTitle1="Hello" imageTitle2="Hello" imageContent="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." imageContent1="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit."imageContent2="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." contribution="Contribution" personal="Personal Info"/>
              </div>
            </Route>
            <Route path="/Campaign2">
              <div className="content-app">
                <ContactForm title="Lorean Ipsum" button="learn more" cardTitle="Hello World" cardContent="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." cardTitle1="Hello World" cardContent1="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." image="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9vciUyMGNoaWxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" image1="https://thumbs.dreamstime.com/b/indian-poor-children-street-mandu-india-poverty-major-issue-february-unidentified-120730284.jpg" image2="https://images.pexels.com/photos/732613/pexels-photo-732613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" imageTitle="Hello" imageTitle1="Hello" imageTitle2="Hello" imageContent="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." imageContent1="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit."imageContent2="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." contribution="Contribution" personal="Personal Info"/>
              </div>
            </Route>
            <Route path="/Campaign3">
              <div className="content-app">
                <ContactForm title="Lorean Ipsum" button="learn more" cardTitle="Hello World" cardContent="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." cardTitle1="Hello World" cardContent1="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." image="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9vciUyMGNoaWxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" image1="https://thumbs.dreamstime.com/b/indian-poor-children-street-mandu-india-poverty-major-issue-february-unidentified-120730284.jpg" image2="https://images.pexels.com/photos/732613/pexels-photo-732613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" imageTitle="Hello" imageTitle1="Hello" imageTitle2="Hello" imageContent="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." imageContent1="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit."imageContent2="Lorem tempor Lorem adipisicing laborum. Commodo aliqua pariatur aliqua nulla veniam. Labore culpa laborum do sint id officia officia dolore aliqua ex reprehenderit aliqua sit." contribution="Contribution" personal="Personal Info"/>
              </div>
            </Route>
            <Route path="/School">
              <div className="content-app">
                <SchoolForm />
              </div>
            </Route>
            <Route path="/Contact">
              <div className="content-app">
                <ContactUsForm />
              </div>
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
