import React from "react";
import { FiMusic } from "react-icons/fi";
import styled from "styled-components";

export const ChannelItem = ({
  handleChannel,
  channelName,
  id = 0,
  url = "",
}) => {
  return (
    <div className="item" onClick={() => handleChannel(id, url)}>
      <div className="icon">
        <FiMusic />
      </div>
      <div className="info">
        <h4>{channelName}</h4>
      </div>
    </div>
  );
};

export const Channel = styled.div`
  overflow: scroll;
  height: fit-content;
  max-height: 40vh;

  .item {
    cursor: pointer;
    max-width: 300px;
    display: flex;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    border-radius: 10rem;
    border: 2px solid black;
    margin-bottom: 12px;
    &:hover {
      background-color: #f7fffe;
    }
  }

  h4 {
    margin: 0;
    padding: 10px;
    font-weight: 500;
  }

  .icon {
    padding-left: 1rem;
  }
`;
