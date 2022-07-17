import React from "react";
import { mockTags } from "../../interface/lecture";

interface Props {
  tagListData: [mockTags];
}

const TagList = ({ tagListData }: Props): JSX.Element => {
  const tagList = tagListData.map((tag) => {
    return <span key={tag.id}>{tag.name}</span>;
  });
  return <div>{tagList}</div>;
};

export default TagList;
