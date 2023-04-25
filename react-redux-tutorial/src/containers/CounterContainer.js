import Counter from "../components/Counter";
import {connect, useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../modules/counter";
import {bindActionCreators} from "redux";
import {useCallback} from "react";

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
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

// export default connect(
//     // mapStateToProps,  // 현재 스토어가 지니고 있는 상태
//     // mapDispatchToProps, // store의 내장 함수 dispatch를 파라미터로 받아온다.
//     state => ({
//         number: state.counter.number,
//     }),
//     // dispatch => ({
//     //     increase: () => dispatch(increase()),
//     //     decrease: () => dispatch(decrease()),
//     // }),
//     dispatch =>
//         bindActionCreators(
//             {
//                 increase,
//                 decrease,
//             },
//             dispatch,
//         ),
// )(CounterContainer);

export default CounterContainer;