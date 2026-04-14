export default function Section({title, children, ...otherAttributes}){
    return <section {...otherAttributes}>
        <h2>{title}</h2>
        {children}
    </section>
}