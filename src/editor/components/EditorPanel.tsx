/**
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 EclipseSource Munich
 * Licensed under MIT
 * https://github.com/eclipsesource/jsonforms-editor/blob/master/LICENSE
 * ---------------------------------------------------------------------
 */
import { Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';

import { Editor } from './Editor';
import { EditorPreview } from './EditorPreview';

interface TabContentProps {
  children?: React.ReactNode;
  index: number;
  currentIndex: number;
}

const TabContent: React.FC<TabContentProps> = (props: TabContentProps) => {
  const { children, index, currentIndex, ...other } = props;
  return (
    <div hidden={currentIndex !== index} {...other}>
      {currentIndex === index && children}
    </div>
  );
};

export const EditorPanel = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label='Editor' />
        <Tab label='Preview' />
      </Tabs>
      <TabContent index={0} currentIndex={selectedTab}>
        <Editor />
      </TabContent>
      <TabContent index={1} currentIndex={selectedTab}>
        <EditorPreview />
      </TabContent>
    </>
  );
};
