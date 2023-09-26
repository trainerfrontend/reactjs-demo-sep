import styles from './Heading.module.css';

const Heading = ({ userName }) => {
    const headingStyle = {
        color: 'blue',
        fontSize: '24px'
    }
    return <>
        <h1 className={styles.heading} style={headingStyle}>{userName}</h1>
        <h2 className="text-green-700 text-2xl">I am heading</h2>
    </>
}

export default Heading;
