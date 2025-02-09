// source: raw.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.raw.LayerShapes');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.raw.Layer');
goog.require('proto.vlsir.raw.Path');
goog.require('proto.vlsir.raw.Polygon');
goog.require('proto.vlsir.raw.Rectangle');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vlsir.raw.LayerShapes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.raw.LayerShapes.repeatedFields_, null);
};
goog.inherits(proto.vlsir.raw.LayerShapes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.raw.LayerShapes.displayName = 'proto.vlsir.raw.LayerShapes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.raw.LayerShapes.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vlsir.raw.LayerShapes.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.raw.LayerShapes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.raw.LayerShapes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.LayerShapes.toObject = function(includeInstance, msg) {
  var f, obj = {
    layer: (f = msg.getLayer()) && proto.vlsir.raw.Layer.toObject(includeInstance, f),
    rectanglesList: jspb.Message.toObjectList(msg.getRectanglesList(),
    proto.vlsir.raw.Rectangle.toObject, includeInstance),
    polygonsList: jspb.Message.toObjectList(msg.getPolygonsList(),
    proto.vlsir.raw.Polygon.toObject, includeInstance),
    pathsList: jspb.Message.toObjectList(msg.getPathsList(),
    proto.vlsir.raw.Path.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vlsir.raw.LayerShapes}
 */
proto.vlsir.raw.LayerShapes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.raw.LayerShapes;
  return proto.vlsir.raw.LayerShapes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.raw.LayerShapes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.raw.LayerShapes}
 */
proto.vlsir.raw.LayerShapes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vlsir.raw.Layer;
      reader.readMessage(value,proto.vlsir.raw.Layer.deserializeBinaryFromReader);
      msg.setLayer(value);
      break;
    case 2:
      var value = new proto.vlsir.raw.Rectangle;
      reader.readMessage(value,proto.vlsir.raw.Rectangle.deserializeBinaryFromReader);
      msg.addRectangles(value);
      break;
    case 3:
      var value = new proto.vlsir.raw.Polygon;
      reader.readMessage(value,proto.vlsir.raw.Polygon.deserializeBinaryFromReader);
      msg.addPolygons(value);
      break;
    case 4:
      var value = new proto.vlsir.raw.Path;
      reader.readMessage(value,proto.vlsir.raw.Path.deserializeBinaryFromReader);
      msg.addPaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vlsir.raw.LayerShapes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.raw.LayerShapes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.raw.LayerShapes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.LayerShapes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vlsir.raw.Layer.serializeBinaryToWriter
    );
  }
  f = message.getRectanglesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vlsir.raw.Rectangle.serializeBinaryToWriter
    );
  }
  f = message.getPolygonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vlsir.raw.Polygon.serializeBinaryToWriter
    );
  }
  f = message.getPathsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vlsir.raw.Path.serializeBinaryToWriter
    );
  }
};


/**
 * optional Layer layer = 1;
 * @return {?proto.vlsir.raw.Layer}
 */
proto.vlsir.raw.LayerShapes.prototype.getLayer = function() {
  return /** @type{?proto.vlsir.raw.Layer} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.raw.Layer, 1));
};


/**
 * @param {?proto.vlsir.raw.Layer|undefined} value
 * @return {!proto.vlsir.raw.LayerShapes} returns this
*/
proto.vlsir.raw.LayerShapes.prototype.setLayer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.raw.LayerShapes} returns this
 */
proto.vlsir.raw.LayerShapes.prototype.clearLayer = function() {
  return this.setLayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.raw.LayerShapes.prototype.hasLayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Rectangle rectangles = 2;
 * @return {!Array<!proto.vlsir.raw.Rectangle>}
 */
proto.vlsir.raw.LayerShapes.prototype.getRectanglesList = function() {
  return /** @type{!Array<!proto.vlsir.raw.Rectangle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.raw.Rectangle, 2));
};


/**
 * @param {!Array<!proto.vlsir.raw.Rectangle>} value
 * @return {!proto.vlsir.raw.LayerShapes} returns this
*/
proto.vlsir.raw.LayerShapes.prototype.setRectanglesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vlsir.raw.Rectangle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.raw.Rectangle}
 */
proto.vlsir.raw.LayerShapes.prototype.addRectangles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vlsir.raw.Rectangle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.raw.LayerShapes} returns this
 */
proto.vlsir.raw.LayerShapes.prototype.clearRectanglesList = function() {
  return this.setRectanglesList([]);
};


/**
 * repeated Polygon polygons = 3;
 * @return {!Array<!proto.vlsir.raw.Polygon>}
 */
proto.vlsir.raw.LayerShapes.prototype.getPolygonsList = function() {
  return /** @type{!Array<!proto.vlsir.raw.Polygon>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.raw.Polygon, 3));
};


/**
 * @param {!Array<!proto.vlsir.raw.Polygon>} value
 * @return {!proto.vlsir.raw.LayerShapes} returns this
*/
proto.vlsir.raw.LayerShapes.prototype.setPolygonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vlsir.raw.Polygon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.raw.Polygon}
 */
proto.vlsir.raw.LayerShapes.prototype.addPolygons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vlsir.raw.Polygon, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.raw.LayerShapes} returns this
 */
proto.vlsir.raw.LayerShapes.prototype.clearPolygonsList = function() {
  return this.setPolygonsList([]);
};


/**
 * repeated Path paths = 4;
 * @return {!Array<!proto.vlsir.raw.Path>}
 */
proto.vlsir.raw.LayerShapes.prototype.getPathsList = function() {
  return /** @type{!Array<!proto.vlsir.raw.Path>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.raw.Path, 4));
};


/**
 * @param {!Array<!proto.vlsir.raw.Path>} value
 * @return {!proto.vlsir.raw.LayerShapes} returns this
*/
proto.vlsir.raw.LayerShapes.prototype.setPathsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vlsir.raw.Path=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.raw.Path}
 */
proto.vlsir.raw.LayerShapes.prototype.addPaths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vlsir.raw.Path, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.raw.LayerShapes} returns this
 */
proto.vlsir.raw.LayerShapes.prototype.clearPathsList = function() {
  return this.setPathsList([]);
};


