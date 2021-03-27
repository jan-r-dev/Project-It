import Content from '../universal/content'

const contentArr = []

const calcContentObj = (contentObj) => {
if (Object.keys(contentObj).length > 0) {
    for (let el in contentObj) {
        contentArr.push(<Content content={el} />);
    };

    return contentObj;
}}


export default calcContentObj;
