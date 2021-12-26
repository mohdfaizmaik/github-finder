import React from "react";
import prototypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.prototype = {
  repos: prototypes.array.isRequired,
};

export default Repos;
