import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="authors">
          Inspired by: &nbsp;
          <a href="https://github.com/Gjmrd/gjmrd.github.io" target="_blank" rel="noopener noreferrer">
              <u>gjmrd.github.io</u>
          </a>
          <br />
          But rewritten with only functional components and hooks.
        </div>
      </div>
    </div>
  );
}