import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();
  let item = props.shoes.find(function (item) {
    return item.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Box>
            <Title>상세페이지</Title>
          </Box>
          <img
            src={
              'https://codingapple1.github.io/shop/shoes' +
              (item.id + 1) +
              '.jpg'
            }
            width="100%"
            alt="item"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
