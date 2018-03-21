! function() {
  "use strict";
  var hasPropertiesOtherThan = function(obj, propertyNames) {
          var propertyName, key;
          if (propertyNames || (propertyNames = []), obj)
              for (key in obj)
                  if (-1 == propertyNames.indexOf(key)) {
                      propertyName = key;
                      break
                  }
          return propertyName
      },
      getNodeText = function(d, labelMap) {
          var text;
          if (d.label) {
              var nodeKey;
              labelMap && labelMap.hasOwnProperty(d.label) && (nodeKey = labelMap[d.label]), d.hasOwnProperty(nodeKey) ? text = d.label.concat(":", d[nodeKey]) : hasPropertiesOtherThan(d, ["id", "label"]) ? (nodeKey = hasPropertiesOtherThan(d, ["id", "label"]), text = d.label.concat(":", d[nodeKey])) : (nodeKey = hasPropertiesOtherThan(d), text = d.label.concat(":", d[nodeKey]))
          } else hasPropertiesOtherThan(d, "id") ? (nodeKey = hasPropertiesOtherThan(d, ["id"]), text = d[nodeKey]) : (nodeKey = hasPropertiesOtherThan(d), text = d[nodeKey]);
          return text
      };
  angular.module("ngD3tree", []).directive("reingoldTilfordTree", function($parse, $window) {
      return {
          restrict: "EA",
          scope: {
              data: "=",
              labelMap: "=",
              jsonPath: "@",
              width: "@",
              height: "@",
              id: "@"
          },
          template: "<svg></svg>",
          link: function(scope, elem, attrs) {
              var width = scope.width,
                  height = scope.height,
                  labelMap = scope.labelMap,
                  d3 = $window.d3,
                  tree = d3.layout.tree().size([height, width - 160]),
                  rawSvg = elem.find("svg"),
                  svg = d3.select(rawSvg[0]).attr("width", width).attr("height", height).append("g").attr("transform", "translate(40,0)"),
                  diagonal = d3.svg.diagonal().projection(function(d) {
                      return [d.y, d.x]
                  }),
                  render = function(json) {
                      svg.selectAll("*").remove();
                      var nodes = tree.nodes(json),
                          links = tree.links(nodes),
                          node = (svg.selectAll("path.link").data(links).enter().append("path").attr("class", "link").attr("d", diagonal), svg.selectAll("g.node").data(nodes).enter().append("g").attr("class", "node").attr("transform", function(d) {
                              return "translate(" + d.y + "," + d.x + ")"
                          }));
                      node.append("circle").attr("r", 4.5), node.append("text").attr("dx", function(d) {
                          return d.children ? -8 : 8
                      }).attr("dy", 3).attr("text-anchor", function(d) {
                          return d.children ? "end" : "start"
                      }).text(function(d) {
                          return getNodeText(d, labelMap)
                      })
                  };
              scope.jsonPath ? d3.json(scope.jsonPath, function(error, json) {
                  return error ? void console.error(error) : void render(json)
              }) : scope.$watch("data", function(newVals, oldVals) {
                  return newVals ? render(newVals) : void 0
              }, !0), d3.select(self.frameElement).style("height", height + "px")
          }
      }
  }).directive("stickyForceLayout", function($parse, $window) {
      return {
          restrict: "EA",
          scope: {
              data: "=",
              labelMap: "=",
              jsonPath: "@",
              width: "@",
              height: "@",
              id: "@"
          },
          template: "<svg></svg>",
          link: function(scope, elem, attrs) {
              var width = scope.width,
                  height = scope.height,
                  labelMap = scope.labelMap,
                  d3 = $window.d3,
                  rawSvg = elem.find("svg"),
                  svg = d3.select(rawSvg[0]).attr("width", width).attr("height", height).append("g").attr("transform", "translate(40,0)"),
                  render = function(json) {
                      svg.selectAll("*").remove();
                      var force = d3.layout.force().nodes(json.nodes).links(json.links).size([width, height]).charge(-200).linkDistance(width / 10).start(),
                          drag = force.drag().on("dragstart", dragstart),
                          link = svg.selectAll("line.link").data(json.links).enter().append("line").attr("class", "link"),
                          node = svg.selectAll("g.node").data(json.nodes).enter().append("g").attr("class", "stickynode").on("dblclick", dblclick).call(drag);
                      node.append("text").attr("class", "stickynodetext").attr("dx", 18).attr("dy", ".35em").text(function(d) {
                          return getNodeText(d, labelMap)
                      }), node.append("circle").attr("r", 10), force.on("tick", function() {
                          link.attr("x1", function(d) {
                              return d.source.x
                          }).attr("y1", function(d) {
                              return d.source.y
                          }).attr("x2", function(d) {
                              return d.target.x
                          }).attr("y2", function(d) {
                              return d.target.y
                          }), node.attr("transform", function(d) {
                              return "translate(" + d.x + "," + d.y + ")"
                          })
                      })
                  },
                  dblclick = function(d) {
                      d3.select(this).classed("fixed", d.fixed = !1)
                  },
                  dragstart = function(d) {
                      d3.select(this).classed("fixed", d.fixed = !0)
                  };
              scope.jsonPath ? d3.json(scope.jsonPath, function(error, json) {
                  return error ? void console.error(error) : void render(json)
              }) : scope.$watch("data", function(newVals, oldVals) {
                  return newVals ? render(newVals) : void 0
              }, !0)
          }
      }
  }).directive("collapsibleTree", function($parse, $window) {
      return {
          restrict: "EA",
          scope: {
              data: "=",
              labelMap: "=",
              jsonPath: "@",
              width: "@",
              height: "@",
              id: "@"
          },
          template: "<svg></svg>",
          link: function(scope, elem, attrs) {
              var root, margin = {
                      top: 20,
                      right: 120,
                      bottom: 20,
                      left: 120
                  },
                  width = 960 - margin.right - margin.left,
                  height = 800 - margin.top - margin.bottom,
                  labelMap = scope.labelMap,
                  d3 = $window.d3,
                  i = 0,
                  duration = 500,
                  tree = d3.layout.tree().size([height, width]),
                  diagonal = d3.svg.diagonal().projection(function(d) {
                      return [d.y, d.x]
                  }),
                  rawSvg = elem.find("svg"),
                  svg = d3.select(rawSvg[0]).attr("width", width + margin.right + margin.left).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
                  update = function(source) {
                      var nodes = tree.nodes(root).reverse(),
                          links = tree.links(nodes);
                      nodes.forEach(function(d) {
                          d.y = 180 * d.depth
                      });
                      var node = svg.selectAll("g.node").data(nodes, function(d) {
                              return d.id || (d.id = ++i)
                          }),
                          nodeEnter = node.enter().append("g").attr("class", "node").attr("transform", function(d) {
                              return "translate(" + source.y0 + "," + source.x0 + ")"
                          }).on("click", click);
                      nodeEnter.append("circle").attr("r", 1e-6).style("fill", function(d) {
                          return d._children ? "lightsteelblue" : "#fff"
                      }), nodeEnter.append("text").attr("x", function(d) {
                          return d.children || d._children ? -10 : 10
                      }).attr("dy", ".35em").attr("text-anchor", function(d) {
                          return d.children || d._children ? "end" : "start"
                      }).text(function(d) {
                          return getNodeText(d, labelMap)
                      }).style("fill-opacity", 1e-6);
                      var nodeUpdate = node.transition().duration(duration).attr("transform", function(d) {
                          return "translate(" + d.y + "," + d.x + ")"
                      });
                      nodeUpdate.select("circle").attr("r", 4.5).style("fill", function(d) {
                          return d._children ? "lightsteelblue" : "#fff"
                      }), nodeUpdate.select("text").style("fill-opacity", 1);
                      var nodeExit = node.exit().transition().duration(duration).attr("transform", function(d) {
                          return "translate(" + source.y + "," + source.x + ")"
                      }).remove();
                      nodeExit.select("circle").attr("r", 1e-6), nodeExit.select("text").style("fill-opacity", 1e-6);
                      var link = svg.selectAll("path.link").data(links, function(d) {
                          return d.target.id
                      });
                      link.enter().insert("path", "g").attr("class", "link").attr("d", function(d) {
                          var o = {
                              x: source.x0,
                              y: source.y0
                          };
                          return diagonal({
                              source: o,
                              target: o
                          })
                      }), link.transition().duration(duration).attr("d", diagonal), link.exit().transition().duration(duration).attr("d", function(d) {
                          var o = {
                              x: source.x,
                              y: source.y
                          };
                          return diagonal({
                              source: o,
                              target: o
                          })
                      }).remove(), nodes.forEach(function(d) {
                          d.x0 = d.x, d.y0 = d.y
                      })
                  },
                  click = function(d) {
                      d.children ? (d._children = d.children, d.children = null) : (d.children = d._children, d._children = null), update(d)
                  },
                  collapse = function(d) {
                      d.children && (d._children = d.children, d._children.forEach(collapse), d.children = null)
                  },
                  render = function(json) {
                      root = json, root.x0 = height / 2, root.y0 = 0, json.children.forEach(collapse), update(json)
                  };
              scope.jsonPath ? d3.json(scope.jsonPath, function(error, json) {
                  return error ? void console.error(error) : void render(json)
              }) : scope.$watch("data", function(newVals, oldVals) {
                  return newVals ? render(newVals) : void 0
              }, !0), d3.select(self.frameElement).style("height", height + "px")
          }
      }
  }).directive("radialCluster", function($parse, $window) {
      return {
          restrict: "EA",
          scope: {
              data: "=",
              labelMap: "=",
              jsonPath: "@",
              radius: "@",
              id: "@"
          },
          template: "<svg></svg>",
          link: function(scope, elem, attrs) {
              var radius = scope.radius,
                  labelMap = scope.labelMap,
                  d3 = $window.d3,
                  cluster = d3.layout.cluster().size([360, radius - 120]),
                  rawSvg = elem.find("svg"),
                  svg = d3.select(rawSvg[0]).attr("width", 2 * radius).attr("height", 2 * radius).append("g").attr("transform", "translate(" + radius + "," + radius + ")"),
                  diagonal = d3.svg.diagonal.radial().projection(function(d) {
                      return [d.y, d.x / 180 * Math.PI]
                  }),
                  render = function(json) {
                      svg.selectAll("*").remove();
                      var nodes = cluster.nodes(json),
                          links = cluster.links(nodes),
                          node = (svg.selectAll("path.link").data(links).enter().append("path").attr("class", "link").attr("d", diagonal), svg.selectAll("g.node").data(nodes).enter().append("g").attr("class", "node").attr("transform", function(d) {
                              return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"
                          }));
                      node.append("circle").attr("r", 4.5), node.append("text").attr("dy", ".31em").attr("text-anchor", function(d) {
                          return d.x < 180 ? "start" : "end"
                      }).attr("transform", function(d) {
                          return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"
                      }).text(function(d) {
                          return getNodeText(d, labelMap)
                      })
                  };
              scope.jsonPath ? d3.json(scope.jsonPath, function(error, json) {
                  return error ? void console.error(error) : void render(json)
              }) : scope.$watch("data", function(newVals, oldVals) {
                  return newVals ? render(newVals) : void 0
              }, !0), d3.select(self.frameElement).style("height", 2 * radius + "px")
          }
      }
  }).directive("forceLayout", function($parse, $window) {
      return {
          restrict: "EA",
          scope: {
              data: "=",
              labelMap: "=",
              jsonPath: "@",
              width: "@",
              height: "@",
              id: "@"
          },
          template: "<svg></svg>",
          link: function(scope, elem, attrs) {
              var width = scope.width,
                  height = scope.height,
                  labelMap = scope.labelMap,
                  d3 = $window.d3,
                  rawSvg = elem.find("svg"),
                  svg = d3.select(rawSvg[0]).attr("width", width).attr("height", height).append("g").attr("pointer-events", "all"),
                  render = function(json) {
                      console.log("json"), console.log(json), svg.selectAll("*").remove();
                      var force = d3.layout.force().nodes(json.nodes).links(json.links).gravity(.05).linkDistance(width / 10).charge(-100).size([width, height]).start(),
                          link = svg.selectAll("line.link").data(json.links).enter().append("line").attr("class", "link"),
                          node = svg.selectAll("g.node").data(json.nodes).enter().append("g").attr("class", "node").call(force.drag);
                      node.append("text").attr("class", "nodetext").attr("dx", 12).attr("dy", ".35em").text(function(d) {
                          return getNodeText(d, labelMap)
                      }), node.append("circle").attr("r", 4.5), force.on("tick", function() {
                          link.attr("x1", function(d) {
                              return d.source.x
                          }).attr("y1", function(d) {
                              return d.source.y
                          }).attr("x2", function(d) {
                              return d.target.x
                          }).attr("y2", function(d) {
                              return d.target.y
                          }), node.attr("transform", function(d) {
                              return "translate(" + d.x + "," + d.y + ")"
                          })
                      })
                  };
              scope.jsonPath ? d3.json(scope.jsonPath, function(error, json) {
                  return error ? void console.error(error) : void render(json)
              }) : scope.$watch("data", function(newVals, oldVals) {
                  return newVals ? render(newVals) : void 0
              }, !0), d3.select(self.frameElement).style("height", height + "px")
          }
      }
  })
}();