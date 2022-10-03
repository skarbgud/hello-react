import PropsTypes from 'prop-types';
import { Component } from 'react';

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 {name}  입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

// props 기본 설정
MyComponent.defaultProps = {
    name: '기본 이름'
};

//name의 값이 문자열(string) 형태로 전달해야한다
MyComponent.propTypes = {
    name: PropsTypes.string,
    favoriteNumber: PropsTypes.number.isRequired
};

export default MyComponent;