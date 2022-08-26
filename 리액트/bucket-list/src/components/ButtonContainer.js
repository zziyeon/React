import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import styled from "styled-components/native";
import Proptypes from 'prop-types';
import {images} from '../images';

// const IconButton = ({type, onPressOut, id})=> {
//     const _onPressOut =()=>{
//         onPressOut(id);
//       };

//     return (
//         <TouchableOpacity onPressOut={_onPressOut}>
//             <Icon source={type} />
//         </TouchableOpacity>
//     );
// };

// IconButton.defaultProps = {
//     onPressOut:()=>{}
//   }

// IconButton.Proptypes = {
//     type: Proptypes.oneOf(Object.values(images)).isRequired,
//     onPressOut: Proptypes.func,
//     id: Proptypes.string,
//     completed: Proptypes.bool,
// };

// ===========================
const Title1 = styled.Text`
    width:${({ width }) => width - 40}px;
    height:50px;
    color: ${({ theme }) => theme.title};
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    color: ${({ theme }) => theme.title};
    align-self: flex-start;
    margin:10px 20px 5px;
`;

const ButtonContainer = () => {
  const _onPressOut=() =>{
    alert('누르ㅡㅡㅁ');
  //  images.completed
  };
  return (
    <TouchableOpacity onPress={_onPressOut}>
      <Title1>완료항목 전체 선택</Title1>
        </TouchableOpacity>
  )
}

ButtonContainer.defaultProps = {
    onPressOut:()=>{}
  }

  ButtonContainer.Proptypes = {
    // type: Proptypes.oneOf(Object.values(images)).isRequired,
    onPressOut: Proptypes.func,
    id: Proptypes.string,
    completed: Proptypes.bool,
};
// ===========================

export default ButtonContainer;
