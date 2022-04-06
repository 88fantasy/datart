/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { BoardContext } from 'app/pages/DashBoardPage/components/BoardProvider/BoardProvider';
import { WidgetMapper } from 'app/pages/DashBoardPage/components/WidgetMapper/WidgetMapper';
import { WidgetContext } from 'app/pages/DashBoardPage/components/WidgetProvider/WidgetProvider';
import { getWidgetStyle } from 'app/pages/DashBoardPage/utils/widget';
import React, { memo, useContext } from 'react';
import styled from 'styled-components/macro';

export const WidgetOfFree: React.FC<{}> = memo(() => {
  const widget = useContext(WidgetContext);
  const { boardType } = useContext(BoardContext);
  const widgetStyle = getWidgetStyle(boardType, widget);

  return (
    <Wrap style={widgetStyle}>
      <WidgetMapper boardType="free" boardEditing={true} />
    </Wrap>
  );
});

export default WidgetOfFree;
const Wrap = styled.div`
  &:hover .widget-tool-dropdown {
    visibility: visible;
  }

  & > span:last-child {
    z-index: 999999;
  }
`;
