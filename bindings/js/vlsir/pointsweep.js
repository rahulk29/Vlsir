// source: spice.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.spice.PointSweep');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.vlsir.spice.PointSweep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.spice.PointSweep.repeatedFields_, null);
};
goog.inherits(proto.vlsir.spice.PointSweep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.spice.PointSweep.displayName = 'proto.vlsir.spice.PointSweep';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.spice.PointSweep.repeatedFields_ = [1];



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
proto.vlsir.spice.PointSweep.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.spice.PointSweep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.spice.PointSweep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.PointSweep.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    stop: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    npts: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.vlsir.spice.PointSweep}
 */
proto.vlsir.spice.PointSweep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.spice.PointSweep;
  return proto.vlsir.spice.PointSweep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.spice.PointSweep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.spice.PointSweep}
 */
proto.vlsir.spice.PointSweep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setPointsList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStop(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNpts(value);
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
proto.vlsir.spice.PointSweep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.spice.PointSweep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.spice.PointSweep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.PointSweep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writePackedDouble(
      1,
      f
    );
  }
  f = message.getStop();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getNpts();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * repeated double points = 1;
 * @return {!Array<number>}
 */
proto.vlsir.spice.PointSweep.prototype.getPointsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.vlsir.spice.PointSweep} returns this
 */
proto.vlsir.spice.PointSweep.prototype.setPointsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.vlsir.spice.PointSweep} returns this
 */
proto.vlsir.spice.PointSweep.prototype.addPoints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.spice.PointSweep} returns this
 */
proto.vlsir.spice.PointSweep.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};


/**
 * optional double stop = 2;
 * @return {number}
 */
proto.vlsir.spice.PointSweep.prototype.getStop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vlsir.spice.PointSweep} returns this
 */
proto.vlsir.spice.PointSweep.prototype.setStop = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double npts = 3;
 * @return {number}
 */
proto.vlsir.spice.PointSweep.prototype.getNpts = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vlsir.spice.PointSweep} returns this
 */
proto.vlsir.spice.PointSweep.prototype.setNpts = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


