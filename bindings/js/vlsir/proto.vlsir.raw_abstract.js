// source: raw.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.raw.Abstract');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.raw.AbstractPort');
goog.require('proto.vlsir.raw.LayerShapes');
goog.require('proto.vlsir.raw.Polygon');

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
proto.vlsir.raw.Abstract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.raw.Abstract.repeatedFields_, null);
};
goog.inherits(proto.vlsir.raw.Abstract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.raw.Abstract.displayName = 'proto.vlsir.raw.Abstract';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.raw.Abstract.repeatedFields_ = [4,5];



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
proto.vlsir.raw.Abstract.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.raw.Abstract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.raw.Abstract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.Abstract.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outline: (f = msg.getOutline()) && proto.vlsir.raw.Polygon.toObject(includeInstance, f),
    portsList: jspb.Message.toObjectList(msg.getPortsList(),
    proto.vlsir.raw.AbstractPort.toObject, includeInstance),
    blockagesList: jspb.Message.toObjectList(msg.getBlockagesList(),
    proto.vlsir.raw.LayerShapes.toObject, includeInstance)
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
 * @return {!proto.vlsir.raw.Abstract}
 */
proto.vlsir.raw.Abstract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.raw.Abstract;
  return proto.vlsir.raw.Abstract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.raw.Abstract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.raw.Abstract}
 */
proto.vlsir.raw.Abstract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.vlsir.raw.Polygon;
      reader.readMessage(value,proto.vlsir.raw.Polygon.deserializeBinaryFromReader);
      msg.setOutline(value);
      break;
    case 4:
      var value = new proto.vlsir.raw.AbstractPort;
      reader.readMessage(value,proto.vlsir.raw.AbstractPort.deserializeBinaryFromReader);
      msg.addPorts(value);
      break;
    case 5:
      var value = new proto.vlsir.raw.LayerShapes;
      reader.readMessage(value,proto.vlsir.raw.LayerShapes.deserializeBinaryFromReader);
      msg.addBlockages(value);
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
proto.vlsir.raw.Abstract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.raw.Abstract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.raw.Abstract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.Abstract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutline();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vlsir.raw.Polygon.serializeBinaryToWriter
    );
  }
  f = message.getPortsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vlsir.raw.AbstractPort.serializeBinaryToWriter
    );
  }
  f = message.getBlockagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.vlsir.raw.LayerShapes.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vlsir.raw.Abstract.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.raw.Abstract} returns this
 */
proto.vlsir.raw.Abstract.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Polygon outline = 2;
 * @return {?proto.vlsir.raw.Polygon}
 */
proto.vlsir.raw.Abstract.prototype.getOutline = function() {
  return /** @type{?proto.vlsir.raw.Polygon} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.raw.Polygon, 2));
};


/**
 * @param {?proto.vlsir.raw.Polygon|undefined} value
 * @return {!proto.vlsir.raw.Abstract} returns this
*/
proto.vlsir.raw.Abstract.prototype.setOutline = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.raw.Abstract} returns this
 */
proto.vlsir.raw.Abstract.prototype.clearOutline = function() {
  return this.setOutline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.raw.Abstract.prototype.hasOutline = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated AbstractPort ports = 4;
 * @return {!Array<!proto.vlsir.raw.AbstractPort>}
 */
proto.vlsir.raw.Abstract.prototype.getPortsList = function() {
  return /** @type{!Array<!proto.vlsir.raw.AbstractPort>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.raw.AbstractPort, 4));
};


/**
 * @param {!Array<!proto.vlsir.raw.AbstractPort>} value
 * @return {!proto.vlsir.raw.Abstract} returns this
*/
proto.vlsir.raw.Abstract.prototype.setPortsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vlsir.raw.AbstractPort=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.raw.AbstractPort}
 */
proto.vlsir.raw.Abstract.prototype.addPorts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vlsir.raw.AbstractPort, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.raw.Abstract} returns this
 */
proto.vlsir.raw.Abstract.prototype.clearPortsList = function() {
  return this.setPortsList([]);
};


/**
 * repeated LayerShapes blockages = 5;
 * @return {!Array<!proto.vlsir.raw.LayerShapes>}
 */
proto.vlsir.raw.Abstract.prototype.getBlockagesList = function() {
  return /** @type{!Array<!proto.vlsir.raw.LayerShapes>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.raw.LayerShapes, 5));
};


/**
 * @param {!Array<!proto.vlsir.raw.LayerShapes>} value
 * @return {!proto.vlsir.raw.Abstract} returns this
*/
proto.vlsir.raw.Abstract.prototype.setBlockagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.vlsir.raw.LayerShapes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.raw.LayerShapes}
 */
proto.vlsir.raw.Abstract.prototype.addBlockages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.vlsir.raw.LayerShapes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.raw.Abstract} returns this
 */
proto.vlsir.raw.Abstract.prototype.clearBlockagesList = function() {
  return this.setBlockagesList([]);
};


