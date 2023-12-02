
export default function Form(){
    return(
        <form action="#" className="mt-4" >
            
            <input type="text" placeholder="Name" name="name" />
            <input type="email" name="email" placeholder="Email" required/>
            <textarea name="messege" placeholder="Messege here" cols="20" rows="5"></textarea>
            <button type="submit">Send</button>
            
        </form>
    );
}


 