import React, { Component } from "react";
import PropTypes from "prop-types";
import ContainerCard from "./ContainerCard";
import CollapsableContainer from "./CollapsableContainer";


class MainCardCreator extends Component {
  render() {
    const { dataBack, skills, colorClass, fontClass, handleColorInput, handleFontInput, handleInputs } = this.props;
    return (
      <main className="created__target">
        <ContainerCard
          dataBack={dataBack}
          colorClass={colorClass}
          fontClass={fontClass}
        />
        <CollapsableContainer
          dataBack={dataBack}
          skills={skills}
          handleColorInput={handleColorInput}
          handleFontInput={handleFontInput}
          handleInputs={handleInputs}
        />
      </main>
    );
  }
}

//PROP-TYPES
MainCardCreator.propTypes = {
  dataBack: PropTypes.object.isRequired,
  colorClass: PropTypes.string.isRequired,
  fontClass: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleColorInput: PropTypes.func.isRequired,
  handleFontInput: PropTypes.func.isRequired,
  handleInputs: PropTypes.func.isRequired,
};


export default MainCardCreator;
