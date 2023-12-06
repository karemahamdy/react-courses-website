export default function Box({ icon, text, paragraph }) {
    return (
        <>
            <article class="category">
                <span class="categories_icons"><i>{icon}</i></span>
                <h5>{text}</h5>
                <p>{paragraph}</p>
            </article>
        </>
    );
}