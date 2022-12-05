import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class extends Component {
  c="ambuj"
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  pageSize={8}
                  key="general"
                  category="general"
                  country="in"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  pageSize={8}
                  key="entertainment"
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  pageSize={8}
                  key="health"
                  category="health"
                  country="in"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  pageSize={8}
                  key="science"
                  category="science"
                  country="in"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  pageSize={8}
                  key="sports"
                  category="sports"
                  country="in"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  pageSize={8}
                  key="technology"
                  category="technology"
                  country="in"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  pageSize={8}
                  key="p=business"
                  category="business"
                  country="in"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
