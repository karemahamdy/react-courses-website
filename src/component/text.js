export default function Textbox({name,text, btn}) {
    return (
<>
        <div className="container">
            <div className="text">
                <h1>{name}</h1>
                <p>{text}</p>
                <button class="btn btn-primary">{btn}</button>
       
        </div>
    </div>
</>
    );
};

