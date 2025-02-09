// source: raw.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.raw.TextElement');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.raw.Point');

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
proto.vlsir.raw.TextElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vlsir.raw.TextElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.raw.TextElement.displayName = 'proto.vlsir.raw.TextElement';
}



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
proto.vlsir.raw.TextElement.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.raw.TextElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.raw.TextElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.TextElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    string: jspb.Message.getFieldWithDefault(msg, 1, ""),
    loc: (f = msg.getLoc()) && proto.vlsir.raw.Point.toObject(includeInstance, f)
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
 * @return {!proto.vlsir.raw.TextElement}
 */
proto.vlsir.raw.TextElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.raw.TextElement;
  return proto.vlsir.raw.TextElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.raw.TextElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.raw.TextElement}
 */
proto.vlsir.raw.TextElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setString(value);
      break;
    case 2:
      var value = new proto.vlsir.raw.Point;
      reader.readMessage(value,proto.vlsir.raw.Point.deserializeBinaryFromReader);
      msg.setLoc(value);
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
proto.vlsir.raw.TextElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.raw.TextElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.raw.TextElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.TextElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getString();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLoc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vlsir.raw.Point.serializeBinaryToWriter
    );
  }
};


/**
 * optional string string = 1;
 * @return {string}
 */
proto.vlsir.raw.TextElement.prototype.getString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.raw.TextElement} returns this
 */
proto.vlsir.raw.TextElement.prototype.setString = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Point loc = 2;
 * @return {?proto.vlsir.raw.Point}
 */
proto.vlsir.raw.TextElement.prototype.getLoc = function() {
  return /** @type{?proto.vlsir.raw.Point} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.raw.Point, 2));
};


/**
 * @param {?proto.vlsir.raw.Point|undefined} value
 * @return {!proto.vlsir.raw.TextElement} returns this
*/
proto.vlsir.raw.TextElement.prototype.setLoc = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.raw.TextElement} returns this
 */
proto.vlsir.raw.TextElement.prototype.clearLoc = function() {
  return this.setLoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.raw.TextElement.prototype.hasLoc = function() {
  return jspb.Message.getField(this, 2) != null;
};


