import Form from "./Form";
import Map from "./Map"
import "./contact.css";

export default function Contact(props){
    return(
        <div className="contact-body">
        <div className=" container contact" id="contact" >
            <div className="row">
                <h3> <span>{props.contactheader}</span></h3>
                <p>{props.contactp}</p>
                <div class="mt-4 col-lg-5 col-md-7 col-sm-10">
                    <Form></Form>
                </div>
                <div class="mt-4 col-lg-5 col-md-7 col-sm-10 ">
                    <Map></Map>
                </div>
            </div>

        </div>
        </div>
    );
}
 