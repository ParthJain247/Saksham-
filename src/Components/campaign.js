import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './campaign.css'
import AOS from 'aos'
import "aos/dist/aos.css"
import 'font-awesome/css/font-awesome.min.css';
import Parallax from 'react-rellax'

class ContactForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      name: '',
      nameError: false,
      contact: '',
      email: '',
      emailError: false,
      emailError2: false,
      message: '',
      messageError: false,
      formValid: false,
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur   = this.handleBlur.bind(this);
    this.getData = this.getData.bind(this);
    this.getNumber = this.getNumber.bind(this)
  }
  
  isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }
  
  //checking wheather the user input is correct or valid
  handleBlur(e) {
   
    const name = e.target.name; 
    const value = e.target.value;

    this.setState({ [name]: value  });

    if (value.length <= 0 && (name === 'name')) {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    } 

    if (value.length <= 0 && (name === 'email')) {
      this.setState({ emailError: true });
      this.setState({ emailError2: false });
    } else {
      this.setState({ emailError: false });
      if(this.isValidEmail(value)) {
        this.setState({ emailError2: false });  
      } else {
        this.setState({ emailError2: true });  
      }
    } 

  }
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value  });
  }
  
  getData(val){
    if (!/[0-9]/.test(val.target.value)) {
      console.log('not a number')
      document.getElementById("price").innerHTML="<span>Please enter a number</span>"
    }else{
      this.setState({
        data:val.target.value
      })
      console.log(this.state.data)
      document.getElementById("price").innerHTML=this.state.data
    } 
  }

  getNumber(){
    const hello = document.getElementById('rs-10').value
    console.log(hello)
   
    
  }
  handleSubmit(e) {
    const { name, email, message, nameError, emailError, emailError2, messageError } = this.state;
    
    this.setState({ nameError: name ? false : true });
    this.setState({ messageError: message ? false : true });
    this.setState({ emailError: email ? false : true });
    if (email && !emailError) { this.setState({ emailError2: this.isValidEmail(email) ? false : true }); }
    

    if (name && email && message && !nameError && !emailError && !emailError2 && !messageError) {
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }

    e.preventDefault(); 
  }
  
  render() {
    
    const { name, email, message, nameError, emailError, emailError2, messageError, formValid } = this.state;

    if(!formValid) {
      
    return (
<div className="CampaignsPage">
<Parallax speed = {-7}>
  <section class="section section-top">

        <div class="content rellax" data-rellax-speed="5">
          <Parallax speed={7}>
            <h1>{this.props.title}</h1>
            <a href="#" class="btn btn-primary">{this.props.button}</a>
          </Parallax>
        </div>

      </section>
      </Parallax>

		<section class="section section-stream">
			
      <br/>
      <br/>
      
			<div class="content rellax" data-rellax-speed="10">
      <Parallax speed={7}>
				<div>
          
					<h2 class="dark-text">{this.props.cardTitle}</h2>
					<p>
						{this.props.cardContent}
					</p>
				</div>
        </Parallax>
        <Parallax speed={7}>
				<div >
					<h2 class="dark-text">{this.props.cardTitle1}</h2>
					<p>
						{this.props.cardContent1}
					</p>
				</div>
        </Parallax>
			</div>
		</section>

		<section class="section section-grid">
			<div data-aos="fade-up-left" class="card" data-rellax-speed="1" data-rellax-xs-speed="3">
				<img class="card-img-top" src={this.props.image}/>
				<h2>{this.props.imageTitle}<span class="card-body secondary-text dot"></span></h2>
				<p>
					{this.props.imageContent}
				</p>
			</div>
			<div data-aos="flip-down"class="card" data-rellax-speed="4" data-rellax-xs-speed="3">
				<img class="card-img-top" src={this.props.image1}/>
				<h2>{this.props.imageTitle1}<span class=" card-body secondary-text dot"></span></h2>
				<p>
          {this.props.imageContent1}
				</p>
			</div>
			<div data-aos="fade-up-right" class="card" data-rellax-speed="7" data-rellax-xs-speed="3">
				<img class="card-img-top" src={this.props.image2}/>
				<h2>{this.props.imageTitle2}<span class="card-body secondary-text dot"></span></h2>
				<p>
          {this.props.imageContent2}
				</p>
			</div>
    </section>
<div data-aos="fade-up" className="card shadow-lg p-3 mt-5  rounded float-left"  >
<figure className="position-static">
  
<div className="card-header bg-transparent border-0  text-dark text-uppercase"><h3>{this.props.contribution} </h3>
<img src="https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_15657706/thumb.jpg" class="card-img-top"/></div>
  <h1 id="price" className="text-dark">{this.state.data}</h1>
  <i class="fas fa-rupee-sign"></i>
  <input  className="form-control form-rounded "type="text" placeholder="" name="input-price" onChange={this.getData} />
  <br/>
  
  <br/>
  <div className="card-header bg-transparent border-0 text-dark text-uppercase"><h3 className="text-dark">{this.props.personal}</h3>
  
  </div>
  <div className="card-body form-control form-rounded text-light">
    <form action="/" onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
      <div className="form-group">
        <label className="mb-0 text-dark">Name : <span className="text-danger"></span></label>
        <input  name="name" type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} />
        { nameError
          ? <div className="alert alert-danger mt-2">Name is a required field.</div>
          : ''
        }
      </div>
      <br/>
      <div className="form-group">
        <label className="mb-0 text-dark"> Email : <span className="text-danger"></span></label>
        <input  name="email" type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} />
        { emailError
          ? <div className="alert alert-danger mt-2">Email is a required field.</div>
          : ''
        }
        { emailError2
          ? <div className="alert alert-danger mt-2">Email invalid.</div>
          : ''
        }
      </div>
      <br/>
      <div className="form-group">
        <label className="mb-0 text-dark">Contact number : </label>
        
        <input  name="contact" type="text" className="form-control" placeholder="Contact" onChange={this.handleChange} value={this.state.contact}  />
      </div>
      <br/>
      <div className="form-group">
        <label className="mb-0 text-dark">Message : <span className="text-danger"></span></label>
        <textarea row="4" name="message" type="text" className="form-control" placeholder="Message" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur} />
        { messageError
          ? <div className="alert alert-danger mt-2">Message is a required field.</div>
          : ''
        }
      </div>
      <br/>
        <p className="text-center mb-0"><input type="submit" className="btn btn-primary btn-lg w-100 text-uppercase" value="Contribute" /></p>
    </form>
    
  </div>
  </figure>
</div>
    </div>
    );
    //redirect page to thank the contributed user
      } else {
       return (
         <div className="thankyou_details">
           <div className="alert alert-success mt-3">Thank for your contribution </div>
            <div className="container-fluid">
              <h1>Thank your</h1>
              <legend className="">We would like to thank you Mr.{this.state.name} for your contribution of rupees {this.state.data}</legend>
            </div>
         </div>
        )
      }
  }
}

export default ContactForm;
