import {
  getStyleguideColorsCode,
  getStyleguideTextStylesCode,
  getLayerCode
} from "./code-helpers";
import { OPTION_NAMES } from "./constants";
import { getResourceContainer, getResources } from "./utils";

function layer(context, selectedLayer) {
  var containerAndType = getResourceContainer(context);
  var options = {
    useLinkedStyleguides: context.getOption(
      OPTION_NAMES.USE_LINKED_STYLEGUIDES
    ),
    showDimensions: context.getOption(OPTION_NAMES.SHOW_DIMENSIONS),
    colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT),
    defaultValues: context.getOption(OPTION_NAMES.SHOW_DEFAULT_VALUES)
  };
  var code = getLayerCode(containerAndType, selectedLayer, options);

  return {
    code: code,
    language: "javascript"
  };
}

export default {
  layer
};
