import { useSelector } from "react-redux";

const Result = () => {
    const {num1, num2, result} = useSelector(state => state);

    return<div>
        {`The sum of ${num1} & ${num2} is ${result}`}
    </div>
}

export default Result;
