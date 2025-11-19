import { modelUtil } from '../util/modelUtil';
import { constants } from '../util/constants';
import { Model } from '../externals/objectmodel';

class GridActionHTTP2ROS extends Model({
    id: String,
    modelName: String,
    modelVersion: String,

    // --- Campos HTTP que queremos conservar ---
    restUrl: [String],
    method: [String],
    contentType: [String],
    acceptHeader: [String],
    body: [String],
    authUser: [String],
    authPw: [String],
    noCorsMode: [Boolean],
    useCorsProxy: [Boolean],
    isLiveAction: [Boolean],

    // --- Nuevos campos específicos para ROS ---
    bridgeUrl: [String],
    rosTopic: [String],
    rosMsgType: [String]
}) {
    constructor(properties, elementToCopy) {
        properties = modelUtil.setDefaults(properties, elementToCopy, GridActionHTTP2ROS);
        super(properties);

        this.id = this.id || modelUtil.generateId('grid-action-http2ros');
        this.modelName = GridActionHTTP2ROS.getModelName();
    }

    static getModelName() {
        return 'GridActionHTTP2ROS';
    }
}

GridActionHTTP2ROS.defaults({
    id: '',
    modelName: GridActionHTTP2ROS.getModelName(),
    modelVersion: constants.MODEL_VERSION,

    // valores por defecto HTTP
    method: 'POST',
    contentType: 'application/json',
    noCorsMode: false,
    useCorsProxy: false,
    isLiveAction: false,

    // valores por defecto ROS
    bridgeUrl: 'http://localhost:8000/ros2/publish',
    rosTopic: '',
    rosMsgType: ''
});

export { GridActionHTTP2ROS };
