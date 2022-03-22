import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Document_Filled from "../../../assets/icons/svg_document-filled.svg";
import Document_Outlined from "../../../assets/icons/svg_document-outlined.svg";
import Organization_Filled from "../../../assets/icons/svg_organization-filled.svg";
import Organization_Outlined from "../../../assets/icons/svg_organization-outlined.svg";
import Home_Filled from "../../../assets/icons/svg_home-filled.svg";
import Home_Outlined from "../../../assets/icons/svg_home-outlined.svg";
import Objective_Filled from "../../../assets/icons/svg_objective-filled.svg";
import Objective_Outlined from "../../../assets/icons/svg_objective-outlined.svg";
import Assignment_Filled from "../../../assets/icons/svg_assignment-filled.svg";
import Assignment_Outlined from "../../../assets/icons/svg_assignment-outlined.svg";
import Approval_Filled from "../../../assets/icons/svg_approval-filled.svg";
import Approval_Outlined from "../../../assets/icons/svg_approval-outlined.svg";
import Check_Filled from "../../../assets/icons/svg_check-filled.svg";
import Check_Outlined from "../../../assets/icons/svg_check-outlined.svg";
import Write_Filled from "../../../assets/icons/svg_write-filled.svg";
import Write_Outlined from "../../../assets/icons/svg_write-outlined.svg";
import Null_Filled from "../../../assets/icons/svg_null-filled.svg";
import Null_Outlined from "../../../assets/icons/svg_null-outlined.svg";

import ToRight from "../../../assets/icons/svg_toleft.svg";
import ToLeft from "../../../assets/icons/svg_toright.svg";
/*
import _Filled from '../../../assets/icons/svg_-filled.svg'
import _Outlined from '../../../assets/icons/svg_-outlined.svg'
*/

const SvgComponents = [
  {
    name: "",
    outlined: <Null_Outlined />,
    filled: <Null_Filled />
  },
  {
    name: "home",
    outlined: <Home_Outlined />,
    filled: <Home_Filled />
  },
  {
    name: "organization",
    outlined: <Organization_Outlined />,
    filled: <Organization_Filled />
  },
  {
    name: "check",
    outlined: <Check_Outlined />,
    filled: <Check_Filled />
  },
  {
    name: "assignment",
    outlined: <Assignment_Outlined />,
    filled: <Assignment_Filled />
  },
  {
    name: "document",
    outlined: <Document_Outlined />,
    filled: <Document_Filled />
  },
  {
    name: "approval",
    outlined: <Approval_Outlined />,
    filled: <Approval_Filled />
  },
  {
    name: "objective",
    outlined: <Objective_Outlined />,
    filled: <Objective_Filled />
  },
  {
    name: "write",
    outlined: <Write_Outlined />,
    filled: <Write_Filled />
  },
  {
    name: "toright",
    outlined: <ToRight />,
    filled: <ToRight />
  },
  {
    name: "toleft",
    outlined: <ToLeft />,
    filled: <ToLeft />
  }
];

const FilloutIcon = ( props ) => {
  let assignedComponent = <Null_Outlined />;

  for (let i = 0; i < SvgComponents.length; i++) {
    if (props.name == SvgComponents[i].name) {
      if (props.type == "filled") {
        assignedComponent = SvgComponents[i].filled;
        break;
      } else {
        assignedComponent = SvgComponents[i].outlined;
        break;
      }
    }
  }

  return (
    <IconContainer className={ "fillout-icon--" + props.size } { ...props }>
      { assignedComponent }
    </IconContainer>
  );
};

FilloutIcon.displayName = "FilloutIcon";
FilloutIcon.muiName = "Custom Icon";
FilloutIcon.defaultProps = {
  name: "",
  size: "big",
  type: "outlined"
};

const IconContainer = styled ( Box )`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--transparent);

  & svg {
    position: relative;
    min-width: calc(var(--big-icon-size) * 0.8);
    min-height: calc(var(--big-icon-size) * 0.8);
    width: calc(var(--big-icon-size) * 0.8);
    height: calc(var(--big-icon-size) * 0.8);
    fill: var(--light03);
    background-color: var(--transparent);
  }

  & path {
    stroke-width: 0 !important;
  }
`;

export default FilloutIcon;
