import Counter from "../components/Counter";
import {connect} from "react-redux";
import {decrease, increase} from "../modules/counter";
import {bindActionCreators} from "redux";

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//     // 임시함수
//     increase: () => {
//         dispatch(increase())
//         // console.log('increase');
//     },
//     decrease: () => {
//         dispatch(decrease())
//         // console.log('decrease');
//     },
// });

export default connect(
    // mapStateToProps,  // 현재 스토어가 지니고 있는 상태
    // mapDispatchToProps, // store의 내장 함수 dispatch를 파라미터로 받아온다.
    state => ({
        number: state.counter.number,
    }),
    // dispatch => ({
    //     increase: () => dispatch(increase()),
    //     decrease: () => dispatch(decrease()),
    // }),
    dispatch =>
        bindActionCreators(
            {
                increase,
                decrease,
            },
            dispatch,
        ),
)(CounterContainer);