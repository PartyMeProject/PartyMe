var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./pulltorefresh-common");
function refreshingPropertyChanged(data) {
    var pullRefresh = data.object;
    if (!pullRefresh.android) {
        return;
    }
    pullRefresh.android.setRefreshing(data.newValue);
}
// register the setNativeValue callback
common.PullToRefresh.refreshingProperty.metadata.onSetNativeValue = refreshingPropertyChanged;
global.moduleMerge(common, exports);
var PullToRefresh = (function (_super) {
    __extends(PullToRefresh, _super);
    function PullToRefresh() {
        _super.call(this);
    }
    Object.defineProperty(PullToRefresh.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PullToRefresh.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    //Visibility methods
    PullToRefresh.prototype.setRefreshing = function (newValue) {
        this._android.setRefreshing(newValue);
    };
    PullToRefresh.prototype._createUI = function () {
        var that = new WeakRef(this);
        this._android = new android.support.v4.widget.SwipeRefreshLayout(this._context);
        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
        //if (this.color) {
        //    //var Color = android.graphics.Color;
        //    this._android.setColorSchemeColors(this.color.android, this.color.android, this.color.android, this.color.android);
        //}
        this._android.setOnRefreshListener(new android.support.v4.widget.SwipeRefreshLayout.OnRefreshListener({
            get owner() {
                return that.get();
            },
            onRefresh: function (v) {
                var owner = that.get();
                if (owner) {
                    owner._emit(common.PullToRefresh.refreshEvent);
                }
            }
        }));
    };
    return PullToRefresh;
})(common.PullToRefresh);
exports.PullToRefresh = PullToRefresh;
