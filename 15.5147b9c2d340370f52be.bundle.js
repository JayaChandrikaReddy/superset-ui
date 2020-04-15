(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{773:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CategoricalColorNamespace",(function(){return CategoricalColorNamespace_namespaceObject})),__webpack_require__.d(__webpack_exports__,"CategoricalColorScale",(function(){return src_CategoricalColorScale})),__webpack_require__.d(__webpack_exports__,"CategoricalScheme",(function(){return CategoricalScheme.a})),__webpack_require__.d(__webpack_exports__,"getCategoricalSchemeRegistry",(function(){return CategoricalSchemeRegistrySingleton.a})),__webpack_require__.d(__webpack_exports__,"getSequentialSchemeRegistry",(function(){return SequentialSchemeRegistrySingleton.a})),__webpack_require__.d(__webpack_exports__,"SequentialScheme",(function(){return SequentialScheme.a})),__webpack_require__.d(__webpack_exports__,"BRAND_COLOR",(function(){return BRAND_COLOR}));var CategoricalColorNamespace_namespaceObject={};__webpack_require__.r(CategoricalColorNamespace_namespaceObject),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"default",(function(){return CategoricalColorNamespace_CategoricalColorNamespace})),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"DEFAULT_NAMESPACE",(function(){return DEFAULT_NAMESPACE})),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"getNamespace",(function(){return getNamespace})),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"getColor",(function(){return getColor})),__webpack_require__.d(CategoricalColorNamespace_namespaceObject,"getScale",(function(){return getScale}));var ExtensibleFunction=__webpack_require__(385),ordinal=__webpack_require__(803);function stringifyAndTrim(value){return String(value).trim()}class CategoricalColorScale_CategoricalColorScale extends ExtensibleFunction.a{constructor(colors,parentForcedColors){super(value=>this.getColor(value)),this.colors=colors,this.scale=Object(ordinal.a)(),this.scale.range(colors),this.parentForcedColors=parentForcedColors,this.forcedColors={}}getColor(value){const cleanedValue=stringifyAndTrim(value),parentColor=this.parentForcedColors&&this.parentForcedColors[cleanedValue];if(parentColor)return parentColor;const forcedColor=this.forcedColors[cleanedValue];return forcedColor||this.scale(cleanedValue)}setColor(value,forcedColor){return this.forcedColors[stringifyAndTrim(value)]=forcedColor,this}getColorMap(){const colorMap={};return this.scale.domain().forEach(value=>{colorMap[value.toString()]=this.scale(value)}),Object.assign(Object.assign(Object.assign({},colorMap),this.forcedColors),this.parentForcedColors)}copy(){const copy=new CategoricalColorScale_CategoricalColorScale(this.scale.range(),this.parentForcedColors);return copy.forcedColors=Object.assign({},this.forcedColors),copy.domain(this.domain()),copy.unknown(this.unknown()),copy}domain(newDomain){return void 0===newDomain?this.scale.domain():(this.scale.domain(newDomain),this)}range(newRange){return void 0===newRange?this.scale.range():(this.colors=newRange,this.scale.range(newRange),this)}unknown(value){return void 0===value?this.scale.unknown():(this.scale.unknown(value),this)}}var src_CategoricalColorScale=CategoricalColorScale_CategoricalColorScale,CategoricalSchemeRegistrySingleton=__webpack_require__(772);class CategoricalColorNamespace_CategoricalColorNamespace{constructor(name){this.name=name,this.scales={},this.forcedItems={}}getScale(schemeId){var _a,_b;const id=null!==(_a=null!=schemeId?schemeId:Object(CategoricalSchemeRegistrySingleton.a)().getDefaultKey())&&void 0!==_a?_a:"",scale=this.scales[id];if(scale)return scale;const scheme=Object(CategoricalSchemeRegistrySingleton.a)().get(id),newScale=new src_CategoricalColorScale(null!==(_b=null==scheme?void 0:scheme.colors)&&void 0!==_b?_b:[],this.forcedItems);return this.scales[id]=newScale,newScale}setColor(value,forcedColor){return this.forcedItems[stringifyAndTrim(value)]=forcedColor,this}}const namespaces={},DEFAULT_NAMESPACE="GLOBAL";function getNamespace(name=DEFAULT_NAMESPACE){const instance=namespaces[name];if(instance)return instance;const newInstance=new CategoricalColorNamespace_CategoricalColorNamespace(name);return namespaces[name]=newInstance,newInstance}function getColor(value,schemeId,namespace){return getNamespace(namespace).getScale(schemeId).getColor(value)}function getScale(scheme,namespace){return getNamespace(namespace).getScale(scheme)}var CategoricalScheme=__webpack_require__(53),SequentialSchemeRegistrySingleton=__webpack_require__(774),SequentialScheme=__webpack_require__(124);const BRAND_COLOR="#00A699"},838:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return reactify}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function reactify(renderFn,callbacks){class ReactifiedComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(props){super(props),this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==callbacks?void 0:callbacks.componentWillUnmount)&&callbacks.componentWillUnmount.bind(this)()}setContainerRef(ref){this.container=ref}execute(){this.container&&renderFn(this.container,this.props)}render(){const{id:id,className:className}=this.props;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:this.setContainerRef,id:id,className:className})}}const ReactifiedClass=ReactifiedComponent;return renderFn.displayName&&(ReactifiedClass.displayName=renderFn.displayName),renderFn.propTypes&&(ReactifiedClass.propTypes=Object.assign(Object.assign({},ReactifiedClass.propTypes),renderFn.propTypes)),renderFn.defaultProps&&(ReactifiedClass.defaultProps=renderFn.defaultProps),ReactifiedComponent}}}]);
//# sourceMappingURL=15.5147b9c2d340370f52be.bundle.js.map