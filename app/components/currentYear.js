export default function CurrentYear() {
    const fullYear = new Date().getFullYear();
    return (<span>{ fullYear }</span>);
}
