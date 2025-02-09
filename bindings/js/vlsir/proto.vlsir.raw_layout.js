// source: raw.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.raw.Layout');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.raw.Instance');
goog.require('proto.vlsir.raw.LayerShapes');
goog.require('proto.vlsir.raw.TextElement');

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
proto.vlsir.raw.Layout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.raw.Layout.repeatedFields_, null);
};
goog.inherits(proto.vlsir.raw.Layout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.raw.Layout.displayName = 'proto.vlsir.raw.Layout';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.raw.Layout.repeatedFields_ = [2,3,4];



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
proto.vlsir.raw.Layout.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.raw.Layout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.raw.Layout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.Layout.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shapesList: jspb.Message.toObjectList(msg.getShapesList(),
    proto.vlsir.raw.LayerShapes.toObject, includeInstance),
    instancesList: jspb.Message.toObjectList(msg.getInstancesList(),
    proto.vlsir.raw.Instance.toObject, includeInstance),
    annotationsList: jspb.Message.toObjectList(msg.getAnnotationsList(),
    proto.vlsir.raw.TextElement.toObject, includeInstance)
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
 * @return {!proto.vlsir.raw.Layout}
 */
proto.vlsir.raw.Layout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.raw.Layout;
  return proto.vlsir.raw.Layout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.raw.Layout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.raw.Layout}
 */
proto.vlsir.raw.Layout.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.vlsir.raw.LayerShapes;
      reader.readMessage(value,proto.vlsir.raw.LayerShapes.deserializeBinaryFromReader);
      msg.addShapes(value);
      break;
    case 3:
      var value = new proto.vlsir.raw.Instance;
      reader.readMessage(value,proto.vlsir.raw.Instance.deserializeBinaryFromReader);
      msg.addInstances(value);
      break;
    case 4:
      var value = new proto.vlsir.raw.TextElement;
      reader.readMessage(value,proto.vlsir.raw.TextElement.deserializeBinaryFromReader);
      msg.addAnnotations(value);
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
proto.vlsir.raw.Layout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.raw.Layout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.raw.Layout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.Layout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShapesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vlsir.raw.LayerShapes.serializeBinaryToWriter
    );
  }
  f = message.getInstancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vlsir.raw.Instance.serializeBinaryToWriter
    );
  }
  f = message.getAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vlsir.raw.TextElement.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vlsir.raw.Layout.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.raw.Layout} returns this
 */
proto.vlsir.raw.Layout.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated LayerShapes shapes = 2;
 * @return {!Array<!proto.vlsir.raw.LayerShapes>}
 */
proto.vlsir.raw.Layout.prototype.getShapesList = function() {
  return /** @type{!Array<!proto.vlsir.raw.LayerShapes>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.raw.LayerShapes, 2));
};


/**
 * @param {!Array<!proto.vlsir.raw.LayerShapes>} value
 * @return {!proto.vlsir.raw.Layout} returns this
*/
proto.vlsir.raw.Layout.prototype.setShapesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vlsir.raw.LayerShapes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.raw.LayerShapes}
 */
proto.vlsir.raw.Layout.prototype.addShapes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vlsir.raw.LayerShapes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.raw.Layout} returns this
 */
proto.vlsir.raw.Layout.prototype.clearShapesList = function() {
  return this.setShapesList([]);
};


/**
 * repeated Instance instances = 3;
 * @return {!Array<!proto.vlsir.raw.Instance>}
 */
proto.vlsir.raw.Layout.prototype.getInstancesList = function() {
  return /** @type{!Array<!proto.vlsir.raw.Instance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.raw.Instance, 3));
};


/**
 * @param {!Array<!proto.vlsir.raw.Instance>} value
 * @return {!proto.vlsir.raw.Layout} returns this
*/
proto.vlsir.raw.Layout.prototype.setInstancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vlsir.raw.Instance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.raw.Instance}
 */
proto.vlsir.raw.Layout.prototype.addInstances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vlsir.raw.Instance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.raw.Layout} returns this
 */
proto.vlsir.raw.Layout.prototype.clearInstancesList = function() {
  return this.setInstancesList([]);
};


/**
 * repeated TextElement annotations = 4;
 * @return {!Array<!proto.vlsir.raw.TextElement>}
 */
proto.vlsir.raw.Layout.prototype.getAnnotationsList = function() {
  return /** @type{!Array<!proto.vlsir.raw.TextElement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.raw.TextElement, 4));
};


/**
 * @param {!Array<!proto.vlsir.raw.TextElement>} value
 * @return {!proto.vlsir.raw.Layout} returns this
*/
proto.vlsir.raw.Layout.prototype.setAnnotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vlsir.raw.TextElement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.raw.TextElement}
 */
proto.vlsir.raw.Layout.prototype.addAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vlsir.raw.TextElement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.raw.Layout} returns this
 */
proto.vlsir.raw.Layout.prototype.clearAnnotationsList = function() {
  return this.setAnnotationsList([]);
};


