import React, { Component } from 'react';
import { connect } from 'react-redux';
import './blog.scss';

export const Blog = () => {
	return (
		<div className="view">
			<div className="blog content">
				<h1>Blog</h1>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
