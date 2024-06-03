import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid green;
  margin: 3px;
  background-color: #fff;
  text-align: center;
  white-space: nowrap;
  font-size: 9px;

  @media (max-width: 768px) {
    padding: 4px;
    margin: 2px;
    font-size: 9px;
  }

  @media (max-width: 480px) {
    padding: 3px;
    margin: 1px;
    font-size: 8px;
  }
`;

const TreeContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const ExampleTree = () => (
  <div>
    {" "}
    <div className="text-center text-[#092862] font-mont font-bold text-2xl py-10">
      Organization Structure
    </div>
    <TreeContainer className="pb-10">
      <Tree
        lineWidth={"1px"}
        lineColor={"black"}
        lineBorderRadius={"5px"}
        label={<StyledNode>Governing Board</StyledNode>}
      >
        <TreeNode label={<StyledNode>Executive Director</StyledNode>}>
          <TreeNode
            label={
              <StyledNode>
                HEAD: Digital Applications & Material Development Department
              </StyledNode>
            }
          ></TreeNode>
          <TreeNode
            label={
              <StyledNode>HEAD: Programmes and Projects Department</StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode>
                  EXPERT: Research and Innovations Section
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  EXPERT: Monitoring, Evaluation and Learning Section
                </StyledNode>
              }
            />
            <TreeNode
              label={
                <StyledNode>
                  EXPERT: Capacity Building and Volunteer Management Section
                </StyledNode>
              }
            />
          </TreeNode>
          <TreeNode
            label={<StyledNode>Administration and Accounts Section</StyledNode>}
          />
        </TreeNode>
      </Tree>
    </TreeContainer>
  </div>
);

export default ExampleTree;
