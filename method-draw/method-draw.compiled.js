(function() {
    if (!("SVGPathSeg" in window)) {
        window.SVGPathSeg = function(a, n, d) {
            this.pathSegType = a;
            this.pathSegTypeAsLetter = n;
            this._owningPathSegList = d;
        };
        SVGPathSeg.PATHSEG_UNKNOWN = 0;
        SVGPathSeg.PATHSEG_CLOSEPATH = 1;
        SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
        SVGPathSeg.PATHSEG_MOVETO_REL = 3;
        SVGPathSeg.PATHSEG_LINETO_ABS = 4;
        SVGPathSeg.PATHSEG_LINETO_REL = 5;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
        SVGPathSeg.PATHSEG_ARC_ABS = 10;
        SVGPathSeg.PATHSEG_ARC_REL = 11;
        SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
        SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
        SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
        SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
        SVGPathSeg.prototype._segmentChanged = function() {
            this._owningPathSegList && this._owningPathSegList.segmentChanged(this);
        };
        window.SVGPathSegClosePath = function(a) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CLOSEPATH, "z", a);
        };
        SVGPathSegClosePath.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegClosePath.prototype.toString = function() {
            return "[object SVGPathSegClosePath]";
        };
        SVGPathSegClosePath.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter;
        };
        SVGPathSegClosePath.prototype.clone = function() {
            return new SVGPathSegClosePath(undefined);
        };
        window.SVGPathSegMovetoAbs = function(a, n, d) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_MOVETO_ABS, "M", a);
            this._x = n;
            this._y = d;
        };
        SVGPathSegMovetoAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegMovetoAbs.prototype.toString = function() {
            return "[object SVGPathSegMovetoAbs]";
        };
        SVGPathSegMovetoAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        SVGPathSegMovetoAbs.prototype.clone = function() {
            return new SVGPathSegMovetoAbs(undefined, this._x, this._y);
        };
        Object.defineProperty(SVGPathSegMovetoAbs.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegMovetoAbs.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegMovetoRel = function(a, n, d) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_MOVETO_REL, "m", a);
            this._x = n;
            this._y = d;
        };
        SVGPathSegMovetoRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegMovetoRel.prototype.toString = function() {
            return "[object SVGPathSegMovetoRel]";
        };
        SVGPathSegMovetoRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        SVGPathSegMovetoRel.prototype.clone = function() {
            return new SVGPathSegMovetoRel(undefined, this._x, this._y);
        };
        Object.defineProperty(SVGPathSegMovetoRel.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegMovetoRel.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegLinetoAbs = function(a, n, d) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_ABS, "L", a);
            this._x = n;
            this._y = d;
        };
        SVGPathSegLinetoAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoAbs]";
        };
        SVGPathSegLinetoAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        SVGPathSegLinetoAbs.prototype.clone = function() {
            return new SVGPathSegLinetoAbs(undefined, this._x, this._y);
        };
        Object.defineProperty(SVGPathSegLinetoAbs.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegLinetoAbs.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegLinetoRel = function(a, n, d) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_REL, "l", a);
            this._x = n;
            this._y = d;
        };
        SVGPathSegLinetoRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoRel]";
        };
        SVGPathSegLinetoRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        SVGPathSegLinetoRel.prototype.clone = function() {
            return new SVGPathSegLinetoRel(undefined, this._x, this._y);
        };
        Object.defineProperty(SVGPathSegLinetoRel.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegLinetoRel.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegCurvetoCubicAbs = function(a, n, d, c, l, q, b) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", a);
            this._x = n;
            this._y = d;
            this._x1 = c;
            this._y1 = l;
            this._x2 = q;
            this._y2 = b;
        };
        SVGPathSegCurvetoCubicAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicAbs]";
        };
        SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
            return (
                this.pathSegTypeAsLetter +
                " " +
                this._x1 +
                " " +
                this._y1 +
                " " +
                this._x2 +
                " " +
                this._y2 +
                " " +
                this._x +
                " " +
                this._y
            );
        };
        SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
            return new SVGPathSegCurvetoCubicAbs(
                undefined,
                this._x,
                this._y,
                this._x1,
                this._y1,
                this._x2,
                this._y2
            );
        };
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x1", {
            get: function() {
                return this._x1;
            },
            set: function(a) {
                this._x1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y1", {
            get: function() {
                return this._y1;
            },
            set: function(a) {
                this._y1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x2", {
            get: function() {
                return this._x2;
            },
            set: function(a) {
                this._x2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y2", {
            get: function() {
                return this._y2;
            },
            set: function(a) {
                this._y2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegCurvetoCubicRel = function(a, n, d, c, l, q, b) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", a);
            this._x = n;
            this._y = d;
            this._x1 = c;
            this._y1 = l;
            this._x2 = q;
            this._y2 = b;
        };
        SVGPathSegCurvetoCubicRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicRel]";
        };
        SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
            return (
                this.pathSegTypeAsLetter +
                " " +
                this._x1 +
                " " +
                this._y1 +
                " " +
                this._x2 +
                " " +
                this._y2 +
                " " +
                this._x +
                " " +
                this._y
            );
        };
        SVGPathSegCurvetoCubicRel.prototype.clone = function() {
            return new SVGPathSegCurvetoCubicRel(
                undefined,
                this._x,
                this._y,
                this._x1,
                this._y1,
                this._x2,
                this._y2
            );
        };
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x1", {
            get: function() {
                return this._x1;
            },
            set: function(a) {
                this._x1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y1", {
            get: function() {
                return this._y1;
            },
            set: function(a) {
                this._y1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x2", {
            get: function() {
                return this._x2;
            },
            set: function(a) {
                this._x2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y2", {
            get: function() {
                return this._y2;
            },
            set: function(a) {
                this._y2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegCurvetoQuadraticAbs = function(a, n, d, c, l) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", a);
            this._x = n;
            this._y = d;
            this._x1 = c;
            this._y1 = l;
        };
        SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(
            SVGPathSeg.prototype
        );
        SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticAbs]";
        };
        SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
            return (
                this.pathSegTypeAsLetter +
                " " +
                this._x1 +
                " " +
                this._y1 +
                " " +
                this._x +
                " " +
                this._y
            );
        };
        SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
            return new SVGPathSegCurvetoQuadraticAbs(
                undefined,
                this._x,
                this._y,
                this._x1,
                this._y1
            );
        };
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
            get: function() {
                return this._x1;
            },
            set: function(a) {
                this._x1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
            get: function() {
                return this._y1;
            },
            set: function(a) {
                this._y1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegCurvetoQuadraticRel = function(a, n, d, c, l) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", a);
            this._x = n;
            this._y = d;
            this._x1 = c;
            this._y1 = l;
        };
        SVGPathSegCurvetoQuadraticRel.prototype = Object.create(
            SVGPathSeg.prototype
        );
        SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticRel]";
        };
        SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
            return (
                this.pathSegTypeAsLetter +
                " " +
                this._x1 +
                " " +
                this._y1 +
                " " +
                this._x +
                " " +
                this._y
            );
        };
        SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
            return new SVGPathSegCurvetoQuadraticRel(
                undefined,
                this._x,
                this._y,
                this._x1,
                this._y1
            );
        };
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
            get: function() {
                return this._x1;
            },
            set: function(a) {
                this._x1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
            get: function() {
                return this._y1;
            },
            set: function(a) {
                this._y1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegArcAbs = function(a, n, d, c, l, q, b, k) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_ARC_ABS, "A", a);
            this._x = n;
            this._y = d;
            this._r1 = c;
            this._r2 = l;
            this._angle = q;
            this._largeArcFlag = b;
            this._sweepFlag = k;
        };
        SVGPathSegArcAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegArcAbs.prototype.toString = function() {
            return "[object SVGPathSegArcAbs]";
        };
        SVGPathSegArcAbs.prototype._asPathString = function() {
            return (
                this.pathSegTypeAsLetter +
                " " +
                this._r1 +
                " " +
                this._r2 +
                " " +
                this._angle +
                " " +
                (this._largeArcFlag ? "1" : "0") +
                " " +
                (this._sweepFlag ? "1" : "0") +
                " " +
                this._x +
                " " +
                this._y
            );
        };
        SVGPathSegArcAbs.prototype.clone = function() {
            return new SVGPathSegArcAbs(
                undefined,
                this._x,
                this._y,
                this._r1,
                this._r2,
                this._angle,
                this._largeArcFlag,
                this._sweepFlag
            );
        };
        Object.defineProperty(SVGPathSegArcAbs.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "r1", {
            get: function() {
                return this._r1;
            },
            set: function(a) {
                this._r1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "r2", {
            get: function() {
                return this._r2;
            },
            set: function(a) {
                this._r2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "angle", {
            get: function() {
                return this._angle;
            },
            set: function(a) {
                this._angle = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "largeArcFlag", {
            get: function() {
                return this._largeArcFlag;
            },
            set: function(a) {
                this._largeArcFlag = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "sweepFlag", {
            get: function() {
                return this._sweepFlag;
            },
            set: function(a) {
                this._sweepFlag = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegArcRel = function(a, n, d, c, l, q, b, k) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_ARC_REL, "a", a);
            this._x = n;
            this._y = d;
            this._r1 = c;
            this._r2 = l;
            this._angle = q;
            this._largeArcFlag = b;
            this._sweepFlag = k;
        };
        SVGPathSegArcRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegArcRel.prototype.toString = function() {
            return "[object SVGPathSegArcRel]";
        };
        SVGPathSegArcRel.prototype._asPathString = function() {
            return (
                this.pathSegTypeAsLetter +
                " " +
                this._r1 +
                " " +
                this._r2 +
                " " +
                this._angle +
                " " +
                (this._largeArcFlag ? "1" : "0") +
                " " +
                (this._sweepFlag ? "1" : "0") +
                " " +
                this._x +
                " " +
                this._y
            );
        };
        SVGPathSegArcRel.prototype.clone = function() {
            return new SVGPathSegArcRel(
                undefined,
                this._x,
                this._y,
                this._r1,
                this._r2,
                this._angle,
                this._largeArcFlag,
                this._sweepFlag
            );
        };
        Object.defineProperty(SVGPathSegArcRel.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "r1", {
            get: function() {
                return this._r1;
            },
            set: function(a) {
                this._r1 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "r2", {
            get: function() {
                return this._r2;
            },
            set: function(a) {
                this._r2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "angle", {
            get: function() {
                return this._angle;
            },
            set: function(a) {
                this._angle = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "largeArcFlag", {
            get: function() {
                return this._largeArcFlag;
            },
            set: function(a) {
                this._largeArcFlag = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegArcRel.prototype, "sweepFlag", {
            get: function() {
                return this._sweepFlag;
            },
            set: function(a) {
                this._sweepFlag = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegLinetoHorizontalAbs = function(a, n) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", a);
            this._x = n;
        };
        SVGPathSegLinetoHorizontalAbs.prototype = Object.create(
            SVGPathSeg.prototype
        );
        SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoHorizontalAbs]";
        };
        SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x;
        };
        SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
            return new SVGPathSegLinetoHorizontalAbs(undefined, this._x);
        };
        Object.defineProperty(SVGPathSegLinetoHorizontalAbs.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegLinetoHorizontalRel = function(a, n) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", a);
            this._x = n;
        };
        SVGPathSegLinetoHorizontalRel.prototype = Object.create(
            SVGPathSeg.prototype
        );
        SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoHorizontalRel]";
        };
        SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x;
        };
        SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
            return new SVGPathSegLinetoHorizontalRel(undefined, this._x);
        };
        Object.defineProperty(SVGPathSegLinetoHorizontalRel.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegLinetoVerticalAbs = function(a, n) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", a);
            this._y = n;
        };
        SVGPathSegLinetoVerticalAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
            return "[object SVGPathSegLinetoVerticalAbs]";
        };
        SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._y;
        };
        SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
            return new SVGPathSegLinetoVerticalAbs(undefined, this._y);
        };
        Object.defineProperty(SVGPathSegLinetoVerticalAbs.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegLinetoVerticalRel = function(a, n) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", a);
            this._y = n;
        };
        SVGPathSegLinetoVerticalRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoVerticalRel.prototype.toString = function() {
            return "[object SVGPathSegLinetoVerticalRel]";
        };
        SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._y;
        };
        SVGPathSegLinetoVerticalRel.prototype.clone = function() {
            return new SVGPathSegLinetoVerticalRel(undefined, this._y);
        };
        Object.defineProperty(SVGPathSegLinetoVerticalRel.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegCurvetoCubicSmoothAbs = function(a, n, d, c, l) {
            SVGPathSeg.call(
                this,
                SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,
                "S",
                a
            );
            this._x = n;
            this._y = d;
            this._x2 = c;
            this._y2 = l;
        };
        SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(
            SVGPathSeg.prototype
        );
        SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicSmoothAbs]";
        };
        SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
            return (
                this.pathSegTypeAsLetter +
                " " +
                this._x2 +
                " " +
                this._y2 +
                " " +
                this._x +
                " " +
                this._y
            );
        };
        SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
            return new SVGPathSegCurvetoCubicSmoothAbs(
                undefined,
                this._x,
                this._y,
                this._x2,
                this._y2
            );
        };
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
            get: function() {
                return this._x2;
            },
            set: function(a) {
                this._x2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
            get: function() {
                return this._y2;
            },
            set: function(a) {
                this._y2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegCurvetoCubicSmoothRel = function(a, n, d, c, l) {
            SVGPathSeg.call(
                this,
                SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,
                "s",
                a
            );
            this._x = n;
            this._y = d;
            this._x2 = c;
            this._y2 = l;
        };
        SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(
            SVGPathSeg.prototype
        );
        SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoCubicSmoothRel]";
        };
        SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
            return (
                this.pathSegTypeAsLetter +
                " " +
                this._x2 +
                " " +
                this._y2 +
                " " +
                this._x +
                " " +
                this._y
            );
        };
        SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
            return new SVGPathSegCurvetoCubicSmoothRel(
                undefined,
                this._x,
                this._y,
                this._x2,
                this._y2
            );
        };
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
            get: function() {
                return this._x2;
            },
            set: function(a) {
                this._x2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
            get: function() {
                return this._y2;
            },
            set: function(a) {
                this._y2 = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegCurvetoQuadraticSmoothAbs = function(a, n, d) {
            SVGPathSeg.call(
                this,
                SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,
                "T",
                a
            );
            this._x = n;
            this._y = d;
        };
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(
            SVGPathSeg.prototype
        );
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
        };
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
            return new SVGPathSegCurvetoQuadraticSmoothAbs(
                undefined,
                this._x,
                this._y
            );
        };
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        window.SVGPathSegCurvetoQuadraticSmoothRel = function(a, n, d) {
            SVGPathSeg.call(
                this,
                SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,
                "t",
                a
            );
            this._x = n;
            this._y = d;
        };
        SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(
            SVGPathSeg.prototype
        );
        SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
            return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
        };
        SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
        };
        SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
            return new SVGPathSegCurvetoQuadraticSmoothRel(
                undefined,
                this._x,
                this._y
            );
        };
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(a) {
                this._x = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(a) {
                this._y = a;
                this._segmentChanged();
            },
            enumerable: true,
        });
        SVGPathElement.prototype.createSVGPathSegClosePath = function() {
            return new SVGPathSegClosePath(undefined);
        };
        SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(a, n) {
            return new SVGPathSegMovetoAbs(undefined, a, n);
        };
        SVGPathElement.prototype.createSVGPathSegMovetoRel = function(a, n) {
            return new SVGPathSegMovetoRel(undefined, a, n);
        };
        SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(a, n) {
            return new SVGPathSegLinetoAbs(undefined, a, n);
        };
        SVGPathElement.prototype.createSVGPathSegLinetoRel = function(a, n) {
            return new SVGPathSegLinetoRel(undefined, a, n);
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(
            a,
            n,
            d,
            c,
            l,
            q
        ) {
            return new SVGPathSegCurvetoCubicAbs(undefined, a, n, d, c, l, q);
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(
            a,
            n,
            d,
            c,
            l,
            q
        ) {
            return new SVGPathSegCurvetoCubicRel(undefined, a, n, d, c, l, q);
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(
            a,
            n,
            d,
            c
        ) {
            return new SVGPathSegCurvetoQuadraticAbs(undefined, a, n, d, c);
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(
            a,
            n,
            d,
            c
        ) {
            return new SVGPathSegCurvetoQuadraticRel(undefined, a, n, d, c);
        };
        SVGPathElement.prototype.createSVGPathSegArcAbs = function(
            a,
            n,
            d,
            c,
            l,
            q,
            b
        ) {
            return new SVGPathSegArcAbs(undefined, a, n, d, c, l, q, b);
        };
        SVGPathElement.prototype.createSVGPathSegArcRel = function(
            a,
            n,
            d,
            c,
            l,
            q,
            b
        ) {
            return new SVGPathSegArcRel(undefined, a, n, d, c, l, q, b);
        };
        SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(
            a
        ) {
            return new SVGPathSegLinetoHorizontalAbs(undefined, a);
        };
        SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(
            a
        ) {
            return new SVGPathSegLinetoHorizontalRel(undefined, a);
        };
        SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(a) {
            return new SVGPathSegLinetoVerticalAbs(undefined, a);
        };
        SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(a) {
            return new SVGPathSegLinetoVerticalRel(undefined, a);
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(
            a,
            n,
            d,
            c
        ) {
            return new SVGPathSegCurvetoCubicSmoothAbs(undefined, a, n, d, c);
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(
            a,
            n,
            d,
            c
        ) {
            return new SVGPathSegCurvetoCubicSmoothRel(undefined, a, n, d, c);
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(
            a,
            n
        ) {
            return new SVGPathSegCurvetoQuadraticSmoothAbs(undefined, a, n);
        };
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(
            a,
            n
        ) {
            return new SVGPathSegCurvetoQuadraticSmoothRel(undefined, a, n);
        };
    }
    if (!("SVGPathSegList" in window)) {
        window.SVGPathSegList = function(a) {
            this._pathElement = a;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));
            this._mutationObserverConfig = {
                attributes: true,
                attributeFilter: ["d"],
            };
            this._pathElementMutationObserver = new MutationObserver(
                this._updateListFromPathMutations.bind(this)
            );
            this._pathElementMutationObserver.observe(
                this._pathElement,
                this._mutationObserverConfig
            );
        };
        Object.defineProperty(SVGPathSegList.prototype, "numberOfItems", {
            get: function() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathElement.prototype, "pathSegList", {
            get: function() {
                if (!this._pathSegList) this._pathSegList = new SVGPathSegList(this);
                return this._pathSegList;
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathElement.prototype, "normalizedPathSegList", {
            get: function() {
                return this.pathSegList;
            },
            enumerable: true,
        });
        Object.defineProperty(SVGPathElement.prototype, "animatedPathSegList", {
            get: function() {
                return this.pathSegList;
            },
            enumerable: true,
        });
        Object.defineProperty(
            SVGPathElement.prototype,
            "animatedNormalizedPathSegList", {
                get: function() {
                    return this.pathSegList;
                },
                enumerable: true,
            }
        );
        SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
            this._updateListFromPathMutations(
                this._pathElementMutationObserver.takeRecords()
            );
        };
        SVGPathSegList.prototype._updateListFromPathMutations = function(a) {
            if (this._pathElement) {
                var n = false;
                a.forEach(function(d) {
                    if (d.attributeName == "d") n = true;
                });
                if (n)
                    this._list = this._parsePath(this._pathElement.getAttribute("d"));
            }
        };
        SVGPathSegList.prototype._writeListToPath = function() {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute(
                "d",
                SVGPathSegList._pathSegArrayAsString(this._list)
            );
            this._pathElementMutationObserver.observe(
                this._pathElement,
                this._mutationObserverConfig
            );
        };
        SVGPathSegList.prototype.segmentChanged = function() {
            this._writeListToPath();
        };
        SVGPathSegList.prototype.clear = function() {
            this._checkPathSynchronizedToList();
            this._list.forEach(function(a) {
                a._owningPathSegList = null;
            });
            this._list = [];
            this._writeListToPath();
        };
        SVGPathSegList.prototype.initialize = function(a) {
            this._checkPathSynchronizedToList();
            this._list = [a];
            a._owningPathSegList = this;
            this._writeListToPath();
            return a;
        };
        SVGPathSegList.prototype._checkValidIndex = function(a) {
            if (isNaN(a) || a < 0 || a >= this.numberOfItems) throw "INDEX_SIZE_ERR";
        };
        SVGPathSegList.prototype.getItem = function(a) {
            this._checkPathSynchronizedToList();
            this._checkValidIndex(a);
            return this._list[a];
        };
        SVGPathSegList.prototype.insertItemBefore = function(a, n) {
            this._checkPathSynchronizedToList();
            if (n > this.numberOfItems) n = this.numberOfItems;
            if (a._owningPathSegList) a = a.clone();
            this._list.splice(n, 0, a);
            a._owningPathSegList = this;
            this._writeListToPath();
            return a;
        };
        SVGPathSegList.prototype.replaceItem = function(a, n) {
            this._checkPathSynchronizedToList();
            if (a._owningPathSegList) a = a.clone();
            this._checkValidIndex(n);
            this._list[n] = a;
            a._owningPathSegList = this;
            this._writeListToPath();
            return a;
        };
        SVGPathSegList.prototype.removeItem = function(a) {
            this._checkPathSynchronizedToList();
            this._checkValidIndex(a);
            var n = this._list[a];
            this._list.splice(a, 1);
            this._writeListToPath();
            return n;
        };
        SVGPathSegList.prototype.appendItem = function(a) {
            this._checkPathSynchronizedToList();
            if (a._owningPathSegList) a = a.clone();
            this._list.push(a);
            a._owningPathSegList = this;
            this._writeListToPath();
            return a;
        };
        SVGPathSegList._pathSegArrayAsString = function(a) {
            var n = "",
                d = true;
            a.forEach(function(c) {
                if (d) {
                    d = false;
                    n += c._asPathString();
                } else n += " " + c._asPathString();
            });
            return n;
        };
        SVGPathSegList.prototype._parsePath = function(a) {
            if (!a || a.length == 0) return [];
            var n = this,
                d = function() {
                    this.pathSegList = [];
                };
            d.prototype.appendSegment = function(l) {
                this.pathSegList.push(l);
            };
            var c = function(l) {
                this._string = l;
                this._currentIndex = 0;
                this._endIndex = this._string.length;
                this._previousCommand = SVGPathSeg.PATHSEG_UNKNOWN;
                this._skipOptionalSpaces();
            };
            c.prototype._isCurrentSpace = function() {
                var l = this._string[this._currentIndex];
                return (
                    l <= " " &&
                    (l == " " || l == "\n" || l == "\t" || l == "\r" || l == "\u000c")
                );
            };
            c.prototype._skipOptionalSpaces = function() {
                for (; this._currentIndex < this._endIndex && this._isCurrentSpace();)
                    this._currentIndex++;
                return this._currentIndex < this._endIndex;
            };
            c.prototype._skipOptionalSpacesOrDelimiter = function() {
                if (
                    this._currentIndex < this._endIndex &&
                    !this._isCurrentSpace() &&
                    this._string.charAt(this._currentIndex) != ","
                )
                    return false;
                if (this._skipOptionalSpaces())
                    if (
                        this._currentIndex < this._endIndex &&
                        this._string.charAt(this._currentIndex) == ","
                    ) {
                        this._currentIndex++;
                        this._skipOptionalSpaces();
                    }
                return this._currentIndex < this._endIndex;
            };
            c.prototype.hasMoreData = function() {
                return this._currentIndex < this._endIndex;
            };
            c.prototype.peekSegmentType = function() {
                return this._pathSegTypeFromChar(this._string[this._currentIndex]);
            };
            c.prototype._pathSegTypeFromChar = function(l) {
                switch (l) {
                    case "Z":
                    case "z":
                        return SVGPathSeg.PATHSEG_CLOSEPATH;
                    case "M":
                        return SVGPathSeg.PATHSEG_MOVETO_ABS;
                    case "m":
                        return SVGPathSeg.PATHSEG_MOVETO_REL;
                    case "L":
                        return SVGPathSeg.PATHSEG_LINETO_ABS;
                    case "l":
                        return SVGPathSeg.PATHSEG_LINETO_REL;
                    case "C":
                        return SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                    case "c":
                        return SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                    case "Q":
                        return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                    case "q":
                        return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                    case "A":
                        return SVGPathSeg.PATHSEG_ARC_ABS;
                    case "a":
                        return SVGPathSeg.PATHSEG_ARC_REL;
                    case "H":
                        return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                    case "h":
                        return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                    case "V":
                        return SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                    case "v":
                        return SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                    case "S":
                        return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                    case "s":
                        return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                    case "T":
                        return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                    case "t":
                        return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                    default:
                        return SVGPathSeg.PATHSEG_UNKNOWN;
                }
            };
            c.prototype._nextCommandHelper = function(l, q) {
                if (
                    (l == "+" || l == "-" || l == "." || (l >= "0" && l <= "9")) &&
                    q != SVGPathSeg.PATHSEG_CLOSEPATH
                ) {
                    if (q == SVGPathSeg.PATHSEG_MOVETO_ABS)
                        return SVGPathSeg.PATHSEG_LINETO_ABS;
                    if (q == SVGPathSeg.PATHSEG_MOVETO_REL)
                        return SVGPathSeg.PATHSEG_LINETO_REL;
                    return q;
                }
                return SVGPathSeg.PATHSEG_UNKNOWN;
            };
            c.prototype.initialCommandIsMoveTo = function() {
                if (!this.hasMoreData()) return true;
                var l = this.peekSegmentType();
                return (
                    l == SVGPathSeg.PATHSEG_MOVETO_ABS ||
                    l == SVGPathSeg.PATHSEG_MOVETO_REL
                );
            };
            c.prototype._parseNumber = function() {
                var l = 0,
                    q = 0,
                    b = 1,
                    k = 0,
                    e = 1,
                    p = 1,
                    A = this._currentIndex;
                this._skipOptionalSpaces();
                if (
                    this._currentIndex < this._endIndex &&
                    this._string.charAt(this._currentIndex) == "+"
                )
                    this._currentIndex++;
                else if (
                    this._currentIndex < this._endIndex &&
                    this._string.charAt(this._currentIndex) == "-"
                ) {
                    this._currentIndex++;
                    e = -1;
                }
                if (!(
                        this._currentIndex == this._endIndex ||
                        ((this._string.charAt(this._currentIndex) < "0" ||
                                this._string.charAt(this._currentIndex) > "9") &&
                            this._string.charAt(this._currentIndex) != ".")
                    )) {
                    for (
                        var C = this._currentIndex; this._currentIndex < this._endIndex &&
                        this._string.charAt(this._currentIndex) >= "0" &&
                        this._string.charAt(this._currentIndex) <= "9";

                    )
                        this._currentIndex++;
                    if (this._currentIndex != C)
                        for (var v = this._currentIndex - 1, K = 1; v >= C;) {
                            q += K * (this._string.charAt(v--) - "0");
                            K *= 10;
                        }
                    if (
                        this._currentIndex < this._endIndex &&
                        this._string.charAt(this._currentIndex) == "."
                    ) {
                        this._currentIndex++;
                        if (
                            this._currentIndex >= this._endIndex ||
                            this._string.charAt(this._currentIndex) < "0" ||
                            this._string.charAt(this._currentIndex) > "9"
                        )
                            return;
                        for (; this._currentIndex < this._endIndex &&
                            this._string.charAt(this._currentIndex) >= "0" &&
                            this._string.charAt(this._currentIndex) <= "9";

                        )
                            k +=
                            (this._string.charAt(this._currentIndex++) - "0") * (b *= 0.1);
                    }
                    if (
                        this._currentIndex != A &&
                        this._currentIndex + 1 < this._endIndex &&
                        (this._string.charAt(this._currentIndex) == "e" ||
                            this._string.charAt(this._currentIndex) == "E") &&
                        this._string.charAt(this._currentIndex + 1) != "x" &&
                        this._string.charAt(this._currentIndex + 1) != "m"
                    ) {
                        this._currentIndex++;
                        if (this._string.charAt(this._currentIndex) == "+")
                            this._currentIndex++;
                        else if (this._string.charAt(this._currentIndex) == "-") {
                            this._currentIndex++;
                            p = -1;
                        }
                        if (
                            this._currentIndex >= this._endIndex ||
                            this._string.charAt(this._currentIndex) < "0" ||
                            this._string.charAt(this._currentIndex) > "9"
                        )
                            return;
                        for (; this._currentIndex < this._endIndex &&
                            this._string.charAt(this._currentIndex) >= "0" &&
                            this._string.charAt(this._currentIndex) <= "9";

                        ) {
                            l *= 10;
                            l += this._string.charAt(this._currentIndex) - "0";
                            this._currentIndex++;
                        }
                    }
                    q = q + k;
                    q *= e;
                    if (l) q *= Math.pow(10, p * l);
                    if (A != this._currentIndex) {
                        this._skipOptionalSpacesOrDelimiter();
                        return q;
                    }
                }
            };
            c.prototype._parseArcFlag = function() {
                if (!(this._currentIndex >= this._endIndex)) {
                    var l = false;
                    l = this._string.charAt(this._currentIndex++);
                    if (l == "0") l = false;
                    else if (l == "1") l = true;
                    else return;
                    this._skipOptionalSpacesOrDelimiter();
                    return l;
                }
            };
            c.prototype.parseSegment = function() {
                var l = this._string[this._currentIndex],
                    q = this._pathSegTypeFromChar(l);
                if (q == SVGPathSeg.PATHSEG_UNKNOWN) {
                    if (this._previousCommand == SVGPathSeg.PATHSEG_UNKNOWN) return null;
                    q = this._nextCommandHelper(l, this._previousCommand);
                    if (q == SVGPathSeg.PATHSEG_UNKNOWN) return null;
                } else this._currentIndex++;
                this._previousCommand = q;
                switch (q) {
                    case SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new SVGPathSegMovetoRel(
                            n,
                            this._parseNumber(),
                            this._parseNumber()
                        );
                    case SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new SVGPathSegMovetoAbs(
                            n,
                            this._parseNumber(),
                            this._parseNumber()
                        );
                    case SVGPathSeg.PATHSEG_LINETO_REL:
                        return new SVGPathSegLinetoRel(
                            n,
                            this._parseNumber(),
                            this._parseNumber()
                        );
                    case SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new SVGPathSegLinetoAbs(
                            n,
                            this._parseNumber(),
                            this._parseNumber()
                        );
                    case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new SVGPathSegLinetoHorizontalRel(n, this._parseNumber());
                    case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new SVGPathSegLinetoHorizontalAbs(n, this._parseNumber());
                    case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new SVGPathSegLinetoVerticalRel(n, this._parseNumber());
                    case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new SVGPathSegLinetoVerticalAbs(n, this._parseNumber());
                    case SVGPathSeg.PATHSEG_CLOSEPATH:
                        this._skipOptionalSpaces();
                        return new SVGPathSegClosePath(n);
                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                        };
                        return new SVGPathSegCurvetoCubicRel(
                            n,
                            l.x,
                            l.y,
                            l.x1,
                            l.y1,
                            l.x2,
                            l.y2
                        );
                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                        };
                        return new SVGPathSegCurvetoCubicAbs(
                            n,
                            l.x,
                            l.y,
                            l.x1,
                            l.y1,
                            l.x2,
                            l.y2
                        );
                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        l = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                        };
                        return new SVGPathSegCurvetoCubicSmoothRel(n, l.x, l.y, l.x2, l.y2);
                    case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        l = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                        };
                        return new SVGPathSegCurvetoCubicSmoothAbs(n, l.x, l.y, l.x2, l.y2);
                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                        };
                        return new SVGPathSegCurvetoQuadraticRel(n, l.x, l.y, l.x1, l.y1);
                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                        };
                        return new SVGPathSegCurvetoQuadraticAbs(n, l.x, l.y, l.x1, l.y1);
                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new SVGPathSegCurvetoQuadraticSmoothRel(
                            n,
                            this._parseNumber(),
                            this._parseNumber()
                        );
                    case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new SVGPathSegCurvetoQuadraticSmoothAbs(
                            n,
                            this._parseNumber(),
                            this._parseNumber()
                        );
                    case SVGPathSeg.PATHSEG_ARC_REL:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                        };
                        return new SVGPathSegArcRel(
                            n,
                            l.x,
                            l.y,
                            l.x1,
                            l.y1,
                            l.arcAngle,
                            l.arcLarge,
                            l.arcSweep
                        );
                    case SVGPathSeg.PATHSEG_ARC_ABS:
                        l = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                        };
                        return new SVGPathSegArcAbs(
                            n,
                            l.x,
                            l.y,
                            l.x1,
                            l.y1,
                            l.arcAngle,
                            l.arcLarge,
                            l.arcSweep
                        );
                    default:
                        throw "Unknown path seg type.";
                }
            };
            d = new d();
            a = new c(a);
            if (!a.initialCommandIsMoveTo()) return [];
            for (; a.hasMoreData();) {
                c = a.parseSegment();
                if (!c) return [];
                d.appendSegment(c);
            }
            return d.pathSegList;
        };
    }
})();
(function() {
    function a(n) {
        var d = n.changedTouches,
            c = d[0],
            l = "";
        switch (n.type) {
            case "touchstart":
                l = "mousedown";
                break;
            case "touchmove":
                l = "mousemove";
                break;
            case "touchend":
                l = "mouseup";
                break;
            default:
                return;
        }
        n = document.createEvent("MouseEvent");
        n.initMouseEvent(
            l,
            true,
            true,
            window,
            1,
            c.screenX,
            c.screenY,
            c.clientX,
            c.clientY,
            false,
            false,
            false,
            false,
            0,
            null
        );
        d.length < 2 && c.target.dispatchEvent(n);
    }
    document.addEventListener("touchstart", a, true);
    document.addEventListener("touchmove", a, true);
    document.addEventListener("touchend", a, true);
    document.addEventListener("touchcancel", a, true);
})();
(function(a) {
    function n(d) {
        if (typeof d.data === "string") {
            var c = d.handler,
                l = d.data.toLowerCase().split(" ");
            d.handler = function(q) {
                if (!(
                        this !== q.target &&
                        (/textarea|select/i.test(q.target.nodeName) ||
                            q.target.type === "text")
                    )) {
                    var b = q.type !== "keypress" && a.hotkeys.specialKeys[q.which],
                        k = String.fromCharCode(q.which).toLowerCase(),
                        e = "",
                        p = {};
                    if (q.altKey && b !== "alt") e += "alt+";
                    if (q.ctrlKey && b !== "ctrl") e += "ctrl+";
                    if (q.metaKey && !q.ctrlKey && b !== "meta") e += "meta+";
                    if (q.shiftKey && b !== "shift") e += "shift+";
                    if (b) p[e + b] = true;
                    else {
                        p[e + k] = true;
                        p[e + a.hotkeys.shiftNums[k]] = true;
                        if (e === "shift+") p[a.hotkeys.shiftNums[k]] = true;
                    }
                    b = 0;
                    for (k = l.length; b < k; b++)
                        if (p[l[b]]) return c.apply(this, arguments);
                }
            };
        }
    }
    a.hotkeys = {
        version: "0.8",
        specialKeys: {
            8: "backspace",
            9: "tab",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            191: "/",
            224: "meta",
            219: "[",
            221: "]",
        },
        shiftNums: {
            "`": "~",
            "1": "!",
            "2": "@",
            "3": "#",
            "4": "$",
            "5": "%",
            "6": "^",
            "7": "&",
            "8": "*",
            "9": "(",
            "0": ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|",
        },
    };
    a.each(["keydown", "keyup", "keypress"], function() {
        a.event.special[this] = { add: n };
    });
})(jQuery);
(function(a) {
    var n = {},
        d;
    a.svgIcons = function(c, l) {
        function q(ka, aa) {
            if (ka !== "ajax") {
                if (V) return;
                var da = (O = Z[0].contentDocument) && O.getElementById("svg_eof");
                if (!da && !(aa && da)) {
                    R++;
                    if (R < 50) setTimeout(q, 20);
                    else {
                        k();
                        V = true;
                    }
                    return;
                }
                V = true;
            }
            K = a(O.firstChild).children();
            if (l.no_img)
                setTimeout(function() {
                    H || b();
                }, 500);
            else {
                da =
                    ma +
                    "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzUiIGhlaWdodD0iMjc1Ij48L3N2Zz4%3D";
                L = a(new Image())
                    .attr({ src: da, width: 0, height: 0 })
                    .appendTo("body")
                    .load(function() {
                        b(true);
                    })
                    .error(function() {
                        b();
                    });
            }
        }

        function b(ka, aa) {
            if (!H) {
                if (l.no_img) ka = false;
                if (ka) {
                    var da = a(document.createElement("div"));
                    da.hide().appendTo("body");
                }
                if (aa) {
                    var qa = l.fallback_path ? l.fallback_path : "";
                    a.each(aa, function(Ia, Ja) {
                        a("#" + Ia);
                        var za = a(new Image()).attr({
                            class: "svg_icon",
                            src: qa + Ja,
                            width: C,
                            height: v,
                            alt: "icon",
                        });
                        ja(za, Ia);
                    });
                } else
                    for (var pa = K.length, na = 0; na < pa; na++) {
                        var oa = K[na],
                            Ka = oa.id;
                        if (Ka === "svg_eof") break;
                        a("#" + Ka);
                        oa = oa.getElementsByTagNameNS(p, "svg")[0];
                        var Ea = document.createElementNS(p, "svg");
                        Ea.setAttributeNS(p, "viewBox", [0, 0, C, v].join(" "));
                        var Pa = oa.getAttribute("width"),
                            Wa = oa.getAttribute("height");
                        oa.removeAttribute("width");
                        oa.removeAttribute("height");
                        oa.getAttribute("viewBox") ||
                            oa.setAttribute("viewBox", [0, 0, Pa, Wa].join(" "));
                        Ea.setAttribute("xmlns", p);
                        Ea.setAttribute("width", C);
                        Ea.setAttribute("height", v);
                        Ea.setAttribute("xmlns:xlink", A);
                        Ea.setAttribute("class", "svg_icon");
                        ca || (oa = oa.cloneNode(true));
                        Ea.appendChild(oa);
                        if (ka) {
                            ca || Ea.cloneNode(true);
                            da.empty().append(Ea);
                            oa = ma + e(da.html());
                            oa = a(new Image()).attr({ class: "svg_icon", src: oa });
                        } else oa = d(a(Ea), na);
                        ja(oa, Ka);
                    }
                l.placement &&
                    a.each(l.placement, function(Ia, Ja) {
                        n[Ja] &&
                            a(Ia).each(function(za) {
                                var wa = n[Ja].clone();
                                if (za > 0 && !ka) wa = d(wa, za, true);
                                ua(a(this), wa, Ja);
                            });
                    });
                if (!aa) {
                    ka && da.remove();
                    Z && Z.remove();
                    L && L.remove();
                }
                l.resize && a.resizeSvgIcons(l.resize);
                H = true;
                l.callback && l.callback(n);
            }
        }

        function k() {
            if (c.indexOf(".svgz") != -1) {
                var ka = c.replace(".svgz", ".svg");
                window.console && console.log(".svgz failed, trying with .svg");
                a.svgIcons(ka, l);
            } else l.fallback && b(false, l.fallback);
        }

        function e(ka) {
            if (window.btoa) return window.btoa(ka);
            var aa = Array(Math.floor((ka.length + 2) / 3) * 4),
                da,
                qa,
                pa,
                na,
                oa,
                Ka,
                Ea = 0,
                Pa = 0;
            do {
                da = ka.charCodeAt(Ea++);
                qa = ka.charCodeAt(Ea++);
                pa = ka.charCodeAt(Ea++);
                na = da >> 2;
                da = ((da & 3) << 4) | (qa >> 4);
                oa = ((qa & 15) << 2) | (pa >> 6);
                Ka = pa & 63;
                if (isNaN(qa)) oa = Ka = 64;
                else if (isNaN(pa)) Ka = 64;
                aa[
                    Pa++
                ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                    na
                );
                aa[
                    Pa++
                ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                    da
                );
                aa[
                    Pa++
                ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                    oa
                );
                aa[
                    Pa++
                ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                    Ka
                );
            } while (Ea < ka.length);
            return aa.join("");
        }
        var p = "http://www.w3.org/2000/svg",
            A = "http://www.w3.org/1999/xlink",
            C = l.w ? l.w : 24,
            v = l.h ? l.h : 24,
            K,
            O,
            L,
            H = false,
            V = false,
            R = 0,
            N = navigator.userAgent,
            ca = !!window.opera;
        N.indexOf("Safari/") > -1 && N.indexOf("Chrome/");
        var ma = "data:image/svg+xml;charset=utf-8;base64,";
        if (l.svgz) {
            var Z = a('<object data="' + c + '" type=image/svg+xml>')
                .appendTo("body")
                .hide();
            try {
                O = Z[0].contentDocument;
                Z.load(q);
                q(0, true);
            } catch (U) {
                k();
            }
        } else {
            var fa = new DOMParser();
            a.ajax({
                url: c,
                dataType: "string",
                success: function(ka) {
                    if (ka) {
                        O = fa.parseFromString(ka, "text/xml");
                        a(function() {
                            q("ajax");
                        });
                    } else a(k);
                },
                error: function(ka) {
                    if (window.opera)
                        a(function() {
                            k();
                        });
                    else if (ka.responseText) {
                        O = fa.parseFromString(ka.responseText, "text/xml");
                        O.childNodes.length || a(k);
                        a(function() {
                            q("ajax");
                        });
                    } else a(k);
                },
            });
        }
        var ua = function(ka, aa, da, qa) {
                ca && aa.css("visibility", "hidden");
                if (l.replace) {
                    qa && aa.attr("id", da);
                    (da = ka.attr("class")) && aa.attr("class", "svg_icon " + da);
                    ka.replaceWith(aa);
                } else ka.append(aa);
                ca &&
                    setTimeout(function() {
                        aa.removeAttr("style");
                    }, 1);
            },
            ja = function(ka, aa) {
                if (l.id_match === undefined || l.id_match !== false)
                    ua(holder, ka, aa, true);
                n[aa] = ka;
            };
        d = function(ka, aa) {
            var da = ka.find("defs");
            if (!da.length) return ka;
            da = ca ?
                da.find("*").filter(function() {
                    return !!this.id;
                }) :
                da.find("[id]");
            var qa = ka[0].getElementsByTagName("*"),
                pa = qa.length;
            da.each(function(na) {
                var oa = this.id;
                a(O).find("#" + oa);
                this.id = na = "x" + oa + aa + na;
                oa = "url(#" + oa + ")";
                var Ka = "url(#" + na + ")";
                for (na = 0; na < pa; na++) {
                    var Ea = qa[na];
                    Ea.getAttribute("fill") === oa && Ea.setAttribute("fill", Ka);
                    Ea.getAttribute("stroke") === oa && Ea.setAttribute("stroke", Ka);
                    Ea.getAttribute("filter") === oa && Ea.setAttribute("filter", Ka);
                }
            });
            return ka;
        };
    };
    a.getSvgIcon = function(c, l) {
        var q = n[c];
        if (l && q) q = d(q, 0, true).clone(true);
        return q;
    };
    a.resizeSvgIcons = function(c) {
        var l = !a(".svg_icon:first").length;
        a.each(c, function(q, b) {
            var k = a.isArray(b),
                e = k ? b[0] : b,
                p = k ? b[1] : b;
            if (l) q = q.replace(/\.svg_icon/g, "svg");
            a(q).each(function() {
                this.setAttribute("width", e);
                this.setAttribute("height", p);
                if (window.opera && window.widget) {
                    this.parentNode.style.width = e + "px";
                    this.parentNode.style.height = p + "px";
                }
            });
        });
    };
})(jQuery);
(function() {
    function a(c, l, q) {
        c = document.createElementNS(n.svg, c);
        if (d)
            for (var b in l) c.setAttribute(b, l[b]);
        else
            for (b in l) {
                var k = l[b],
                    e = c[b];
                if (e && e.constructor === "SVGLength") e.baseVal.value = k;
                else c.setAttribute(b, k);
            }
        q && q.appendChild(c);
        return c;
    }
    var n = {
        svg: "http://www.w3.org/2000/svg",
        xlink: "http://www.w3.org/1999/xlink",
    };
    if (!window.console)
        window.console = new(function() {
            this.log = function() {};
            this.dir = function() {};
        })();
    $.jGraduate = {
        Paint: function(c) {
            c = c || {};
            this.alpha = isNaN(c.alpha) ? 100 : c.alpha;
            if (c.copy) {
                this.type = c.copy.type;
                this.alpha = c.copy.alpha;
                this.radialGradient = this.linearGradient = this.solidColor = null;
                switch (this.type) {
                    case "solidColor":
                        this.solidColor = c.copy.solidColor;
                        break;
                    case "linearGradient":
                        this.linearGradient = c.copy.linearGradient.cloneNode(true);
                        break;
                    case "radialGradient":
                        this.radialGradient = c.copy.radialGradient.cloneNode(true);
                }
            } else if (c.linearGradient) {
                this.type = "linearGradient";
                this.radialGradient = this.solidColor = null;
                this.linearGradient = c.linearGradient.cloneNode(true);
            } else if (c.radialGradient) {
                this.type = "radialGradient";
                this.linearGradient = this.solidColor = null;
                this.radialGradient = c.radialGradient.cloneNode(true);
            } else if (c.solidColor) {
                this.type = "solidColor";
                this.solidColor = c.solidColor;
            } else {
                this.type = "none";
                this.radialGradient = this.linearGradient = this.solidColor = null;
            }
        },
    };
    jQuery.fn.jGraduateDefaults = {
        paint: new $.jGraduate.Paint(),
        window: { pickerTitle: "Drag markers to pick a paint" },
        images: { clientPath: "images/" },
        newstop: "inverse",
    };
    var d = navigator.userAgent.indexOf("Gecko/") >= 0;
    jQuery.fn.jGraduate = function(c) {
        var l = arguments;
        return this.each(function() {
            function q(ia, Y, ga, Q, P) {
                var ba =
                    P ||
                    a("stop", { "stop-color": Y, "stop-opacity": ga, offset: ia }, fa);
                if (P) {
                    Y = P.getAttribute("stop-color");
                    ga = P.getAttribute("stop-opacity");
                    ia = P.getAttribute("offset");
                } else fa.appendChild(ba);
                if (ga === null) ga = 1;
                P = a(
                    "path", {
                        d: "M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",
                        fill: "url(#jGraduate_trans)",
                        transform: "translate(" + (10 + ia * ca) + ", 26)",
                    },
                    tb
                );
                var Ca = a(
                    "path", {
                        d: "M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",
                        fill: Y,
                        "fill-opacity": ga,
                        transform: "translate(" + (10 + ia * ca) + ", 26)",
                        stroke: "#000",
                        "stroke-width": 1.5,
                    },
                    tb
                );
                $(Ca)
                    .mousedown(function(Qa) {
                        b(this);
                        Ya = jb;
                        V.mousemove(p).mouseup(k);
                        ra = pb.offset();
                        Qa.preventDefault();
                        return false;
                    })
                    .data("stop", ba)
                    .data("bg", P)
                    .dblclick(function() {
                        $("div.jGraduate_LightBox").show();
                        for (
                            var Qa = this,
                                Ua = +ba.getAttribute("stop-opacity") || 1,
                                hb = ba.getAttribute("stop-color") || 1,
                                Xa = (parseFloat(Ua) * 255).toString(16); Xa.length < 2;

                        )
                            Xa = "0" + Xa;
                        Y = hb.substr(1) + Xa;
                        $("#" + v + "_jGraduate_stopPicker")
                            .css({ left: 100, bottom: 15 })
                            .jPicker({
                                    window: {
                                        title: "Pick the start color and opacity for the gradient",
                                    },
                                    images: { clientPath: C.images.clientPath },
                                    color: { active: Y, alphaSupport: true },
                                },
                                function(ab) {
                                    hb = ab.val("hex") ? "#" + ab.val("hex") : "none";
                                    Ua = ab.val("a") !== null ? ab.val("a") / 256 : 1;
                                    Qa.setAttribute("fill", hb);
                                    Qa.setAttribute("fill-opacity", Ua);
                                    ba.setAttribute("stop-color", hb);
                                    ba.setAttribute("stop-opacity", Ua);
                                    $("div.jGraduate_LightBox").hide();
                                    $("#" + v + "_jGraduate_stopPicker").hide();
                                },
                                null,
                                function() {
                                    $("div.jGraduate_LightBox").hide();
                                    $("#" + v + "_jGraduate_stopPicker").hide();
                                }
                            );
                    });
                $(fa)
                    .find("stop")
                    .each(function() {
                        var Qa = $(this);
                        if (+this.getAttribute("offset") > ia) {
                            if (!Y) {
                                var Ua = this.getAttribute("stop-color"),
                                    hb = this.getAttribute("stop-opacity");
                                ba.setAttribute("stop-color", Ua);
                                Ca.setAttribute("fill", Ua);
                                ba.setAttribute("stop-opacity", hb === null ? 1 : hb);
                                Ca.setAttribute("fill-opacity", hb === null ? 1 : hb);
                            }
                            Qa.before(ba);
                            return false;
                        }
                    });
                Q && b(Ca);
                return ba;
            }

            function b(ia) {
                jb && jb.setAttribute("stroke", "#000");
                ia.setAttribute("stroke", "blue");
                jb = ia;
                jb.parentNode.appendChild(jb);
            }

            function k() {
                V.unbind("mousemove", p);
                if (Aa.getAttribute("display") !== "none") {
                    Aa.setAttribute("display", "none");
                    var ia = $(jb),
                        Y = ia.data("stop");
                    ia = ia.data("bg");
                    $([jb, Y, ia]).remove();
                }
                Ya = null;
            }

            function e() {
                var ia = ya ? "rotate(" + ya + "," + eb + "," + nb + ") " : "";
                Fa === 1 && Ra === 1 ?
                    fa.removeAttribute("gradientTransform") :
                    fa.setAttribute(
                        "gradientTransform",
                        ia +
                        "translate(" +
                        -eb * (Fa - 1) +
                        "," +
                        -nb * (Ra - 1) +
                        ") scale(" +
                        Fa +
                        "," +
                        Ra +
                        ")"
                    );
            }

            function p(ia) {
                var Y = ia.pageX - ra.left;
                ia = ia.pageY - ra.top;
                Y = Y < 10 ? 10 : Y > ca + 10 ? ca + 10 : Y;
                var ga = "translate(" + Y + ", 26)";
                if (ia < -60 || ia > 130) {
                    Aa.setAttribute("display", "block");
                    Aa.setAttribute("transform", ga);
                } else Aa.setAttribute("display", "none");
                Ya.setAttribute("transform", ga);
                $.data(Ya, "bg").setAttribute("transform", ga);
                $.data(Ya, "stop").setAttribute("offset", (Y - 10) / ca);
                var Q = 0;
                $(fa)
                    .find("stop")
                    .each(function() {
                        var P = this.getAttribute("offset"),
                            ba = $(this);
                        if (P < Q) {
                            ba.prev().before(ba);
                            va = $(fa).find("stop");
                        }
                        Q = P;
                    });
            }
            var A = $(this),
                C = $.extend(true, {}, jQuery.fn.jGraduateDefaults, c),
                v = A.attr("id"),
                K = "#" + A.attr("id") + " ";
            if (K) {
                var O = function() {
                        switch (A.paint.type) {
                            case "radialGradient":
                                A.paint.linearGradient = null;
                                break;
                            case "linearGradient":
                                A.paint.radialGradient = null;
                                break;
                            case "solidColor":
                                A.paint.radialGradient = A.paint.linearGradient = null;
                        }
                        $.isFunction(A.okCallback) && A.okCallback(A.paint);
                        A.hide();
                    },
                    L = function() {
                        $.isFunction(A.cancelCallback) && A.cancelCallback();
                        A.hide();
                    };
                $.extend(true, A, {
                    paint: new $.jGraduate.Paint({ copy: C.paint }),
                    okCallback: ($.isFunction(l[1]) && l[1]) || null,
                    cancelCallback: ($.isFunction(l[2]) && l[2]) || null,
                });
                A.position();
                var H = null,
                    V = $(window);
                if (A.paint.type == "none")
                    A.paint = $.jGraduate.Paint({ solidColor: "ffffff" });
                A.addClass("jGraduate_Picker");
                A.html(
                    '<ul class="jGraduate_tabs"><li class="jGraduate_tab_color jGraduate_tab_current" data-type="col">Solid Color</li><li class="jGraduate_tab_lingrad" data-type="lg">Linear Gradient</li><li class="jGraduate_tab_radgrad" data-type="rg">Radial Gradient</li></ul><div class="jGraduate_colPick"></div><div class="jGraduate_gradPick"></div><div class="jGraduate_LightBox"></div><div id="' +
                    v +
                    '_jGraduate_stopPicker" class="jGraduate_stopPicker"></div>'
                );
                var R = $(K + "> .jGraduate_colPick"),
                    N = $(K + "> .jGraduate_gradPick");
                N.html(
                    '<div id="' +
                    v +
                    '_jGraduate_Swatch" class="jGraduate_Swatch"><h2 class="jGraduate_Title">' +
                    C.window.pickerTitle +
                    '</h2><div id="' +
                    v +
                    '_jGraduate_GradContainer" class="jGraduate_GradContainer"></div><div id="' +
                    v +
                    '_jGraduate_StopSlider" class="jGraduate_StopSlider"></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_lg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Begin Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="' +
                    v +
                    '_jGraduate_x1" size="3" title="Enter starting x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' +
                    v +
                    '_jGraduate_y1" size="3" title="Enter starting y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">End Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="' +
                    v +
                    '_jGraduate_x2" size="3" title="Enter ending x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' +
                    v +
                    '_jGraduate_y2" size="3" title="Enter ending y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_rg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Center Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="' +
                    v +
                    '_jGraduate_cx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' +
                    v +
                    '_jGraduate_cy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Focal Point</label><div class="jGraduate_Form_Section"><label>Match center: <input type="checkbox" checked="checked" id="' +
                    v +
                    '_jGraduate_match_ctr"/></label><br/><label>x:</label><input type="text" id="' +
                    v +
                    '_jGraduate_fx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' +
                    v +
                    '_jGraduate_fy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_StopSection jGraduate_SpreadMethod"><label class="jGraduate_Form_Heading">Spread method</label><div class="jGraduate_Form_Section"><select class="jGraduate_spreadMethod"><option value=pad selected>Pad</option><option value=reflect>Reflect</option><option value=repeat>Repeat</option></select></div></div><div class="jGraduate_Form"><div class="jGraduate_Slider jGraduate_RadiusField jGraduate_rg_field"><label class="prelabel">Radius:</label><div id="' +
                    v +
                    '_jGraduate_Radius" class="jGraduate_SliderBar jGraduate_Radius" title="Click to set radius"><img id="' +
                    v +
                    '_jGraduate_RadiusArrows" class="jGraduate_RadiusArrows" src="' +
                    C.images.clientPath +
                    'rangearrows2.gif"></div><label><input type="text" id="' +
                    v +
                    '_jGraduate_RadiusInput" size="3" value="100"/>%</label></div><div class="jGraduate_Slider jGraduate_EllipField jGraduate_rg_field"><label class="prelabel">Ellip:</label><div id="' +
                    v +
                    '_jGraduate_Ellip" class="jGraduate_SliderBar jGraduate_Ellip" title="Click to set Ellip"><img id="' +
                    v +
                    '_jGraduate_EllipArrows" class="jGraduate_EllipArrows" src="' +
                    C.images.clientPath +
                    'rangearrows2.gif"></div><label><input type="text" id="' +
                    v +
                    '_jGraduate_EllipInput" size="3" value="0"/>%</label></div><div class="jGraduate_Slider jGraduate_AngleField jGraduate_rg_field"><label class="prelabel">Angle:</label><div id="' +
                    v +
                    '_jGraduate_Angle" class="jGraduate_SliderBar jGraduate_Angle" title="Click to set Angle"><img id="' +
                    v +
                    '_jGraduate_AngleArrows" class="jGraduate_AngleArrows" src="' +
                    C.images.clientPath +
                    'rangearrows2.gif"></div><label><input type="text" id="' +
                    v +
                    '_jGraduate_AngleInput" size="3" value="0"/>\u00ba&nbsp;</label></div><div class="jGraduate_Slider jGraduate_OpacField"><label class="prelabel">Opac:</label><div id="' +
                    v +
                    '_jGraduate_Opac" class="jGraduate_SliderBar jGraduate_Opac" title="Click to set Opac"><img id="' +
                    v +
                    '_jGraduate_OpacArrows" class="jGraduate_OpacArrows" src="' +
                    C.images.clientPath +
                    'rangearrows2.gif"></div><label><input type="text" id="' +
                    v +
                    '_jGraduate_OpacInput" size="3" value="100"/>%</label></div></div><div class="jGraduate_OkCancel"><input type="button" id="' +
                    v +
                    '_jGraduate_Ok" class="jGraduate_Ok" value="OK"/><input type="button" id="' +
                    v +
                    '_jGraduate_Cancel" class="jGraduate_Cancel" value="Cancel"/></div>'
                );
                var ca = 256,
                    ma = ca - 0,
                    Z = ca - 0,
                    U,
                    fa,
                    ua,
                    ja = {};
                $(".jGraduate_SliderBar").width(145);
                var ka = $("#" + v + "_jGraduate_GradContainer")[0],
                    aa = a(
                        "svg", { id: v + "_jgraduate_svg", width: ca, height: ca, xmlns: n.svg },
                        ka
                    );
                U = U || A.paint.type;
                var da = (fa = A.paint[U]),
                    qa = A.paint.alpha,
                    pa = U === "solidColor";
                switch (U) {
                    case "solidColor":
                    case "linearGradient":
                        if (!pa) {
                            fa.id = v + "_lg_jgraduate_grad";
                            da = fa = aa.appendChild(fa);
                        }
                        a("radialGradient", { id: v + "_rg_jgraduate_grad" }, aa);
                        if (U === "linearGradient") break;
                    case "radialGradient":
                        if (!pa) {
                            fa.id = v + "_rg_jgraduate_grad";
                            da = fa = aa.appendChild(fa);
                        }
                        a(
                            "linearGradient", { id: v + "_lg_jgraduate_grad", x1: 0, y1: 0, x2: 1, y2: 0 },
                            aa
                        );
                }
                if (pa) {
                    da = fa = $("#" + v + "_lg_jgraduate_grad")[0];
                    H = A.paint[U];
                    q(0, "#" + H, 1);
                    var na = typeof C.newstop;
                    if (na === "string")
                        switch (C.newstop) {
                            case "same":
                                q(1, "#" + H, 1);
                                break;
                            case "inverse":
                                na = "";
                                if (H.length === 3)
                                    H = H.split("")
                                    .map(function(ia) {
                                        return ia + "" + ia;
                                    })
                                    .join("");
                                for (var oa = 0; oa < 6; oa += 2) {
                                    H.substr(oa, 2);
                                    var Ka = (255 - parseInt(H.substr(oa, 2), 16)).toString(16);
                                    if (Ka.length < 2) Ka = 0 + Ka;
                                    na += Ka;
                                }
                                q(1, "#" + na, 1);
                                break;
                            case "white":
                                q(1, "#ffffff", 1);
                                break;
                            case "black":
                                q(1, "#000000", 1);
                        }
                    else if (na === "object")
                        q(
                            1,
                            C.newstop.color || "#" + H,
                            "opac" in C.newstop ? C.newstop.opac : 1
                        );
                }
                H = parseFloat(da.getAttribute("x1") || 0);
                na = parseFloat(da.getAttribute("y1") || 0);
                oa = parseFloat(da.getAttribute("x2") || 1);
                Ka = parseFloat(da.getAttribute("y2") || 0);
                var Ea = parseFloat(da.getAttribute("cx") || 0.5),
                    Pa = parseFloat(da.getAttribute("cy") || 0.5),
                    Wa = parseFloat(da.getAttribute("fx") || Ea),
                    Ia = parseFloat(da.getAttribute("fy") || Pa);
                ua = a(
                    "rect", {
                        id: v + "_jgraduate_rect",
                        x: 0,
                        y: 0,
                        width: ma,
                        height: Z,
                        fill: "url(#" + v + "_jgraduate_grad)",
                        "fill-opacity": qa / 100,
                    },
                    aa
                );
                var Ja = $("<div/>")
                    .attr({
                        class: "grad_coord jGraduate_lg_field",
                        title: "Begin Stop",
                    })
                    .text(1)
                    .css({ top: na * ca, left: H * ca })
                    .data("coord", "start")
                    .appendTo(ka),
                    za = Ja.clone()
                    .text(2)
                    .css({ top: Ka * ca, left: oa * ca })
                    .attr("title", "End stop")
                    .data("coord", "end")
                    .appendTo(ka),
                    wa = $("<div/>")
                    .attr({
                        class: "grad_coord jGraduate_rg_field",
                        title: "Center stop",
                    })
                    .text("C")
                    .css({ top: Pa * ca, left: Ea * ca })
                    .data("coord", "center")
                    .appendTo(ka),
                    sa = wa
                    .clone()
                    .text("F")
                    .css({ top: Ia * ca, left: Wa * ca, display: "none" })
                    .attr("title", "Focus point")
                    .data("coord", "focus")
                    .appendTo(ka);
                sa[0].id = v + "_jGraduate_focusCoord";
                $(K + " .grad_coord");
                $.each(["x1", "y1", "x2", "y2", "cx", "cy", "fx", "fy"], function(
                    ia,
                    Y
                ) {
                    var ga = fa.getAttribute(Y),
                        Q = isNaN(Y[1]);
                    ga || (ga = Q ? "0.5" : Y === "x2" ? "1.0" : "0.0");
                    ja[Y] = $("#" + v + "_jGraduate_" + Y)
                        .val(ga)
                        .change(function() {
                            if (isNaN(parseFloat(this.value)) || this.value < 0)
                                this.value = 0;
                            else if (this.value > 1) this.value = 1;
                            if (!(Y[0] === "f" && !fb))
                                if (
                                    (Q && U === "radialGradient") ||
                                    (!Q && U === "linearGradient")
                                )
                                    fa.setAttribute(Y, this.value);
                            var P = Q ? (Y[0] === "c" ? wa : sa) : Y[1] === "1" ? Ja : za,
                                ba = Y.indexOf("x") >= 0 ? "left" : "top";
                            P.css(ba, this.value * ca);
                        })
                        .change();
                });
                var va,
                    tb,
                    pb = $("#" + v + "_jGraduate_StopSlider"),
                    jb,
                    Va,
                    Ya,
                    Aa = a(
                        "path", {
                            d: "m9.75,-6l-19.5,19.5m0,-19.5l19.5,19.5",
                            fill: "none",
                            stroke: "#D00",
                            "stroke-width": 5,
                            display: "none",
                        },
                        Va
                    ),
                    ra,
                    Fa = 1,
                    Ra = 1,
                    ya = 0,
                    eb = Ea,
                    nb = Pa;
                Va = a("svg", { width: "100%", height: 45 }, pb[0]);
                ka = a(
                    "pattern", {
                        width: 16,
                        height: 16,
                        patternUnits: "userSpaceOnUse",
                        id: "jGraduate_trans",
                    },
                    Va
                );
                a("image", { width: 16, height: 16 }, ka).setAttributeNS(
                    n.xlink,
                    "xlink:href",
                    C.images.clientPath + "map-opacity.png"
                );
                $(Va).on("click touchstart", function(ia) {
                    ra = pb.offset();
                    if (ia.target.tagName !== "path") {
                        var Y = ia.pageX - ra.left - 8;
                        Y = Y < 10 ? 10 : Y > ca + 10 ? ca + 10 : Y;
                        q(Y / ca, 0, 0, true);
                        ia.stopPropagation();
                    }
                });
                $(Va).mouseover(function() {
                    Va.appendChild(Aa);
                });
                tb = a("g", {}, Va);
                a(
                    "line", {
                        x1: 10,
                        y1: 15,
                        x2: ca + 10,
                        y2: 15,
                        "stroke-width": 2,
                        stroke: "#000",
                    },
                    Va
                );
                var $a = N.find(".jGraduate_spreadMethod").change(function() {
                        fa.setAttribute("spreadMethod", $(this).val());
                    }),
                    Sa = null,
                    ub = function(ia) {
                        var Y = ia.pageX - qb.left,
                            ga = ia.pageY - qb.top;
                        Y = Y < 0 ? 0 : Y > ca ? ca : Y;
                        ga = ga < 0 ? 0 : ga > ca ? ca : ga;
                        Sa.css("left", Y).css("top", ga);
                        Y = Y / ma;
                        ga = ga / Z;
                        var Q = Sa.data("coord"),
                            P = fa;
                        switch (Q) {
                            case "start":
                                ja.x1.val(Y);
                                ja.y1.val(ga);
                                P.setAttribute("x1", Y);
                                P.setAttribute("y1", ga);
                                break;
                            case "end":
                                ja.x2.val(Y);
                                ja.y2.val(ga);
                                P.setAttribute("x2", Y);
                                P.setAttribute("y2", ga);
                                break;
                            case "center":
                                ja.cx.val(Y);
                                ja.cy.val(ga);
                                P.setAttribute("cx", Y);
                                P.setAttribute("cy", ga);
                                eb = Y;
                                nb = ga;
                                e();
                                break;
                            case "focus":
                                ja.fx.val(Y);
                                ja.fy.val(ga);
                                P.setAttribute("fx", Y);
                                P.setAttribute("fy", ga);
                                e();
                        }
                        ia.preventDefault();
                    },
                    La = function() {
                        Sa = null;
                        V.unbind("mousemove", ub).unbind("mouseup", La);
                    };
                va = fa.getElementsByTagNameNS(n.svg, "stop");
                if (Ga < 2) {
                    for (; Ga < 2;) {
                        fa.appendChild(document.createElementNS(n.svg, "stop"));
                        ++Ga;
                    }
                    va = fa.getElementsByTagNameNS(n.svg, "stop");
                }
                var Ga = va.length;
                for (oa = 0; oa < Ga; oa++) q(0, 0, 0, 0, va[oa]);
                $a.val(fa.getAttribute("spreadMethod") || "pad");
                var qb,
                    fb = false;
                ua.setAttribute("fill-opacity", qa / 100);
                $("#" + v + " div.grad_coord").mousedown(function(ia) {
                    ia.preventDefault();
                    Sa = $(this);
                    Sa.offset();
                    qb = Sa.parent().offset();
                    V.mousemove(ub).mouseup(La);
                });
                $("#" + v + "_jGraduate_Ok").bind("click touchstart", function() {
                    A.paint.type = U;
                    A.paint[U] = fa.cloneNode(true);
                    A.paint.solidColor = null;
                    O();
                });
                $("#" + v + "_jGraduate_Cancel").bind("click touchstart", function() {
                    L();
                });
                if (U === "radialGradient")
                    if (fb) sa.show();
                    else {
                        sa.hide();
                        ja.fx.val("");
                        ja.fy.val("");
                    }
                $("#" + v + "_jGraduate_match_ctr")[0].checked = !fb;
                var rb, kb;
                $("#" + v + "_jGraduate_match_ctr").change(function() {
                    fb = !this.checked;
                    sa.toggle(fb);
                    ja.fx.val("");
                    ja.fy.val("");
                    var ia = fa;
                    if (fb) {
                        var Y = rb || 0.5,
                            ga = kb || 0.5;
                        ia.setAttribute("fx", Y);
                        ia.setAttribute("fy", ga);
                        ja.fx.val(Y);
                        ja.fy.val(ga);
                    } else {
                        rb = ia.getAttribute("fx");
                        kb = ia.getAttribute("fy");
                        ia.removeAttribute("fx");
                        ia.removeAttribute("fy");
                    }
                });
                va = fa.getElementsByTagNameNS(n.svg, "stop");
                Ga = va.length;
                if (Ga < 2) {
                    for (; Ga < 2;) {
                        fa.appendChild(document.createElementNS(n.svg, "stop"));
                        ++Ga;
                    }
                    va = fa.getElementsByTagNameNS(n.svg, "stop");
                }
                var gb;
                qa = N = 0;
                if (U === "radialGradient") {
                    aa = fa.gradientTransform.baseVal;
                    if (aa.numberOfItems === 2) {
                        Ga = aa.getItem(0);
                        aa = aa.getItem(1);
                        if (Ga.type === 2 && aa.type === 3) {
                            Ga = aa.matrix;
                            if (Ga.a !== 1) N = Math.round(-(1 - Ga.a) * 100);
                            else if (Ga.d !== 1) N = Math.round((1 - Ga.d) * 100);
                        }
                    } else if (aa.numberOfItems === 3) {
                        ka = aa.getItem(0);
                        Ga = aa.getItem(1);
                        aa = aa.getItem(2);
                        if (ka.type === 4 && Ga.type === 2 && aa.type === 3) {
                            qa = Math.round(ka.angle);
                            Ga = aa.matrix;
                            if (Ga.a !== 1) N = Math.round(-(1 - Ga.a) * 100);
                            else if (Ga.d !== 1) N = Math.round((1 - Ga.d) * 100);
                        }
                    }
                }
                N = {
                    radius: {
                        handle: "#" + v + "_jGraduate_RadiusArrows",
                        input: "#" + v + "_jGraduate_RadiusInput",
                        val: (fa.getAttribute("r") || 0.5) * 100,
                    },
                    opacity: {
                        handle: "#" + v + "_jGraduate_OpacArrows",
                        input: "#" + v + "_jGraduate_OpacInput",
                        val: A.paint.alpha || 100,
                    },
                    ellip: {
                        handle: "#" + v + "_jGraduate_EllipArrows",
                        input: "#" + v + "_jGraduate_EllipInput",
                        val: N,
                    },
                    angle: {
                        handle: "#" + v + "_jGraduate_AngleArrows",
                        input: "#" + v + "_jGraduate_AngleInput",
                        val: qa,
                    },
                };
                $.each(N, function(ia, Y) {
                    var ga = $(Y.handle);
                    ga.mousedown(function(Q) {
                        var P = ga.parent();
                        gb = {
                            type: ia,
                            elem: ga,
                            input: $(Y.input),
                            parent: P,
                            offset: P.offset(),
                        };
                        V.mousemove(ob).mouseup(wb);
                        Q.preventDefault();
                    });
                    $(Y.input)
                        .val(Y.val)
                        .change(function() {
                            var Q = +this.value,
                                P = 0,
                                ba = U === "radialGradient";
                            switch (ia) {
                                case "radius":
                                    ba && fa.setAttribute("r", Q / 100);
                                    P = (Math.pow(Q / 100, 0.4) / 2) * 145;
                                    break;
                                case "opacity":
                                    A.paint.alpha = Q;
                                    ua.setAttribute("fill-opacity", Q / 100);
                                    P = Q * 1.45;
                                    break;
                                case "ellip":
                                    Fa = Ra = 1;
                                    if (Q === 0) {
                                        P = 72.5;
                                        break;
                                    }
                                    if (Q > 99.5) Q = 99.5;
                                    if (Q > 0) Ra = 1 - Q / 100;
                                    else Fa = -(Q / 100) - 1;
                                    P = (145 * ((Q + 100) / 2)) / 100;
                                    ba && e();
                                    break;
                                case "angle":
                                    ya = Q;
                                    P = ya / 180;
                                    P += 0.5;
                                    P *= 145;
                                    ba && e();
                            }
                            if (P > 145) P = 145;
                            else if (P < 0) P = 0;
                            ga.css({ "margin-left": P - 5 });
                        })
                        .change();
                });
                var ob = function(ia) {
                        var Y =
                            ia.pageX -
                            gb.offset.left -
                            parseInt(gb.parent.css("border-left-width"));
                        if (Y > 145) Y = 145;
                        if (Y <= 0) Y = 0;
                        var ga = Y - 5;
                        Y /= 145;
                        switch (gb.type) {
                            case "radius":
                                Y = Math.pow(Y * 2, 2.5);
                                if (Y > 0.98 && Y < 1.02) Y = 1;
                                if (Y <= 0.01) Y = 0.01;
                                fa.setAttribute("r", Y);
                                break;
                            case "opacity":
                                A.paint.alpha = parseInt(Y * 100);
                                ua.setAttribute("fill-opacity", Y);
                                break;
                            case "ellip":
                                Ra = Fa = 1;
                                if (Y < 0.5) {
                                    Y /= 0.5;
                                    Fa = Y <= 0 ? 0.01 : Y;
                                } else if (Y > 0.5) {
                                    Y /= 0.5;
                                    Y = 2 - Y;
                                    Ra = Y <= 0 ? 0.01 : Y;
                                }
                                e();
                                Y -= 1;
                                if (Ra === Y + 1) Y = Math.abs(Y);
                                break;
                            case "angle":
                                Y -= 0.5;
                                ya = Y *= 180;
                                e();
                                Y /= 100;
                        }
                        gb.elem.css({ "margin-left": ga });
                        Y = Math.round(Y * 100);
                        gb.input.val(Y);
                        ia.preventDefault();
                    },
                    wb = function() {
                        V.unbind("mousemove", ob).unbind("mouseup", wb);
                        gb = null;
                    };
                for (N = ((A.paint.alpha * 255) / 100).toString(16); N.length < 2;)
                    N = "0" + N;
                N = N.split(".")[0];
                H = A.paint.solidColor == "none" ? "" : A.paint.solidColor + N;
                pa || (H = va[0].getAttribute("stop-color"));
                $.extend($.fn.jPicker.defaults.window, {
                    alphaSupport: true,
                    effects: { type: "show", speed: 0 },
                });
                R.jPicker({
                        window: { title: C.window.pickerTitle },
                        images: { clientPath: C.images.clientPath },
                        color: { active: H, alphaSupport: true },
                    },
                    function(ia) {
                        A.paint.type = "solidColor";
                        A.paint.alpha = ia.val("ahex") ?
                            Math.round((ia.val("a") / 255) * 100) :
                            100;
                        A.paint.solidColor = ia.val("hex") ? ia.val("hex") : "none";
                        A.paint.radialGradient = null;
                        O();
                    },
                    null,
                    function() {
                        L();
                    }
                );
                var cb = $(K + " .jGraduate_tabs li");
                cb.on("click touchstart", function() {
                    cb.removeClass("jGraduate_tab_current");
                    $(this).addClass("jGraduate_tab_current");
                    $(K + " > div").hide();
                    var ia = $(this).attr("data-type");
                    $(K + " .jGraduate_gradPick").show();
                    if (ia === "rg" || ia === "lg") {
                        $(".jGraduate_" + ia + "_field").show();
                        $(".jGraduate_" + (ia === "lg" ? "rg" : "lg") + "_field").hide();
                        $("#" + v + "_jgraduate_rect")[0].setAttribute(
                            "fill",
                            "url(#" + v + "_" + ia + "_jgraduate_grad)"
                        );
                        U = ia === "lg" ? "linearGradient" : "radialGradient";
                        $("#" + v + "_jGraduate_OpacInput")
                            .val(A.paint.alpha)
                            .change();
                        var Y = $("#" + v + "_" + ia + "_jgraduate_grad")[0];
                        if (fa !== Y) {
                            var ga = $(fa).find("stop");
                            $(Y).empty().append(ga);
                            fa = Y;
                            Y = $a.val();
                            fa.setAttribute("spreadMethod", Y);
                        }
                        fb =
                            ia === "rg" &&
                            fa.getAttribute("fx") != null &&
                            !(Ea == Wa && Pa == Ia);
                        $("#" + v + "_jGraduate_focusCoord").toggle(fb);
                        if (fb) $("#" + v + "_jGraduate_match_ctr")[0].checked = false;
                    } else {
                        $(K + " .jGraduate_gradPick").hide();
                        $(K + " .jGraduate_colPick").show();
                    }
                });
                $(K + " > div").hide();
                cb.removeClass("jGraduate_tab_current");
                var lb;
                switch (A.paint.type) {
                    case "linearGradient":
                        lb = $(K + " .jGraduate_tab_lingrad");
                        break;
                    case "radialGradient":
                        lb = $(K + " .jGraduate_tab_radgrad");
                        break;
                    default:
                        lb = $(K + " .jGraduate_tab_color");
                }
                A.show();
                setTimeout(function() {
                    lb.addClass("jGraduate_tab_current").click();
                }, 10);
            } else
                alert(
                    "Container element must have an id attribute to maintain unique id strings for sub-elements."
                );
        });
    };
})();
jQuery &&
    (function() {
        var a = $(window),
            n = $(document);
        $.extend($.fn, {
            contextMenu: function(d, c) {
                if (d.menu == undefined) return false;
                if (d.inSpeed == undefined) d.inSpeed = 150;
                if (d.outSpeed == undefined) d.outSpeed = 75;
                if (d.inSpeed == 0) d.inSpeed = -1;
                if (d.outSpeed == 0) d.outSpeed = -1;
                $(this).each(function() {
                    var l = $(this),
                        q = $(l).offset(),
                        b = $("#" + d.menu);
                    b.addClass("contextMenu");
                    $(this).bind("mousedown", function(e) {
                        $(this).on("mouseup", function(p) {
                            var A = $(this);
                            A.unbind("mouseup");
                            $(".contextMenu").hide();
                            if (
                                e.button === 2 ||
                                d.allowLeft ||
                                (e.ctrlKey && svgedit.browser.isMac())
                            )
                                svgedit.browser.isTouch() || k(p, e, A);
                        });
                    });
                    svgedit.browser.isTouch() &&
                        $(this).bind("taphold", function(e) {
                            var p = $(this);
                            p.unbind("mouseup");
                            k(e, e, p);
                        });
                    var k = function(e, p, A) {
                        if (typeof p == "undefined") p = e;
                        e.stopPropagation();
                        if (l.hasClass("disabled") || p.altKey) return false;
                        var C = e.pageX,
                            v = e.pageY;
                        if (svgedit.browser.isTouch()) {
                            C = e.originalEvent.touches[0].pageX;
                            v = e.originalEvent.touches[0].pageY;
                        }
                        e = a.width() - b.width();
                        p = a.height() - b.height();
                        if (C > e - 15) C = e - 15;
                        if (v > p - 30) v = p - 30;
                        if (svgedit.browser.isTouch()) v -= b.height() / 2;
                        n.unbind("click");
                        b.css({ top: v, left: C }).fadeIn(d.inSpeed);
                        b.find("A")
                            .mouseover(function() {
                                b.find("LI.hover").removeClass("hover");
                                $(this).parent().addClass("hover");
                            })
                            .mouseout(function() {
                                b.find("LI.hover").removeClass("hover");
                            });
                        n.keypress(function(K) {
                            switch (K.keyCode) {
                                case 38:
                                    if (b.find("LI.hover").length) {
                                        b.find("LI.hover")
                                            .removeClass("hover")
                                            .prevAll("LI:not(.disabled)")
                                            .eq(0)
                                            .addClass("hover");
                                        b.find("LI.hover").length ||
                                            b.find("LI:last").addClass("hover");
                                    } else b.find("LI:last").addClass("hover");
                                    break;
                                case 40:
                                    if (b.find("LI.hover").length == 0)
                                        b.find("LI:first").addClass("hover");
                                    else {
                                        b.find("LI.hover")
                                            .removeClass("hover")
                                            .nextAll("LI:not(.disabled)")
                                            .eq(0)
                                            .addClass("hover");
                                        b.find("LI.hover").length ||
                                            b.find("LI:first").addClass("hover");
                                    }
                                    break;
                                case 13:
                                    b.find("LI.hover A").trigger("click");
                                    break;
                                case 27:
                                    n.trigger("click");
                            }
                        });
                        b.find("A").unbind("mouseup");
                        b.find("LI:not(.disabled) A").mouseup(function() {
                            n.unbind("click").unbind("keypress");
                            $(".contextMenu").hide();
                            c &&
                                c($(this).attr("href").substr(1), $(A), {
                                    x: C - q.left,
                                    y: v - q.top,
                                    docX: C,
                                    docY: v,
                                });
                            return false;
                        });
                        setTimeout(function() {
                            n.click(function() {
                                n.unbind("click").unbind("keypress");
                                b.fadeOut(d.outSpeed);
                                return false;
                            });
                        }, 0);
                    };
                    $(l)
                        .add($("UL.contextMenu"))
                        .bind("contextmenu", function() {
                            return false;
                        });
                });
                return $(this);
            },
            disableContextMenuItems: function(d) {
                if (d == undefined) {
                    $(this).find("LI").addClass("disabled");
                    return $(this);
                }
                $(this).each(function() {
                    if (d != undefined)
                        for (var c = d.split(","), l = 0; l < c.length; l++)
                            $(this)
                            .find('A[href="' + c[l] + '"]')
                            .parent()
                            .addClass("disabled");
                });
                return $(this);
            },
            enableContextMenuItems: function(d) {
                if (d == undefined) {
                    $(this).find("LI.disabled").removeClass("disabled");
                    return $(this);
                }
                $(this).each(function() {
                    if (d != undefined)
                        for (var c = d.split(","), l = 0; l < c.length; l++)
                            $(this)
                            .find('A[href="' + c[l] + '"]')
                            .parent()
                            .removeClass("disabled");
                });
                return $(this);
            },
            disableContextMenu: function() {
                $(this).each(function() {
                    $(this).addClass("disabled");
                });
                return $(this);
            },
            enableContextMenu: function() {
                $(this).each(function() {
                    $(this).removeClass("disabled");
                });
                return $(this);
            },
            destroyContextMenu: function() {
                $(this).each(function() {
                    $(this).unbind("mousedown").unbind("mouseup");
                });
                return $(this);
            },
        });
    })(jQuery);
var svgedit = svgedit || {};
(function() {
    if (!svgedit.browser) svgedit.browser = {};
    var a = !!document.createElementNS &&
        !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
        .createSVGRect;
    svgedit.browser.supportsSvg = function() {
        return a;
    };
    if (svgedit.browser.supportsSvg()) {
        var n = navigator.userAgent,
            d = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            c = !!window.opera,
            l = n.indexOf("AppleWebKit") >= 0,
            q = n.indexOf("Gecko/") >= 0,
            b = n.indexOf("MSIE") >= 0,
            k = n.indexOf("Chrome/") >= 0,
            e = n.indexOf("Windows") >= 0,
            p = n.indexOf("Macintosh") >= 0,
            A = "ontouchstart" in window,
            C = !!d.querySelector,
            v = !!document.evaluate,
            K = (function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                    ma = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                document.documentElement.appendChild(ca);
                ma.setAttribute("x", 5);
                ca.appendChild(ma);
                var Z = document.createElementNS("http://www.w3.org/2000/svg", "text");
                Z.textContent = "a";
                ma.appendChild(Z);
                ma = Z.getStartPositionOfChar(0);
                ma = ma.x;
                document.documentElement.removeChild(ca);
                return ma === 0;
            })(),
            O = (function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                document.documentElement.appendChild(ca);
                var ma = document.createElementNS("http://www.w3.org/2000/svg", "path");
                ma.setAttribute("d", "M0,0 C0,0 10,10 10,0");
                ca.appendChild(ma);
                ma = ma.getBBox();
                document.documentElement.removeChild(ca);
                return ma.height > 4 && ma.height < 5;
            })(),
            L = (function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                document.documentElement.appendChild(ca);
                var ma = document.createElementNS("http://www.w3.org/2000/svg", "path");
                ma.setAttribute("d", "M0,0 10,0");
                var Z = document.createElementNS("http://www.w3.org/2000/svg", "path");
                Z.setAttribute("d", "M5,0 15,0");
                var U = document.createElementNS("http://www.w3.org/2000/svg", "g");
                U.appendChild(ma);
                U.appendChild(Z);
                ca.appendChild(U);
                ma = U.getBBox();
                document.documentElement.removeChild(ca);
                return ma.width == 15;
            })(),
            H = (function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                ca.setAttribute("x", 0.1);
                (ca = ca.cloneNode(false).getAttribute("x").indexOf(",") == -1) ||
                $.alert(
                    "NOTE: This version of Opera is known to contain bugs in SVG-edit.\n    Please upgrade to the <a href='http://opera.com'>latest version</a> in which the problems have been fixed."
                );
                return ca;
            })(),
            V = (function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                ca.setAttribute("style", "vector-effect:non-scaling-stroke");
                return ca.style.vectorEffect === "non-scaling-stroke";
            })(),
            R = (function() {
                var ca = document.createElementNS("http://www.w3.org/2000/svg", "rect")
                    .transform.baseVal,
                    ma = d.createSVGTransform();
                ca.appendItem(ma);
                return ca.getItem(0) == ma;
            })(),
            N = (function() {
                if (typeof Blob != "function") return false;
                var ca = new Blob(["<svg xmlns='http://www.w3.org/2000/svg'></svg>"], {
                        type: "image/svg+xml;charset=utf-8",
                    }),
                    ma = new Image();
                ma.onload = function() {
                    svgedit.browser.supportsBlobs = function() {
                        return true;
                    };
                };
                ma.onerror = function() {
                    svgedit.browser.supportsBlobs = function() {
                        return false;
                    };
                };
                ma.src = URL.createObjectURL(ca);
                return false;
            })();
        svgedit.browser.isOpera = function() {
            return c;
        };
        svgedit.browser.isWebkit = function() {
            return l;
        };
        svgedit.browser.isGecko = function() {
            return q;
        };
        svgedit.browser.isIE = function() {
            return b;
        };
        svgedit.browser.isChrome = function() {
            return k;
        };
        svgedit.browser.isWindows = function() {
            return e;
        };
        svgedit.browser.isMac = function() {
            return p;
        };
        svgedit.browser.isTouch = function() {
            return A;
        };
        svgedit.browser.supportsSelectors = function() {
            return C;
        };
        svgedit.browser.supportsXpath = function() {
            return v;
        };
        svgedit.browser.supportsPathBBox = function() {
            return O;
        };
        svgedit.browser.supportsHVLineContainerBBox = function() {
            return L;
        };
        svgedit.browser.supportsGoodTextCharPos = function() {
            return K;
        };
        svgedit.browser.supportsEditableText = function() {
            return c;
        };
        svgedit.browser.supportsGoodDecimals = function() {
            return H;
        };
        svgedit.browser.supportsNonScalingStroke = function() {
            return V;
        };
        svgedit.browser.supportsNativeTransformLists = function() {
            return R;
        };
        svgedit.browser.supportsBlobs = function() {
            return N;
        };
    } else window.location = "browser-not-supported.html";
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.transformlist) svgedit.transformlist = {};
    var a = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        n = {};
    svgedit.transformlist.SVGTransformList = function(d) {
        this._elem = d || null;
        this._xforms = [];
        this._update = function() {
            var c = "";
            a.createSVGMatrix();
            for (var l = 0; l < this.numberOfItems; ++l) {
                var q = this._list.getItem(l);
                c = c;
                q = q;
                var b = q.matrix,
                    k = "";
                switch (q.type) {
                    case 1:
                        k = "matrix(" + [b.a, b.b, b.c, b.d, b.e, b.f].join(",") + ")";
                        break;
                    case 2:
                        k = "translate(" + b.e + "," + b.f + ")";
                        break;
                    case 3:
                        k =
                            b.a == b.d ?
                            "scale(" + b.a + ")" :
                            "scale(" + b.a + "," + b.d + ")";
                        break;
                    case 4:
                        var e = 0;
                        k = 0;
                        if (q.angle != 0) {
                            e = 1 - b.a;
                            k = (e * b.f + b.b * b.e) / (e * e + b.b * b.b);
                            e = (b.e - b.b * k) / e;
                        }
                        k = "rotate(" + q.angle + " " + e + "," + k + ")";
                }
                c = c + (k + " ");
            }
            this._elem.setAttribute("transform", c);
        };
        this._list = this;
        this._init = function() {
            var c = this._elem.getAttribute("transform");
            if (c)
                for (
                    var l = /\s*((scale|matrix|rotate|translate)\s*\(.*?\))\s*,?\s*/,
                        q = true; q;

                ) {
                    q = c.match(l);
                    c = c.replace(l, "");
                    if (q && q[1]) {
                        var b = q[1].split(/\s*\(/),
                            k = b[0];
                        b = b[1].match(/\s*(.*?)\s*\)/);
                        b[1] = b[1].replace(/(\d)-/g, "$1 -");
                        var e = b[1].split(/[, ]+/),
                            p = "abcdef".split(""),
                            A = a.createSVGMatrix();
                        $.each(e, function(K, O) {
                            e[K] = parseFloat(O);
                            if (k == "matrix") A[p[K]] = e[K];
                        });
                        b = a.createSVGTransform();
                        var C = "set" + k.charAt(0).toUpperCase() + k.slice(1),
                            v = k == "matrix" ? [A] : e;
                        if (k == "scale" && v.length == 1) v.push(v[0]);
                        else if (k == "translate" && v.length == 1) v.push(0);
                        else if (k == "rotate" && v.length == 1) {
                            v.push(0);
                            v.push(0);
                        }
                        b[C].apply(b, v);
                        this._list.appendItem(b);
                    }
                }
        };
        this._removeFromOtherLists = function(c) {
            if (c) {
                var l = false,
                    q;
                for (q in n) {
                    for (var b = n[q], k = 0, e = b._xforms.length; k < e; ++k)
                        if (b._xforms[k] == c) {
                            l = true;
                            b.removeItem(k);
                            break;
                        }
                    if (l) break;
                }
            }
        };
        this.numberOfItems = 0;
        this.clear = function() {
            this.numberOfItems = 0;
            this._xforms = [];
        };
        this.initialize = function(c) {
            this.numberOfItems = 1;
            this._removeFromOtherLists(c);
            this._xforms = [c];
        };
        this.getItem = function(c) {
            if (c < this.numberOfItems && c >= 0) return this._xforms[c];
            throw { code: 1 };
        };
        this.insertItemBefore = function(c, l) {
            var q = null;
            if (l >= 0)
                if (l < this.numberOfItems) {
                    this._removeFromOtherLists(c);
                    q = Array(this.numberOfItems + 1);
                    for (var b = 0; b < l; ++b) q[b] = this._xforms[b];
                    q[b] = c;
                    for (var k = b + 1; b < this.numberOfItems; ++k, ++b)
                        q[k] = this._xforms[b];
                    this.numberOfItems++;
                    this._xforms = q;
                    q = c;
                    this._list._update();
                } else q = this._list.appendItem(c);
            return q;
        };
        this.replaceItem = function(c, l) {
            var q = null;
            if (l < this.numberOfItems && l >= 0) {
                this._removeFromOtherLists(c);
                q = this._xforms[l] = c;
                this._list._update();
            }
            return q;
        };
        this.removeItem = function(c) {
            if (c < this.numberOfItems && c >= 0) {
                for (
                    var l = this._xforms[c], q = Array(this.numberOfItems - 1), b = 0; b < c;
                    ++b
                )
                    q[b] = this._xforms[b];
                for (c = b; c < this.numberOfItems - 1; ++c, ++b)
                    q[c] = this._xforms[b + 1];
                this.numberOfItems--;
                this._xforms = q;
                this._list._update();
                return l;
            } else throw { code: 1 };
        };
        this.appendItem = function(c) {
            this._removeFromOtherLists(c);
            this._xforms.push(c);
            this.numberOfItems++;
            this._list._update();
            return c;
        };
    };
    svgedit.transformlist.resetListMap = function() {
        n = {};
    };
    svgedit.transformlist.removeElementFromListMap = function(d) {
        d.id && n[d.id] && delete n[d.id];
    };
    svgedit.transformlist.getTransformList = function(d) {
        if (svgedit.browser.supportsNativeTransformLists())
            if (d.transform) return d.transform.baseVal;
            else if (d.gradientTransform) return d.gradientTransform.baseVal;
        else {
            if (d.patternTransform) return d.patternTransform.baseVal;
        } else {
            var c = d.id;
            c || (c = "temp");
            var l = n[c];
            if (!l || c == "temp") {
                n[c] = new svgedit.transformlist.SVGTransformList(d);
                n[c]._init();
                l = n[c];
            }
            return l;
        }
        return null;
    };
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.math) svgedit.math = {};
    var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgedit.math.transformPoint = function(n, d, c) {
        return { x: c.a * n + c.c * d + c.e, y: c.b * n + c.d * d + c.f };
    };
    svgedit.math.isIdentity = function(n) {
        return (
            n.a === 1 && n.b === 0 && n.c === 0 && n.d === 1 && n.e === 0 && n.f === 0
        );
    };
    svgedit.math.matrixMultiply = function() {
        for (var n = arguments, d = n.length, c = n[d - 1]; d-- > 1;)
            c = n[d - 1].multiply(c);
        if (Math.abs(c.a) < 1.0e-14) c.a = 0;
        if (Math.abs(c.b) < 1.0e-14) c.b = 0;
        if (Math.abs(c.c) < 1.0e-14) c.c = 0;
        if (Math.abs(c.d) < 1.0e-14) c.d = 0;
        if (Math.abs(c.e) < 1.0e-14) c.e = 0;
        if (Math.abs(c.f) < 1.0e-14) c.f = 0;
        return c;
    };
    svgedit.math.hasMatrixTransform = function(n) {
        if (!n) return false;
        for (var d = n.numberOfItems; d--;) {
            var c = n.getItem(d);
            if (c.type == 1 && !svgedit.math.isIdentity(c.matrix)) return true;
        }
        return false;
    };
    svgedit.math.transformBox = function(n, d, c, l, q) {
        var b = { x: n, y: d },
            k = { x: n + c, y: d };
        c = { x: n + c, y: d + l };
        n = { x: n, y: d + l };
        d = svgedit.math.transformPoint;
        b = d(b.x, b.y, q);
        var e = (l = b.x),
            p = b.y,
            A = b.y;
        k = d(k.x, k.y, q);
        l = Math.min(l, k.x);
        e = Math.max(e, k.x);
        p = Math.min(p, k.y);
        A = Math.max(A, k.y);
        n = d(n.x, n.y, q);
        l = Math.min(l, n.x);
        e = Math.max(e, n.x);
        p = Math.min(p, n.y);
        A = Math.max(A, n.y);
        c = d(c.x, c.y, q);
        l = Math.min(l, c.x);
        e = Math.max(e, c.x);
        p = Math.min(p, c.y);
        A = Math.max(A, c.y);
        return {
            tl: b,
            tr: k,
            bl: n,
            br: c,
            aabox: { x: l, y: p, width: e - l, height: A - p },
        };
    };
    svgedit.math.transformListToTransform = function(n, d, c) {
        if (n == null) return a.createSVGTransformFromMatrix(a.createSVGMatrix());
        d = d == undefined ? 0 : d;
        c = c == undefined ? n.numberOfItems - 1 : c;
        d = parseInt(d);
        c = parseInt(c);
        if (d > c) {
            var l = c;
            c = d;
            d = l;
        }
        l = a.createSVGMatrix();
        for (d = d; d <= c; ++d) {
            var q =
                d >= 0 && d < n.numberOfItems ?
                n.getItem(d).matrix :
                a.createSVGMatrix();
            l = svgedit.math.matrixMultiply(l, q);
        }
        return a.createSVGTransformFromMatrix(l);
    };
    svgedit.math.getMatrix = function(n) {
        n = svgedit.transformlist.getTransformList(n);
        return svgedit.math.transformListToTransform(n).matrix;
    };
    svgedit.math.snapToAngle = function(n, d, c, l) {
        var q = Math.PI / 4;
        c = c - n;
        var b = l - d;
        l = Math.sqrt(c * c + b * b);
        q = Math.round(Math.atan2(b, c) / q) * q;
        return { x: n + l * Math.cos(q), y: d + l * Math.sin(q), a: q };
    };
    svgedit.math.rectsIntersect = function(n, d) {
        if (!n || !d) return false;
        return (
            d.x < n.x + n.width &&
            d.x + d.width > n.x &&
            d.y < n.y + n.height &&
            d.y + d.height > n.y
        );
    };
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.units) svgedit.units = {};
    var a = ["x", "x1", "cx", "rx", "width"],
        n = ["y", "y1", "cy", "ry", "height"],
        d = $.merge(["r", "radius"], a);
    $.merge(d, n);
    var c,
        l = { px: 1 };
    svgedit.units.init = function(b) {
        c = b;
        b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        document.body.appendChild(b);
        var k = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        k.setAttribute("width", "1em");
        k.setAttribute("height", "1ex");
        k.setAttribute("x", "1in");
        b.appendChild(k);
        k = k.getBBox();
        document.body.removeChild(b);
        b = k.x;
        l.em = k.width;
        l.ex = k.height;
        l["in"] = b;
        l.cm = b / 2.54;
        l.mm = b / 25.4;
        l.pt = b / 72;
        l.pc = b / 6;
        l["%"] = 0;
    };
    svgedit.units.getTypeMap = function() {
        return l;
    };
    svgedit.units.shortFloat = function(b) {
        var k = c.getRoundDigits();
        if (isNaN(b)) {
            if ($.isArray(b))
                return (
                    svgedit.units.shortFloat(b[0]) + "," + svgedit.units.shortFloat(b[1])
                );
        } else return +(+b).toFixed(k);
        return parseFloat(b).toFixed(k) - 0;
    };
    svgedit.units.convertUnit = function(b, k) {
        k = k || c.getBaseUnit();
        return svgedit.unit.shortFloat(b / l[k]);
    };
    svgedit.units.setUnitAttr = function(b, k, e) {
        isNaN(e) || b.getAttribute(k);
        b.setAttribute(k, e);
    };
    var q = {
        line: ["x1", "x2", "y1", "y2"],
        circle: ["cx", "cy", "r"],
        ellipse: ["cx", "cy", "rx", "ry"],
        foreignObject: ["x", "y", "width", "height"],
        rect: ["x", "y", "width", "height"],
        image: ["x", "y", "width", "height"],
        use: ["x", "y", "width", "height"],
        text: ["x", "y"],
    };
    svgedit.units.convertAttrs = function(b) {
        var k = b.tagName,
            e = c.getBaseUnit();
        if ((k = q[k]))
            for (var p = k.length, A = 0; A < p; A++) {
                var C = k[A],
                    v = b.getAttribute(C);
                if (v) isNaN(v) || b.setAttribute(C, v / l[e] + e);
            }
    };
    svgedit.units.convertToNum = function(b, k) {
        if (!isNaN(k)) return k - 0;
        if (k.substr(-1) === "%") {
            var e = k.substr(0, k.length - 1) / 100,
                p = c.getWidth(),
                A = c.getHeight();
            return a.indexOf(b) >= 0 ?
                e * p :
                n.indexOf(b) >= 0 ?
                e * A :
                (e * Math.sqrt(p * p + A * A)) / Math.sqrt(2);
        } else {
            p = k.substr(-2);
            e = k.substr(0, k.length - 2);
            return e * l[p];
        }
    };
    svgedit.units.isValidUnit = function(b, k, e) {
        var p = false;
        if (d.indexOf(b) >= 0)
            if (isNaN(k)) {
                k = k.toLowerCase();
                $.each(l, function(v) {
                    if (!p)
                        if (RegExp("^-?[\\d\\.]+" + v + "$").test(k)) p = true;
                });
            } else p = true;
        else if (b == "id") {
            b = false;
            try {
                var A = c.getElement(k);
                b = A == null || A === e;
            } catch (C) {}
            return b;
        } else p = true;
        return p;
    };
})();
svgedit = svgedit || {};
(function() {
    function a(b) {
        if (svgedit.browser.supportsHVLineContainerBBox())
            try {
                return b.getBBox();
            } catch (k) {}
        var e = $.data(b, "ref"),
            p = null;
        if (e) {
            var A = $(e).children().clone().attr("visibility", "hidden");
            $(q).append(A);
            p = A.filter("line, path");
        } else p = $(b).find("line, path");
        var C = false;
        if (p.length) {
            p.each(function() {
                var v = this.getBBox();
                if (!v.width || !v.height) C = true;
            });
            if (C) {
                b = e ? A : $(b).children();
                ret = getStrokedBBox(b);
            } else ret = b.getBBox();
        } else ret = b.getBBox();
        e && A.remove();
        return ret;
    }
    if (!svgedit.utilities) svgedit.utilities = {};
    var n = "a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use".split(
            ","
        ),
        d = null,
        c = null,
        l = null,
        q = null;
    svgedit.utilities.init = function(b) {
        d = b;
        c = b.getDOMDocument();
        l = b.getDOMContainer();
        q = b.getSVGRoot();
    };
    svgedit.utilities.toXml = function(b) {
        return $("<p/>").text(b).html();
    };
    svgedit.utilities.fromXml = function(b) {
        return $("<p/>").html(b).text();
    };
    svgedit.utilities.encode64 = function(b) {
        b = svgedit.utilities.convertToXMLReferences(b);
        if (window.btoa) return window.btoa(b);
        var k = Array(Math.floor((b.length + 2) / 3) * 4),
            e,
            p,
            A,
            C,
            v,
            K,
            O = 0,
            L = 0;
        do {
            e = b.charCodeAt(O++);
            p = b.charCodeAt(O++);
            A = b.charCodeAt(O++);
            C = e >> 2;
            e = ((e & 3) << 4) | (p >> 4);
            v = ((p & 15) << 2) | (A >> 6);
            K = A & 63;
            if (isNaN(p)) v = K = 64;
            else if (isNaN(A)) K = 64;
            k[
                L++
            ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                C
            );
            k[
                L++
            ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                e
            );
            k[
                L++
            ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                v
            );
            k[
                L++
            ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                K
            );
        } while (O < b.length);
        return k.join("");
    };
    svgedit.utilities.decode64 = function(b) {
        if (window.atob) return window.atob(b);
        var k = "",
            e,
            p,
            A = "",
            C,
            v = "",
            K = 0;
        b = b.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(K++)
            );
            p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(K++)
            );
            C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(K++)
            );
            v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(K++)
            );
            e = (e << 2) | (p >> 4);
            p = ((p & 15) << 4) | (C >> 2);
            A = ((C & 3) << 6) | v;
            k += String.fromCharCode(e);
            if (C != 64) k += String.fromCharCode(p);
            if (v != 64) k += String.fromCharCode(A);
        } while (K < b.length);
        return unescape(k);
    };
    svgedit.utilities.convertToXMLReferences = function(b) {
        for (var k = "", e = 0; e < b.length; e++) {
            var p = b.charCodeAt(e);
            if (p < 128) k += b[e];
            else if (p > 127) k += "&#" + p + ";";
        }
        return k;
    };
    svgedit.utilities.text2xml = function(b) {
        if (b.indexOf("<svg:svg") >= 0)
            b = b.replace(/<(\/?)svg:/g, "<$1").replace("xmlns:svg", "xmlns");
        var k;
        try {
            var e = window.DOMParser ?
                new DOMParser() :
                new ActiveXObject("Microsoft.XMLDOM");
            e.async = false;
        } catch (p) {
            throw Error("XML Parser could not be instantiated");
        }
        try {
            k = e.loadXML ?
                e.loadXML(b) ?
                e :
                false :
                e.parseFromString(b, "text/xml");
        } catch (A) {
            throw Error("Error parsing XML string");
        }
        return k;
    };
    svgedit.utilities.bboxToObj = function(b) {
        return { x: b.x, y: b.y, width: b.width, height: b.height };
    };
    svgedit.utilities.walkTree = function(b, k) {
        if (b && b.nodeType == 1) {
            k(b);
            for (var e = b.childNodes.length; e--;)
                svgedit.utilities.walkTree(b.childNodes.item(e), k);
        }
    };
    svgedit.utilities.walkTreePost = function(b, k) {
        if (b && b.nodeType == 1) {
            for (var e = b.childNodes.length; e--;)
                svgedit.utilities.walkTree(b.childNodes.item(e), k);
            k(b);
        }
    };
    svgedit.utilities.getUrlFromAttr = function(b) {
        if (b)
            if (b.indexOf('url("') === 0) return b.substring(5, b.indexOf('"', 6));
            else if (b.indexOf("url('") === 0)
            return b.substring(5, b.indexOf("'", 6));
        else if (b.indexOf("url(") === 0) return b.substring(4, b.indexOf(")"));
        return null;
    };
    svgedit.utilities.getHref = function(b) {
        if (b) return b.getAttributeNS("http://www.w3.org/1999/xlink", "href");
    };
    svgedit.utilities.setHref = function(b, k) {
        b.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", k);
    };
    svgedit.utilities.findDefs = function(b) {
        b = d.getSVGContent().documentElement;
        var k = b.getElementsByTagNameNS("http://www.w3.org/2000/svg", "defs");
        return (k =
            k.length > 0 ?
            k[0] :
            b.insertBefore(
                b.ownerDocument.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "defs"
                ),
                b.firstChild.nextSibling
            ));
    };
    svgedit.utilities.getPathBBox = function(b) {
        var k = b.pathSegList,
            e = k.numberOfItems;
        b = [
            [],
            []
        ];
        var p = k.getItem(0),
            A = [p.x, p.y];
        for (p = 0; p < e; p++) {
            var C = k.getItem(p);
            if (typeof C.x != "undefined") {
                b[0].push(A[0]);
                b[1].push(A[1]);
                if (C.x1) {
                    for (
                        var v = [C.x1, C.y1], K = [C.x2, C.y2], O = [C.x, C.y], L = 0; L < 2; L++
                    ) {
                        C = function(ca) {
                            return (
                                Math.pow(1 - ca, 3) * A[L] +
                                3 * Math.pow(1 - ca, 2) * ca * v[L] +
                                3 * (1 - ca) * Math.pow(ca, 2) * K[L] +
                                Math.pow(ca, 3) * O[L]
                            );
                        };
                        var H = 6 * A[L] - 12 * v[L] + 6 * K[L],
                            V = -3 * A[L] + 9 * v[L] - 9 * K[L] + 3 * O[L],
                            R = 3 * v[L] - 3 * A[L];
                        if (V == 0) {
                            if (H != 0) {
                                H = -R / H;
                                0 < H && H < 1 && b[L].push(C(H));
                            }
                        } else {
                            R = Math.pow(H, 2) - 4 * R * V;
                            if (!(R < 0)) {
                                var N = (-H + Math.sqrt(R)) / (2 * V);
                                0 < N && N < 1 && b[L].push(C(N));
                                H = (-H - Math.sqrt(R)) / (2 * V);
                                0 < H && H < 1 && b[L].push(C(H));
                            }
                        }
                    }
                    A = O;
                } else {
                    b[0].push(C.x);
                    b[1].push(C.y);
                }
            }
        }
        k = Math.min.apply(null, b[0]);
        e = Math.max.apply(null, b[0]) - k;
        p = Math.min.apply(null, b[1]);
        b = Math.max.apply(null, b[1]) - p;
        return { x: k, y: p, width: e, height: b };
    };
    svgedit.utilities.getBBox = function(b) {
        var k = b || d.getSelectedElements()[0];
        if (b.nodeType != 1) return null;
        b = null;
        var e = k.nodeName;
        switch (e) {
            case "text":
                if (k.textContent === "") {
                    k.textContent = "a";
                    b = k.getBBox();
                    k.textContent = "";
                } else
                    try {
                        b = k.getBBox();
                    } catch (p) {}
                break;
            case "path":
                if (svgedit.browser.supportsPathBBox())
                    try {
                        b = k.getBBox();
                    } catch (A) {}
                else b = svgedit.utilities.getPathBBox(k);
                break;
            case "g":
            case "a":
                b = a(k);
                break;
            default:
                if (e === "use") b = a(k, true);
                if (e === "use") b || (b = k.getBBox());
                else if (~n.indexOf(e))
                    try {
                        b = k.getBBox();
                    } catch (C) {
                        k = $(k).closest("foreignObject");
                        if (k.length)
                            try {
                                b = k[0].getBBox();
                            } catch (v) {
                                b = null;
                            }
                        else b = null;
                    }
        }
        if (b) b = svgedit.utilities.bboxToObj(b);
        return b;
    };
    svgedit.utilities.getRotationAngle = function(b, k) {
        var e = b || d.getSelectedElements()[0];
        e = svgedit.transformlist.getTransformList(e);
        if (!e) return 0;
        for (var p = e.numberOfItems, A = 0; A < p; ++A) {
            var C = e.getItem(A);
            if (C.type == 4) return k ? (C.angle * Math.PI) / 180 : C.angle;
        }
        return 0;
    };
    svgedit.utilities.getElem = svgedit.browser.supportsSelectors() ?

        function(b) {
            return q.querySelector("#" + b);
        } :
        svgedit.browser.supportsXpath() ?

        function(b) {
            return c.evaluate(
                'svg:svg[@id="svgroot"]//svg:*[@id="' + b + '"]',
                l,
                function() {
                    return "http://www.w3.org/2000/svg";
                },
                9,
                null
            ).singleNodeValue;
        } :
        function(b) {
            return $(q).find("[id=" + b + "]")[0];
        };
    svgedit.utilities.assignAttributes = function(b, k, e, p) {
        for (var A in k)
            if (
                (e =
                    A.substr(0, 4) === "xml:" ?
                    "http://www.w3.org/XML/1998/namespace" :
                    A.substr(0, 6) === "xlink:" ?
                    "http://www.w3.org/1999/xlink" :
                    null)
            )
                b.setAttributeNS(e, A, k[A]);
            else p ? svgedit.units.setUnitAttr(b, A, k[A]) : b.setAttribute(A, k[A]);
    };
    svgedit.utilities.cleanupElement = function(b) {
        var k = {
                "fill-opacity": 1,
                "stop-opacity": 1,
                opacity: 1,
                stroke: "none",
                "stroke-dasharray": "none",
                "stroke-linejoin": "miter",
                "stroke-linecap": "butt",
                "stroke-opacity": 1,
                "stroke-width": 1,
                rx: 0,
                ry: 0,
            },
            e;
        for (e in k) {
            var p = k[e];
            b.getAttribute(e) == p && b.removeAttribute(e);
        }
    };
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.sanitize) svgedit.sanitize = {};
    var a = {};
    a["http://www.w3.org/1999/xlink"] = "xlink";
    a["http://www.w3.org/XML/1998/namespace"] = "xml";
    a["http://www.w3.org/2000/xmlns/"] = "xmlns";
    a["http://svg-edit.googlecode.com"] = "se";
    a["http://www.w3.org/1999/xhtml"] = "xhtml";
    a["http://www.w3.org/1998/Math/MathML"] = "mathml";
    var n = {};
    $.each(a, function(l, q) {
        n[q] = l;
    });
    var d = {
            a: [
                "class",
                "clip-path",
                "clip-rule",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "id",
                "mask",
                "opacity",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
                "xlink:href",
                "xlink:title",
            ],
            circle: [
                "class",
                "clip-path",
                "clip-rule",
                "cx",
                "cy",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "id",
                "mask",
                "opacity",
                "r",
                "requiredFeatures",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
            ],
            clipPath: ["class", "clipPathUnits", "id"],
            defs: [],
            style: ["type"],
            desc: [],
            ellipse: [
                "class",
                "clip-path",
                "clip-rule",
                "cx",
                "cy",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "id",
                "mask",
                "opacity",
                "requiredFeatures",
                "rx",
                "ry",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
            ],
            feGaussianBlur: [
                "class",
                "color-interpolation-filters",
                "id",
                "requiredFeatures",
                "stdDeviation",
            ],
            filter: [
                "class",
                "color-interpolation-filters",
                "filterRes",
                "filterUnits",
                "height",
                "id",
                "primitiveUnits",
                "requiredFeatures",
                "width",
                "x",
                "xlink:href",
                "y",
            ],
            foreignObject: [
                "class",
                "font-size",
                "height",
                "id",
                "opacity",
                "requiredFeatures",
                "style",
                "transform",
                "width",
                "x",
                "y",
            ],
            g: [
                "class",
                "clip-path",
                "clip-rule",
                "id",
                "display",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "mask",
                "opacity",
                "requiredFeatures",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
                "font-family",
                "font-size",
                "font-style",
                "font-weight",
                "text-anchor",
                "data-locked",
            ],
            image: [
                "class",
                "clip-path",
                "clip-rule",
                "filter",
                "height",
                "id",
                "mask",
                "opacity",
                "requiredFeatures",
                "style",
                "systemLanguage",
                "transform",
                "width",
                "x",
                "xlink:href",
                "xlink:title",
                "y",
            ],
            line: [
                "shape-rendering",
                "class",
                "clip-path",
                "clip-rule",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "id",
                "marker-end",
                "marker-mid",
                "marker-start",
                "mask",
                "opacity",
                "requiredFeatures",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
                "x1",
                "x2",
                "y1",
                "y2",
            ],
            linearGradient: [
                "class",
                "id",
                "gradientTransform",
                "gradientUnits",
                "requiredFeatures",
                "spreadMethod",
                "systemLanguage",
                "x1",
                "x2",
                "xlink:href",
                "y1",
                "y2",
            ],
            marker: [
                "id",
                "class",
                "markerHeight",
                "markerUnits",
                "markerWidth",
                "orient",
                "preserveAspectRatio",
                "refX",
                "refY",
                "systemLanguage",
                "viewBox",
            ],
            mask: [
                "class",
                "height",
                "id",
                "maskContentUnits",
                "maskUnits",
                "width",
                "x",
                "y",
            ],
            metadata: ["class", "id"],
            path: [
                "class",
                "clip-path",
                "clip-rule",
                "d",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "id",
                "marker-end",
                "marker-mid",
                "marker-start",
                "mask",
                "opacity",
                "requiredFeatures",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
            ],
            pattern: [
                "class",
                "height",
                "id",
                "patternContentUnits",
                "patternTransform",
                "patternUnits",
                "requiredFeatures",
                "style",
                "systemLanguage",
                "viewBox",
                "width",
                "x",
                "xlink:href",
                "y",
            ],
            polygon: [
                "class",
                "clip-path",
                "clip-rule",
                "id",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "id",
                "class",
                "marker-end",
                "marker-mid",
                "marker-start",
                "mask",
                "opacity",
                "points",
                "requiredFeatures",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
            ],
            polyline: [
                "class",
                "clip-path",
                "clip-rule",
                "id",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "marker-end",
                "marker-mid",
                "marker-start",
                "mask",
                "opacity",
                "points",
                "requiredFeatures",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
            ],
            radialGradient: [
                "class",
                "cx",
                "cy",
                "fx",
                "fy",
                "gradientTransform",
                "gradientUnits",
                "id",
                "r",
                "requiredFeatures",
                "spreadMethod",
                "systemLanguage",
                "xlink:href",
            ],
            rect: [
                "shape-rendering",
                "class",
                "clip-path",
                "clip-rule",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "height",
                "id",
                "mask",
                "opacity",
                "requiredFeatures",
                "rx",
                "ry",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
                "width",
                "x",
                "y",
            ],
            stop: [
                "class",
                "id",
                "offset",
                "requiredFeatures",
                "stop-color",
                "stop-opacity",
                "style",
                "systemLanguage",
            ],
            svg: [
                "class",
                "clip-path",
                "clip-rule",
                "filter",
                "id",
                "height",
                "mask",
                "preserveAspectRatio",
                "requiredFeatures",
                "style",
                "systemLanguage",
                "viewBox",
                "width",
                "x",
                "xmlns",
                "xmlns:se",
                "xmlns:xlink",
                "y",
            ],
            switch: ["class", "id", "requiredFeatures", "systemLanguage"],
            symbol: [
                "class",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "font-family",
                "font-size",
                "font-style",
                "font-weight",
                "id",
                "opacity",
                "preserveAspectRatio",
                "requiredFeatures",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "transform",
                "viewBox",
            ],
            text: [
                "class",
                "clip-path",
                "clip-rule",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "font-family",
                "font-size",
                "font-style",
                "font-weight",
                "id",
                "mask",
                "opacity",
                "requiredFeatures",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "text-anchor",
                "transform",
                "x",
                "xml:space",
                "y",
            ],
            textPath: [
                "class",
                "id",
                "method",
                "requiredFeatures",
                "spacing",
                "startOffset",
                "style",
                "systemLanguage",
                "transform",
                "xlink:href",
            ],
            title: [],
            tspan: [
                "class",
                "clip-path",
                "clip-rule",
                "dx",
                "dy",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "font-family",
                "font-size",
                "font-style",
                "font-weight",
                "id",
                "mask",
                "opacity",
                "requiredFeatures",
                "rotate",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "systemLanguage",
                "text-anchor",
                "textLength",
                "transform",
                "x",
                "xml:space",
                "y",
            ],
            use: [
                "class",
                "clip-path",
                "clip-rule",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "height",
                "id",
                "mask",
                "stroke",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke-width",
                "style",
                "transform",
                "width",
                "x",
                "xlink:href",
                "y",
            ],
            annotation: ["encoding"],
            "annotation-xml": ["encoding"],
            maction: ["actiontype", "other", "selection"],
            math: ["class", "id", "display", "xmlns"],
            menclose: ["notation"],
            merror: [],
            mfrac: ["linethickness"],
            mi: ["mathvariant"],
            mmultiscripts: [],
            mn: [],
            mo: ["fence", "lspace", "maxsize", "minsize", "rspace", "stretchy"],
            mover: [],
            mpadded: ["lspace", "width", "height", "depth", "voffset"],
            mphantom: [],
            mprescripts: [],
            mroot: [],
            mrow: ["xlink:href", "xlink:type", "xmlns:xlink"],
            mspace: ["depth", "height", "width"],
            msqrt: [],
            mstyle: [
                "displaystyle",
                "mathbackground",
                "mathcolor",
                "mathvariant",
                "scriptlevel",
            ],
            msub: [],
            msubsup: [],
            msup: [],
            mtable: [
                "align",
                "columnalign",
                "columnlines",
                "columnspacing",
                "displaystyle",
                "equalcolumns",
                "equalrows",
                "frame",
                "rowalign",
                "rowlines",
                "rowspacing",
                "width",
            ],
            mtd: ["columnalign", "columnspan", "rowalign", "rowspan"],
            mtext: [],
            mtr: ["columnalign", "rowalign"],
            munder: [],
            munderover: [],
            none: [],
            semantics: [],
        },
        c = {};
    $.each(d, function(l, q) {
        var b = {};
        $.each(q, function(k, e) {
            if (e.indexOf(":") >= 0) {
                var p = e.split(":");
                b[p[1]] = n[p[0]];
            } else b[e] = e == "xmlns" ? "http://www.w3.org/2000/xmlns/" : null;
        });
        c[l] = b;
    });
    svgedit.sanitize.getNSMap = function() {
        return a;
    };
    svgedit.sanitize.sanitizeSvg = function(l) {
        if (l.nodeType == 3) {
            l.nodeValue = l.nodeValue.replace(/^\s+|\s+$/g, "");
            l.nodeValue.length || l.parentNode.removeChild(l);
        }
        if (l.nodeType == 1) {
            var q = l.parentNode;
            if (l.ownerDocument && q) {
                var b = d[l.nodeName],
                    k = c[l.nodeName];
                if (b != undefined) {
                    for (var e = [], p = l.attributes.length; p--;) {
                        var A = l.attributes.item(p),
                            C = A.nodeName,
                            v = A.localName,
                            K = A.namespaceURI;
                        if (!(
                                k.hasOwnProperty(v) &&
                                K == k[v] &&
                                K != "http://www.w3.org/2000/xmlns/"
                            ) &&
                            !(K == "http://www.w3.org/2000/xmlns/" && a[A.nodeValue])
                        ) {
                            C.indexOf("se:") == 0 && e.push([C, A.nodeValue]);
                            l.removeAttributeNS(K, v);
                        }
                        if (svgedit.browser.isGecko())
                            switch (C) {
                                case "transform":
                                case "gradientTransform":
                                case "patternTransform":
                                    v = A.nodeValue.replace(/(\d)-/g, "$1 -");
                                    l.setAttribute(C, v);
                            }
                        if (C == "style") {
                            A = A.nodeValue.split(";");
                            for (C = A.length; C--;) {
                                v = A[C].split(":");
                                b.indexOf(v[0]) >= 0 && l.setAttribute(v[0], v[1]);
                            }
                            l.removeAttribute("style");
                        }
                    }
                    $.each(e, function(O, L) {
                        l.setAttributeNS("http://svg-edit.googlecode.com", L[0], L[1]);
                    });
                    if (
                        (p = svgedit.utilities.getHref(l)) && [
                            "filter",
                            "linearGradient",
                            "pattern",
                            "radialGradient",
                            "textPath",
                            "use",
                        ].indexOf(l.nodeName) >= 0
                    )
                        if (p[0] != "#") {
                            svgedit.utilities.setHref(l, "");
                            l.removeAttributeNS("http://www.w3.org/1999/xlink", "href");
                        }
                    if (l.nodeName == "use" && !svgedit.utilities.getHref(l))
                        q.removeChild(l);
                    else {
                        $.each(
                            [
                                "clip-path",
                                "fill",
                                "filter",
                                "marker-end",
                                "marker-mid",
                                "marker-start",
                                "mask",
                                "stroke",
                            ],
                            function(O, L) {
                                var H = l.getAttribute(L);
                                if (H)
                                    if (
                                        (H = svgedit.utilities.getUrlFromAttr(H)) &&
                                        H[0] !== "#"
                                    ) {
                                        l.setAttribute(L, "");
                                        l.removeAttribute(L);
                                    }
                            }
                        );
                        for (p = l.childNodes.length; p--;)
                            svgedit.sanitize.sanitizeSvg(l.childNodes.item(p));
                    }
                } else {
                    for (b = []; l.hasChildNodes();)
                        b.push(q.insertBefore(l.firstChild, l));
                    q.removeChild(l);
                    for (p = b.length; p--;) svgedit.sanitize.sanitizeSvg(b[p]);
                }
            }
        }
    };
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.history) svgedit.history = {};
    svgedit.history.HistoryEventTypes = {
        BEFORE_APPLY: "before_apply",
        AFTER_APPLY: "after_apply",
        BEFORE_UNAPPLY: "before_unapply",
        AFTER_UNAPPLY: "after_unapply",
    };
    svgedit.history.MoveElementCommand = function(a, n, d, c) {
        this.elem = a;
        this.text = c ? "Move " + a.tagName + " to " + c : "Move " + a.tagName;
        this.oldNextSibling = n;
        this.oldParent = d;
        this.newNextSibling = a.nextSibling;
        this.newParent = a.parentNode;
    };
    svgedit.history.MoveElementCommand.type = function() {
        return "svgedit.history.MoveElementCommand";
    };
    svgedit.history.MoveElementCommand.prototype.type =
        svgedit.history.MoveElementCommand.type;
    svgedit.history.MoveElementCommand.prototype.getText = function() {
        return this.text;
    };
    svgedit.history.MoveElementCommand.prototype.apply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_APPLY,
                this
            );
        this.elem = this.newParent.insertBefore(this.elem, this.newNextSibling);
        a &&
            a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
    };
    svgedit.history.MoveElementCommand.prototype.unapply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,
                this
            );
        this.elem = this.oldParent.insertBefore(this.elem, this.oldNextSibling);
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,
                this
            );
    };
    svgedit.history.MoveElementCommand.prototype.elements = function() {
        return [this.elem];
    };
    svgedit.history.InsertElementCommand = function(a, n) {
        this.elem = a;
        this.text = n || "Create " + a.tagName;
        this.parent = a.parentNode;
        this.nextSibling = this.elem.nextSibling;
    };
    svgedit.history.InsertElementCommand.type = function() {
        return "svgedit.history.InsertElementCommand";
    };
    svgedit.history.InsertElementCommand.prototype.type =
        svgedit.history.InsertElementCommand.type;
    svgedit.history.InsertElementCommand.prototype.getText = function() {
        return this.text;
    };
    svgedit.history.InsertElementCommand.prototype.apply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_APPLY,
                this
            );
        this.elem = this.parent.insertBefore(this.elem, this.nextSibling);
        a &&
            a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
    };
    svgedit.history.InsertElementCommand.prototype.unapply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,
                this
            );
        this.parent = this.elem.parentNode;
        this.elem = this.elem.parentNode.removeChild(this.elem);
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,
                this
            );
    };
    svgedit.history.InsertElementCommand.prototype.elements = function() {
        return [this.elem];
    };
    svgedit.history.RemoveElementCommand = function(a, n, d, c) {
        this.elem = a;
        this.text = c || "Delete " + a.tagName;
        this.nextSibling = n;
        this.parent = d;
        svgedit.transformlist.removeElementFromListMap(a);
    };
    svgedit.history.RemoveElementCommand.type = function() {
        return "svgedit.history.RemoveElementCommand";
    };
    svgedit.history.RemoveElementCommand.prototype.type =
        svgedit.history.RemoveElementCommand.type;
    svgedit.history.RemoveElementCommand.prototype.getText = function() {
        return this.text;
    };
    svgedit.history.RemoveElementCommand.prototype.apply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_APPLY,
                this
            );
        svgedit.transformlist.removeElementFromListMap(this.elem);
        this.parent = this.elem.parentNode;
        this.elem = this.parent.removeChild(this.elem);
        a &&
            a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
    };
    svgedit.history.RemoveElementCommand.prototype.unapply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,
                this
            );
        svgedit.transformlist.removeElementFromListMap(this.elem);
        this.nextSibling == null &&
            window.console &&
            console.log("Error: reference element was lost");
        this.parent.insertBefore(this.elem, this.nextSibling);
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,
                this
            );
    };
    svgedit.history.RemoveElementCommand.prototype.elements = function() {
        return [this.elem];
    };
    svgedit.history.ChangeElementCommand = function(a, n, d) {
        this.elem = a;
        this.text = d ? "Change " + a.tagName + " " + d : "Change " + a.tagName;
        this.newValues = {};
        this.oldValues = n;
        for (var c in n)
            this.newValues[c] =
            c == "#text" ?
            a.textContent :
            c == "#href" ?
            svgedit.utilities.getHref(a) :
            a.getAttribute(c);
    };
    svgedit.history.ChangeElementCommand.type = function() {
        return "svgedit.history.ChangeElementCommand";
    };
    svgedit.history.ChangeElementCommand.prototype.type =
        svgedit.history.ChangeElementCommand.type;
    svgedit.history.ChangeElementCommand.prototype.getText = function() {
        return this.text;
    };
    svgedit.history.ChangeElementCommand.prototype.apply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_APPLY,
                this
            );
        var n = false,
            d;
        for (d in this.newValues) {
            if (this.newValues[d])
                if (d == "#text") this.elem.textContent = this.newValues[d];
                else
                    d == "#href" ?
                    svgedit.utilities.setHref(this.elem, this.newValues[d]) :
                    this.elem.setAttribute(d, this.newValues[d]);
            else if (d == "#text") this.elem.textContent = "";
            else {
                this.elem.setAttribute(d, "");
                this.elem.removeAttribute(d);
            }
            if (d == "transform") n = true;
        }
        if (!n)
            if ((n = svgedit.utilities.getRotationAngle(this.elem))) {
                d = elem.getBBox();
                n = [
                    "rotate(",
                    n,
                    " ",
                    d.x + d.width / 2,
                    ",",
                    d.y + d.height / 2,
                    ")",
                ].join("");
                n != elem.getAttribute("transform") &&
                    elem.setAttribute("transform", n);
            }
        a &&
            a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
        return true;
    };
    svgedit.history.ChangeElementCommand.prototype.unapply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,
                this
            );
        var n = false,
            d;
        for (d in this.oldValues) {
            if (this.oldValues[d])
                if (d == "#text") this.elem.textContent = this.oldValues[d];
                else
                    d == "#href" ?
                    svgedit.utilities.setHref(this.elem, this.oldValues[d]) :
                    this.elem.setAttribute(d, this.oldValues[d]);
            else if (d == "#text") this.elem.textContent = "";
            else this.elem.removeAttribute(d);
            if (d == "transform") n = true;
        }
        if (!n)
            if ((n = svgedit.utilities.getRotationAngle(this.elem))) {
                d = this.elem.getBBox();
                n = [
                    "rotate(",
                    n,
                    " ",
                    d.x + d.width / 2,
                    ",",
                    d.y + d.height / 2,
                    ")",
                ].join("");
                n != this.elem.getAttribute("transform") &&
                    this.elem.setAttribute("transform", n);
            }
        svgedit.transformlist.removeElementFromListMap(this.elem);
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,
                this
            );
        return true;
    };
    svgedit.history.ChangeElementCommand.prototype.elements = function() {
        return [this.elem];
    };
    svgedit.history.BatchCommand = function(a) {
        this.text = a || "Batch Command";
        this.stack = [];
    };
    svgedit.history.BatchCommand.type = function() {
        return "svgedit.history.BatchCommand";
    };
    svgedit.history.BatchCommand.prototype.type =
        svgedit.history.BatchCommand.type;
    svgedit.history.BatchCommand.prototype.getText = function() {
        return this.text;
    };
    svgedit.history.BatchCommand.prototype.apply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_APPLY,
                this
            );
        for (var n = this.stack.length, d = 0; d < n; ++d) this.stack[d].apply(a);
        a &&
            a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
    };
    svgedit.history.BatchCommand.prototype.unapply = function(a) {
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,
                this
            );
        for (var n = this.stack.length - 1; n >= 0; n--) this.stack[n].unapply(a);
        a &&
            a.handleHistoryEvent(
                svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,
                this
            );
    };
    svgedit.history.BatchCommand.prototype.elements = function() {
        for (var a = [], n = this.stack.length; n--;)
            for (var d = this.stack[n].elements(), c = d.length; c--;)
                a.indexOf(d[c]) == -1 && a.push(d[c]);
        return a;
    };
    svgedit.history.BatchCommand.prototype.addSubCommand = function(a) {
        this.stack.push(a);
    };
    svgedit.history.BatchCommand.prototype.isEmpty = function() {
        return this.stack.length == 0;
    };
    svgedit.history.UndoManager = function(a) {
        this.handler_ = a || null;
        this.undoStackPointer = 0;
        this.undoStack = [];
        this.undoChangeStackPointer = -1;
        this.undoableChangeStack = [];
    };
    svgedit.history.UndoManager.prototype.resetUndoStack = function() {
        this.undoStack = [];
        this.undoStackPointer = 0;
    };
    svgedit.history.UndoManager.prototype.getUndoStackSize = function() {
        return this.undoStackPointer;
    };
    svgedit.history.UndoManager.prototype.getRedoStackSize = function() {
        return this.undoStack.length - this.undoStackPointer;
    };
    svgedit.history.UndoManager.prototype.getNextUndoCommandText = function() {
        return this.undoStackPointer > 0 ?
            this.undoStack[this.undoStackPointer - 1].getText() :
            "";
    };
    svgedit.history.UndoManager.prototype.getNextRedoCommandText = function() {
        return this.undoStackPointer < this.undoStack.length ?
            this.undoStack[this.undoStackPointer].getText() :
            "";
    };
    svgedit.history.UndoManager.prototype.undo = function() {
        this.undoStackPointer > 0 &&
            this.undoStack[--this.undoStackPointer].unapply(this.handler_);
    };
    svgedit.history.UndoManager.prototype.redo = function() {
        this.undoStackPointer < this.undoStack.length &&
            this.undoStack.length > 0 &&
            this.undoStack[this.undoStackPointer++].apply(this.handler_);
    };
    svgedit.history.UndoManager.prototype.addCommandToHistory = function(a) {
        if (
            this.undoStackPointer < this.undoStack.length &&
            this.undoStack.length > 0
        )
            this.undoStack = this.undoStack.splice(0, this.undoStackPointer);
        this.undoStack.push(a);
        this.undoStackPointer = this.undoStack.length;
    };
    svgedit.history.UndoManager.prototype.beginUndoableChange = function(a, n) {
        for (
            var d = ++this.undoChangeStackPointer,
                c = n.length,
                l = Array(c),
                q = Array(c); c--;

        ) {
            var b = n[c];
            if (b != null) {
                q[c] = b;
                l[c] = b.getAttribute(a);
            }
        }
        this.undoableChangeStack[d] = { attrName: a, oldValues: l, elements: q };
    };
    svgedit.history.UndoManager.prototype.finishUndoableChange = function() {
        for (
            var a = this.undoChangeStackPointer--,
                n = this.undoableChangeStack[a],
                d = n.elements.length,
                c = n.attrName,
                l = new svgedit.history.BatchCommand("Change " + c); d--;

        ) {
            var q = n.elements[d];
            if (q != null) {
                var b = {};
                b[c] = n.oldValues[d];
                b[c] != q.getAttribute(c) &&
                    l.addSubCommand(new svgedit.history.ChangeElementCommand(q, b, c));
            }
        }
        this.undoableChangeStack[a] = null;
        return l;
    };
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.select) svgedit.select = {};
    var a, n, d;
    svgedit.select.Selector = function(c, l) {
        this.id = c;
        this.selectedElement = l;
        this.locked = true;
        this.selectorGroup = a.createSVGElement({
            element: "g",
            attr: { id: "selectorGroup" + this.id },
        });
        this.selectorRect = this.selectorGroup.appendChild(
            a.createSVGElement({
                element: "path",
                attr: {
                    id: "selectedBox" + this.id,
                    fill: "none",
                    stroke: "#4F80FF",
                    "stroke-width": "1",
                    "shape-rendering": "crispEdges",
                    style: "pointer-events:none",
                },
            })
        );
        svgedit.browser.isTouch() &&
            this.selectorRect.setAttribute("stroke-opacity", 0.3);
        this.gripCoords = {
            nw: null,
            n: null,
            ne: null,
            e: null,
            se: null,
            s: null,
            sw: null,
            w: null,
        };
        this.reset(this.selectedElement);
    };
    svgedit.select.Selector.prototype.reset = function(c) {
        this.locked = true;
        this.selectedElement = c;
        this.resize();
        this.selectorGroup.setAttribute("display", "inline");
    };
    svgedit.select.Selector.prototype.updateGripCursors = function(c) {
        var l = [];
        c = Math.round(c / 45);
        if (c < 0) c += 8;
        for (var q in d.selectorGrips) l.push(q);
        for (; c > 0;) {
            l.push(l.shift());
            c--;
        }
        c = 0;
        for (q in d.selectorGrips) {
            d.selectorGrips[q].setAttribute("style", "cursor:" + l[c] + "-resize");
            c++;
        }
    };
    svgedit.select.Selector.prototype.showGrips = function(c) {
        d.selectorGripsGroup.setAttribute("display", c ? "inline" : "none");
        var l = this.selectedElement;
        this.hasGrips = c;
        if (l && c) {
            this.selectorGroup.appendChild(d.selectorGripsGroup);
            this.updateGripCursors(svgedit.utilities.getRotationAngle(l));
        }
    };
    svgedit.select.Selector.prototype.resize = function() {
        var c = this.selectorRect,
            l = d,
            q = l.selectorGrips,
            b = this.selectedElement,
            k = b.getAttribute("stroke-width"),
            e = a.currentZoom(),
            p = 1 / e;
        if (b.getAttribute("stroke") !== "none" && !isNaN(k)) p += k / 2;
        var A = b.tagName;
        if (A === "text") p += 2 / e;
        k = svgedit.transformlist.getTransformList(b);
        k = svgedit.math.transformListToTransform(k).matrix;
        k.e *= e;
        k.f *= e;
        var C = svgedit.utilities.getBBox(b);
        if (A === "g" && !$.data(b, "gsvg"))
            if ((A = a.getStrokedBBox(b.childNodes))) C = A;
        A = C.x;
        var v = C.y,
            K = C.width;
        C = C.height;
        p *= e;
        e = svgedit.math.transformBox(A * e, v * e, K * e, C * e, k);
        k = e.aabox;
        A = k.x - p;
        v = k.y - p;
        var O = k.width + p * 2;
        K = k.height + p * 2;
        k = A + O / 2;
        C = v + K / 2;
        if ((b = svgedit.utilities.getRotationAngle(b))) {
            A = a.svgRoot().createSVGTransform();
            A.setRotate(-b, k, C);
            A = A.matrix;
            e.tl = svgedit.math.transformPoint(e.tl.x, e.tl.y, A);
            e.tr = svgedit.math.transformPoint(e.tr.x, e.tr.y, A);
            e.bl = svgedit.math.transformPoint(e.bl.x, e.bl.y, A);
            e.br = svgedit.math.transformPoint(e.br.x, e.br.y, A);
            A = e.tl;
            O = A.x;
            K = A.y;
            var L = A.x,
                H = A.y;
            A = Math.min;
            v = Math.max;
            O = A(O, A(e.tr.x, A(e.bl.x, e.br.x))) - p;
            K = A(K, A(e.tr.y, A(e.bl.y, e.br.y))) - p;
            L = v(L, v(e.tr.x, v(e.bl.x, e.br.x))) + p;
            H = v(H, v(e.tr.y, v(e.bl.y, e.br.y))) + p;
            A = O;
            v = K;
            O = L - O;
            K = H - K;
        }
        c.setAttribute(
            "d",
            "M" +
            A +
            "," +
            v +
            " L" +
            (A + O) +
            "," +
            v +
            " " +
            (A + O) +
            "," +
            (v + K) +
            " " +
            A +
            "," +
            (v + K) +
            "z"
        );
        this.selectorGroup.setAttribute(
            "transform",
            b ? "rotate(" + [b, k, C].join(",") + ")" : ""
        );
        if (svgedit.browser.isTouch()) {
            A -= 15.75;
            v -= 15.75;
        } else {
            A -= 4;
            v -= 4;
        }
        this.gripCoords = {
            nw: [A, v].map(Math.round),
            ne: [A + O, v].map(Math.round),
            sw: [A, v + K].map(Math.round),
            se: [A + O, v + K].map(Math.round),
            n: [A + O / 2, v].map(Math.round),
            w: [A, v + K / 2].map(Math.round),
            e: [A + O, v + K / 2].map(Math.round),
            s: [A + O / 2, v + K].map(Math.round),
        };
        for (var V in this.gripCoords) {
            c = this.gripCoords[V];
            q[V].setAttribute("x", c[0]);
            q[V].setAttribute("y", c[1]);
        }
        this.rotateCoords = {
            nw: [A, v],
            ne: [A + O + 8, v],
            sw: [A, v + K + 8],
            se: [A + O + 8, v + K + 8],
        };
        for (V in this.rotateCoords) {
            c = this.rotateCoords[V];
            l.rotateGrips[V].setAttribute("cx", c[0]);
            l.rotateGrips[V].setAttribute("cy", c[1]);
        }
    };
    svgedit.select.SelectorManager = function() {
        this.rubberBandBox = this.selectorParentGroup = null;
        this.selectors = [];
        this.selectorMap = {};
        this.selectorGrips = {
            nw: null,
            n: null,
            ne: null,
            e: null,
            se: null,
            s: null,
            sw: null,
            w: null,
        };
        this.selectorGripsGroup = null;
        this.rotateGrips = { nw: null, ne: null, se: null, sw: null };
        this.initGroup();
    };
    svgedit.select.SelectorManager.prototype.initGroup = function() {
        this.selectorParentGroup &&
            this.selectorParentGroup.parentNode &&
            this.selectorParentGroup.parentNode.removeChild(this.selectorParentGroup);
        this.selectorParentGroup = a.createSVGElement({
            element: "g",
            attr: { id: "selectorParentGroup" },
        });
        this.selectorGripsGroup = a.createSVGElement({
            element: "g",
            attr: { display: "none" },
        });
        this.selectorParentGroup.appendChild(this.selectorGripsGroup);
        a.svgRoot().appendChild(this.selectorParentGroup);
        this.selectorMap = {};
        this.selectors = [];
        this.rubberBandBox = null;
        for (var c in this.rotateGrips) {
            var l = a.createSVGElement({
                element: "circle",
                attr: {
                    id: "selectorGrip_rotate_" + c,
                    fill: "#000",
                    r: 8,
                    stroke: "#000",
                    "fill-opacity": 0,
                    "stroke-opacity": 0,
                    "stroke-width": 0,
                    style: "cursor:url(" + n.imgPath + "rotate.png) 12 12, auto;",
                },
            });
            $.data(l, "dir", c);
            $.data(l, "type", "rotate");
            this.rotateGrips[c] = this.selectorGripsGroup.appendChild(l);
        }
        for (c in this.selectorGrips) {
            l = a.createSVGElement({
                element: "rect",
                attr: {
                    id: "selectorGrip_resize_" + c,
                    width: 8,
                    height: 8,
                    fill: "#4F80FF",
                    stroke: "rgba(0,0,0,0)",
                    "stroke-width": 1,
                    style: "cursor:" + c + "-resize",
                    "pointer-events": "all",
                },
            });
            if (svgedit.browser.isTouch()) {
                l.setAttribute("width", 30.5);
                l.setAttribute("height", 30.5);
                l.setAttribute("fill-opacity", 0.3);
            }
            $.data(l, "dir", c);
            $.data(l, "type", "resize");
            this.selectorGrips[c] = this.selectorGripsGroup.appendChild(l);
        }
        if (!$("#canvasBackground").length) {
            c = n.dimensions;
            c = a.createSVGElement({
                element: "svg",
                attr: {
                    id: "canvasBackground",
                    width: c[0],
                    height: c[1],
                    x: 0,
                    y: 0,
                    overflow: svgedit.browser.isWebkit() ? "none" : "visible",
                    style: "pointer-events:none",
                },
            });
            l = a.createSVGElement({
                element: "defs",
                attr: { id: "placeholder_defs" },
            });
            var q = a.createSVGElement({
                    element: "pattern",
                    attr: {
                        id: "checkerPattern",
                        patternUnits: "userSpaceOnUse",
                        x: 0,
                        y: 0,
                        width: 20,
                        height: 20,
                        viewBox: "0 0 10 10",
                    },
                }),
                b = a.createSVGElement({
                    element: "rect",
                    attr: { x: 0, y: 0, width: 10, height: 10, fill: "#fff" },
                }),
                k = a.createSVGElement({
                    element: "rect",
                    attr: { x: 0, y: 0, width: 5, height: 5, fill: "#eee" },
                }),
                e = a.createSVGElement({
                    element: "rect",
                    attr: { x: 5, y: 5, width: 5, height: 5, fill: "#eee" },
                }),
                p = a.createSVGElement({
                    element: "rect",
                    attr: {
                        width: "100%",
                        height: "100%",
                        x: 0,
                        y: 0,
                        "stroke-width": 1,
                        stroke: "#000",
                        fill: "url(#checkerPattern)",
                        style: "pointer-events:none",
                    },
                });
            c.appendChild(l);
            l.appendChild(q);
            q.appendChild(b);
            q.appendChild(k);
            q.appendChild(e);
            c.appendChild(p);
            a.svgRoot().insertBefore(c, a.svgContent());
        }
    };
    svgedit.select.SelectorManager.prototype.requestSelector = function(c) {
        if (c == null) return null;
        var l = this.selectors.length;
        if (typeof this.selectorMap[c.id] == "object") {
            this.selectorMap[c.id].locked = true;
            return this.selectorMap[c.id];
        }
        for (var q = 0; q < l; ++q)
            if (this.selectors[q] && !this.selectors[q].locked) {
                this.selectors[q].locked = true;
                this.selectors[q].reset(c);
                this.selectorMap[c.id] = this.selectors[q];
                return this.selectors[q];
            }
        this.selectors[l] = new svgedit.select.Selector(l, c);
        this.selectorParentGroup.appendChild(this.selectors[l].selectorGroup);
        this.selectorMap[c.id] = this.selectors[l];
        return this.selectors[l];
    };
    svgedit.select.SelectorManager.prototype.releaseSelector = function(c) {
        if (c != null)
            for (
                var l = this.selectors.length, q = this.selectorMap[c.id], b = 0; b < l;
                ++b
            )
                if (this.selectors[b] && this.selectors[b] == q) {
                    q.locked == false &&
                        console.log(
                            "WARNING! selector was released but was already unlocked"
                        );
                    delete this.selectorMap[c.id];
                    q.locked = false;
                    q.selectedElement = null;
                    q.showGrips(false);
                    try {
                        q.selectorGroup.setAttribute("display", "none");
                    } catch (k) {}
                    break;
                }
    };
    svgedit.select.SelectorManager.prototype.getRubberBandBox = function() {
        if (!this.rubberBandBox)
            this.rubberBandBox = this.selectorParentGroup.appendChild(
                a.createSVGElement({
                    element: "rect",
                    attr: {
                        id: "selectorRubberBand",
                        fill: "none",
                        stroke: "#666",
                        "stroke-width": 1,
                        "stroke-dasharray": "3,2",
                        display: "none",
                        style: "pointer-events:none",
                    },
                })
            );
        return this.rubberBandBox;
    };
    svgedit.select.init = function(c, l) {
        n = c;
        a = l;
        d = new svgedit.select.SelectorManager();
        a.createSVGElement({ element: "g", attr: { id: "hover_group" } });
    };
    svgedit.select.getSelectorManager = function() {
        return d;
    };
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.draw) svgedit.draw = {};
    var a = "a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use".split(
            ","
        ),
        n = { LET_DOCUMENT_DECIDE: 0, ALWAYS_RANDOMIZE: 1, NEVER_RANDOMIZE: 2 },
        d = n.LET_DOCUMENT_DECIDE;
    svgedit.draw.Layer = function(c, l) {
        this.name_ = c;
        this.group_ = l;
    };
    svgedit.draw.Layer.prototype.getName = function() {
        return this.name_;
    };
    svgedit.draw.Layer.prototype.getGroup = function() {
        return this.group_;
    };
    svgedit.draw.randomizeIds = function(c, l) {
        d = c == false ? n.NEVER_RANDOMIZE : n.ALWAYS_RANDOMIZE;
        if (d == n.ALWAYS_RANDOMIZE && !l.getNonce())
            l.setNonce(Math.floor(Math.random() * 100001));
        else d == n.NEVER_RANDOMIZE && l.getNonce() && l.clearNonce();
    };
    svgedit.draw.Drawing = function(c, l) {
        if (!c ||
            !c.tagName ||
            !c.namespaceURI ||
            c.tagName != "svg" ||
            c.namespaceURI != "http://www.w3.org/2000/svg"
        )
            throw "Error: svgedit.draw.Drawing instance initialized without a <svg> element";
        this.svgElem_ = c;
        this.obj_num = 0;
        this.idPrefix = l || "svg_";
        this.releasedNums = [];
        this.all_layers = [];
        this.current_layer = null;
        this.nonce_ = "";
        var q = this.svgElem_.getAttributeNS(
            "http://svg-edit.googlecode.com",
            "nonce"
        );
        if (q && d != n.NEVER_RANDOMIZE) this.nonce_ = q;
        else
            d == n.ALWAYS_RANDOMIZE &&
            this.setNonce(Math.floor(Math.random() * 100001));
    };
    svgedit.draw.Drawing.prototype.getElem_ = function(c) {
        return this.svgElem_.querySelector ?
            this.svgElem_.querySelector("#" + c) :
            $(this.svgElem_).find("[id=" + c + "]")[0];
    };
    svgedit.draw.Drawing.prototype.getSvgElem = function() {
        return this.svgElem_;
    };
    svgedit.draw.Drawing.prototype.getNonce = function() {
        return this.nonce_;
    };
    svgedit.draw.Drawing.prototype.setNonce = function(c) {
        this.svgElem_.setAttributeNS(
            "http://www.w3.org/2000/xmlns/",
            "xmlns:se",
            "http://svg-edit.googlecode.com"
        );
        this.svgElem_.setAttributeNS(
            "http://svg-edit.googlecode.com",
            "se:nonce",
            c
        );
        this.nonce_ = c;
    };
    svgedit.draw.Drawing.prototype.clearNonce = function() {
        this.nonce_ = "";
    };
    svgedit.draw.Drawing.prototype.getId = function() {
        return this.nonce_ ?
            this.idPrefix + this.nonce_ + "_" + this.obj_num :
            this.idPrefix + this.obj_num;
    };
    svgedit.draw.Drawing.prototype.getNextId = function() {
        var c = this.obj_num,
            l = false;
        if (this.releasedNums.length > 0) {
            this.obj_num = this.releasedNums.pop();
            l = true;
        } else this.obj_num++;
        for (var q = this.getId(); this.getElem_(q);) {
            if (l) {
                this.obj_num = c;
                l = false;
            }
            this.obj_num++;
            q = this.getId();
        }
        if (l) this.obj_num = c;
        return q;
    };
    svgedit.draw.Drawing.prototype.releaseId = function(c) {
        var l = this.idPrefix + (this.nonce_ ? this.nonce_ + "_" : "");
        if (typeof c != "string" || c.indexOf(l) != 0) return false;
        c = parseInt(c.substr(l.length));
        if (typeof c != "number" || c <= 0 || this.releasedNums.indexOf(c) != -1)
            return false;
        this.releasedNums.push(c);
        return true;
    };
    svgedit.draw.Drawing.prototype.getNumLayers = function() {
        return this.all_layers.length;
    };
    svgedit.draw.Drawing.prototype.hasLayer = function(c) {
        for (var l = 0; l < this.getNumLayers(); l++)
            if (this.all_layers[l][0] == c) return true;
        return false;
    };
    svgedit.draw.Drawing.prototype.getLayerName = function(c) {
        if (c >= 0 && c < this.getNumLayers()) return this.all_layers[c][0];
        return "";
    };
    svgedit.draw.Drawing.prototype.getCurrentLayer = function() {
        return this.current_layer;
    };
    svgedit.draw.Drawing.prototype.getCurrentLayerName = function() {
        for (var c = 0; c < this.getNumLayers(); ++c)
            if (this.all_layers[c][1] == this.current_layer)
                return this.getLayerName(c);
        return "";
    };
    svgedit.draw.Drawing.prototype.setCurrentLayer = function(c) {
        for (var l = 0; l < this.getNumLayers(); ++l)
            if (c == this.getLayerName(l)) {
                if (this.current_layer != this.all_layers[l][1]) {
                    this.current_layer.setAttribute("style", "pointer-events:none");
                    this.current_layer = this.all_layers[l][1];
                    this.current_layer.setAttribute("style", "pointer-events:all");
                }
                return true;
            }
        return false;
    };
    svgedit.draw.Drawing.prototype.deleteCurrentLayer = function() {
        if (this.current_layer && this.getNumLayers() > 1) {
            var c = this.current_layer.parentNode.removeChild(this.current_layer);
            this.identifyLayers();
            return c;
        }
        return null;
    };
    svgedit.draw.Drawing.prototype.identifyLayers = function() {
        this.all_layers = [];
        for (
            var c = this.svgElem_.childNodes.length,
                l = [],
                q = [],
                b = null,
                k = false,
                e = 0; e < c;
            ++e
        ) {
            var p = this.svgElem_.childNodes.item(e);
            if (p && p.nodeType == 1)
                if (p.tagName == "g") {
                    k = true;
                    var A = $("title", p).text();
                    if (!A && svgedit.browser.isOpera() && p.querySelectorAll)
                        A = $(p.querySelectorAll("title")).text();
                    if (A) {
                        q.push(A);
                        this.all_layers.push([A, p]);
                        b = p;
                        svgedit.utilities.walkTree(p, function(C) {
                            C.setAttribute("style", "pointer-events:inherit");
                        });
                        b.setAttribute("style", "pointer-events:none");
                    } else l.push(p);
                } else if (~a.indexOf(p.nodeName)) {
                svgedit.utilities.getBBox(p);
                l.push(p);
            }
        }
        c = this.svgElem_.ownerDocument;
        if (l.length > 0 || !k) {
            for (e = 1; q.indexOf("Layer " + e) >= 0;) e++;
            q = "Layer " + e;
            b = c.createElementNS("http://www.w3.org/2000/svg", "g");
            k = c.createElementNS("http://www.w3.org/2000/svg", "title");
            k.textContent = q;
            b.appendChild(k);
            for (k = 0; k < l.length; ++k) b.appendChild(l[k]);
            this.svgElem_.appendChild(b);
            this.all_layers.push([q, b]);
        }
        svgedit.utilities.walkTree(b, function(C) {
            C.setAttribute("style", "pointer-events:inherit");
        });
        this.current_layer =
            b.getAttribute("data-locked") === "true" ?
            this.all_layers.slice(-2)[0][1] :
            b;
        this.current_layer.setAttribute("style", "pointer-events:all");
    };
    svgedit.draw.Drawing.prototype.createLayer = function(c) {
        var l = this.svgElem_.ownerDocument,
            q = l.createElementNS("http://www.w3.org/2000/svg", "g");
        l = l.createElementNS("http://www.w3.org/2000/svg", "title");
        l.textContent = c;
        q.appendChild(l);
        this.svgElem_.appendChild(q);
        this.identifyLayers();
        return q;
    };
    svgedit.draw.Drawing.prototype.getLayerVisibility = function(c) {
        for (var l = null, q = 0; q < this.getNumLayers(); ++q)
            if (this.getLayerName(q) == c) {
                l = this.all_layers[q][1];
                break;
            }
        if (!l) return false;
        return l.getAttribute("display") != "none";
    };
    svgedit.draw.Drawing.prototype.setLayerVisibility = function(c, l) {
        if (typeof l != "boolean") return null;
        for (var q = null, b = 0; b < this.getNumLayers(); ++b)
            if (this.getLayerName(b) == c) {
                q = this.all_layers[b][1];
                break;
            }
        if (!q) return null;
        q.getAttribute("display");
        q.setAttribute("display", l ? "inline" : "none");
        return q;
    };
    svgedit.draw.Drawing.prototype.getLayerOpacity = function(c) {
        for (var l = 0; l < this.getNumLayers(); ++l)
            if (this.getLayerName(l) == c) {
                (c = this.all_layers[l][1].getAttribute("opacity")) || (c = "1.0");
                return parseFloat(c);
            }
        return null;
    };
    svgedit.draw.Drawing.prototype.setLayerOpacity = function(c, l) {
        if (!(typeof l != "number" || l < 0 || l > 1))
            for (var q = 0; q < this.getNumLayers(); ++q)
                if (this.getLayerName(q) == c) {
                    this.all_layers[q][1].setAttribute("opacity", l);
                    break;
                }
    };
})();
svgedit = svgedit || {};
(function() {
    if (!svgedit.path) svgedit.path = {};
    var a = {
            2: ["x", "y"],
            4: ["x", "y"],
            6: ["x", "y", "x1", "y1", "x2", "y2"],
            8: ["x", "y", "x1", "y1"],
            10: ["x", "y", "r1", "r2", "angle", "largeArcFlag", "sweepFlag"],
            12: ["x"],
            14: ["y"],
            16: ["x", "y", "x2", "y2"],
            18: ["x", "y"],
        },
        n = [],
        d = false,
        c = {};
    svgedit.path.setLinkControlPoints = function(b) {
        d = b;
    };
    var l = (svgedit.path.path = null);
    svgedit.path.init = function(b) {
        l = b;
        n = [0, "ClosePath"];
        $.each(
            [
                "Moveto",
                "Lineto",
                "CurvetoCubic",
                "CurvetoQuadratic",
                "Arc",
                "LinetoHorizontal",
                "LinetoVertical",
                "CurvetoCubicSmooth",
                "CurvetoQuadraticSmooth",
            ],
            function(k, e) {
                n.push(e + "Abs");
                n.push(e + "Rel");
            }
        );
    };
    svgedit.path.insertItemBefore = function(b, k, e) {
        b.pathSegList.insertItemBefore(k, e);
    };
    svgedit.path.ptObjToArr = function(b, k) {
        for (var e = a[b], p = e.length, A = Array(p), C = 0; C < p; C++)
            A[C] = k[e[C]];
        return A;
    };
    svgedit.path.getGripPt = function(b, k) {
        var e = { x: k ? k.x : b.item.x, y: k ? k.y : b.item.y },
            p = b.path;
        if (p.matrix) e = svgedit.math.transformPoint(e.x, e.y, p.matrix);
        e.x *= l.getCurrentZoom();
        e.y *= l.getCurrentZoom();
        return e;
    };
    svgedit.path.getPointFromGrip = function(b, k) {
        var e = { x: b.x, y: b.y };
        if (k.matrix) {
            b = svgedit.math.transformPoint(e.x, e.y, k.imatrix);
            e.x = b.x;
            e.y = b.y;
        }
        e.x /= l.getCurrentZoom();
        e.y /= l.getCurrentZoom();
        return e;
    };
    svgedit.path.addPointGrip = function(b, k, e) {
        var p = svgedit.path.getGripContainer(),
            A = svgedit.utilities.getElem("pathpointgrip_" + b);
        if (!A) {
            A = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            svgedit.utilities.assignAttributes(A, {
                id: "pathpointgrip_" + b,
                display: "none",
                width: svgedit.browser.isTouch() ? 30 : 5,
                height: svgedit.browser.isTouch() ? 30 : 5,
                fill: "#fff",
                stroke: "#4F80FF",
                "shape-rendering": "crispEdges",
                "stroke-width": 1,
                cursor: "move",
                style: "pointer-events:all",
                "xlink:title": "Drag node to move it. Double-click node to change segment type",
            });
            A = p.appendChild(A);
            $("#pathpointgrip_" + b).dblclick(function() {
                svgedit.path.path && svgedit.path.path.setSegType();
            });
        }
        if (k && e)
            svgedit.utilities.assignAttributes(A, {
                x: k - (svgedit.browser.isTouch() ? 15 : 2.5),
                y: e - (svgedit.browser.isTouch() ? 15 : 2.5),
                display: "inline",
            });
        return A;
    };
    svgedit.path.getGripContainer = function() {
        var b = svgedit.utilities.getElem("pathpointgrip_container");
        if (!b) {
            b = svgedit.utilities
                .getElem("selectorParentGroup")
                .appendChild(
                    document.createElementNS("http://www.w3.org/2000/svg", "g")
                );
            b.id = "pathpointgrip_container";
        }
        return b;
    };
    svgedit.path.addCtrlGrip = function(b) {
        var k = svgedit.utilities.getElem("ctrlpointgrip_" + b);
        if (k) return k;
        k = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        svgedit.utilities.assignAttributes(k, {
            id: "ctrlpointgrip_" + b,
            display: "none",
            r: svgedit.browser.isTouch() ? 15 : 3,
            fill: "#4F80FF",
            stroke: "#4F80FF",
            "stroke-opacity": 0,
            "stroke-width": "3",
            cursor: "move",
            style: "pointer-events:all",
            "xlink:title": "Drag control point to adjust curve properties",
        });
        svgedit.path.getGripContainer().appendChild(k);
        return k;
    };
    svgedit.path.getCtrlLine = function(b) {
        var k = svgedit.utilities.getElem("ctrlLine_" + b);
        if (k) return k;
        k = document.createElementNS("http://www.w3.org/2000/svg", "line");
        svgedit.utilities.assignAttributes(k, {
            id: "ctrlLine_" + b,
            stroke: "#4F80FF",
            "stroke-width": 1,
            style: "pointer-events:none",
        });
        svgedit.path.getGripContainer().appendChild(k);
        return k;
    };
    svgedit.path.getPointGrip = function(b, k) {
        var e = svgedit.path.addPointGrip(b.index);
        if (k) {
            var p = svgedit.path.getGripPt(b);
            svgedit.utilities.assignAttributes(e, {
                x: p.x - (svgedit.browser.isTouch() ? 15 : 2.5),
                y: p.y - (svgedit.browser.isTouch() ? 15 : 2.5),
                display: "inline",
            });
        }
        return e;
    };
    svgedit.path.getControlPoints = function(b) {
        var k = b.item,
            e = b.index;
        if (!k || !("x1" in k) || !("x2" in k)) return null;
        var p = {};
        svgedit.path.getGripContainer();
        for (var A = [svgedit.path.path.segs[e - 1].item, k], C = 1; C < 3; C++) {
            var v = e + "c" + C,
                K = (p["c" + C + "_line"] = svgedit.path.getCtrlLine(v)),
                O = svgedit.path.getGripPt(b, { x: k["x" + C], y: k["y" + C] }),
                L = svgedit.path.getGripPt(b, { x: A[C - 1].x, y: A[C - 1].y });
            svgedit.utilities.assignAttributes(K, {
                x1: O.x,
                y1: O.y,
                x2: L.x,
                y2: L.y,
                display: "inline",
            });
            p["c" + C + "_line"] = K;
            pointGrip = p["c" + C] = svgedit.path.addCtrlGrip(v);
            svgedit.utilities.assignAttributes(pointGrip, {
                cx: O.x,
                cy: O.y,
                display: "inline",
            });
            p["c" + C] = pointGrip;
        }
        return p;
    };
    svgedit.path.replacePathSeg = function(b, k, e, p) {
        p = p || svgedit.path.path.elem;
        b = p["createSVGPathSeg" + n[b]].apply(p, e);
        p.pathSegList.replaceItem(b, k);
    };
    svgedit.path.getSegSelector = function(b, k) {
        var e = b.index,
            p = svgedit.utilities.getElem("segline_" + e);
        if (!p) {
            var A = svgedit.path.getGripContainer();
            p = document.createElementNS("http://www.w3.org/2000/svg", "path");
            svgedit.utilities.assignAttributes(p, {
                id: "segline_" + e,
                display: "none",
                fill: "none",
                stroke: "#0ff",
                "stroke-opacity": 1,
                "shape-rendering": "crispEdges",
                "stroke-width": 2,
                style: "pointer-events:none",
                d: "M0,0 0,0",
            });
            A.appendChild(p);
        }
        if (k) {
            e = b.prev;
            if (!e) {
                p.setAttribute("display", "none");
                return p;
            }
            e = svgedit.path.getGripPt(e);
            svgedit.path.replacePathSeg(2, 0, [e.x, e.y], p);
            A = svgedit.path.ptObjToArr(b.type, b.item, true);
            for (var C = 0; C < A.length; C += 2) {
                e = svgedit.path.getGripPt(b, { x: A[C], y: A[C + 1] });
                A[C] = e.x;
                A[C + 1] = e.y;
            }
            svgedit.path.replacePathSeg(b.type, 1, A, p);
        }
        return p;
    };
    svgedit.path.smoothControlPoints = this.smoothControlPoints = function(
        b,
        k,
        e
    ) {
        var p = b.x - e.x,
            A = b.y - e.y,
            C = k.x - e.x,
            v = k.y - e.y;
        if ((p != 0 || A != 0) && (C != 0 || v != 0)) {
            b = Math.atan2(A, p);
            k = Math.atan2(v, C);
            p = Math.sqrt(p * p + A * A);
            C = Math.sqrt(C * C + v * v);
            A = l.getSVGRoot().createSVGPoint();
            v = l.getSVGRoot().createSVGPoint();
            if (b < 0) b += 2 * Math.PI;
            if (k < 0) k += 2 * Math.PI;
            var K = Math.abs(b - k),
                O = Math.abs(Math.PI - K) / 2;
            if (b - k > 0) {
                b = K < Math.PI ? b + O : b - O;
                k = K < Math.PI ? k - O : k + O;
            } else {
                b = K < Math.PI ? b - O : b + O;
                k = K < Math.PI ? k + O : k - O;
            }
            A.x = p * Math.cos(b) + e.x;
            A.y = p * Math.sin(b) + e.y;
            v.x = C * Math.cos(k) + e.x;
            v.y = C * Math.sin(k) + e.y;
            return [A, v];
        }
    };
    svgedit.path.Segment = function(b, k) {
        this.selected = false;
        this.index = b;
        this.item = k;
        this.type = k.pathSegType;
        this.ctrlpts = [];
        this.segsel = this.ptgrip = null;
    };
    svgedit.path.Segment.prototype.showCtrlPts = function(b) {
        for (var k in this.ctrlpts)
            this.ctrlpts[k].setAttribute("display", b ? "inline" : "none");
    };
    svgedit.path.Segment.prototype.selectCtrls = function() {
        $(
            "#ctrlpointgrip_" + this.index + "c1, #ctrlpointgrip_" + this.index + "c2"
        ).attr("fill", "#4F80FF");
    };
    svgedit.path.Segment.prototype.show = function(b) {
        if (this.ptgrip) {
            this.ptgrip.setAttribute("display", b ? "inline" : "none");
            this.segsel.setAttribute("display", b ? "inline" : "none");
            this.showCtrlPts(b);
        }
    };
    svgedit.path.Segment.prototype.select = function(b) {
        if (this.ptgrip) {
            this.ptgrip.setAttribute("stroke", b ? "#4F80FF" : "#4F80FF");
            this.ptgrip.setAttribute("fill", b ? "#4F80FF" : "#fff");
            this.segsel.setAttribute("display", b ? "inline" : "none");
            this.ctrlpts && this.selectCtrls(b);
            this.selected = b;
        }
    };
    svgedit.path.Segment.prototype.addGrip = function() {
        this.ptgrip = svgedit.path.getPointGrip(this, true);
        this.ctrlpts = svgedit.path.getControlPoints(this, true);
        this.segsel = svgedit.path.getSegSelector(this, true);
    };
    svgedit.path.Segment.prototype.update = function(b) {
        if (this.ptgrip) {
            var k = svgedit.path.getGripPt(this),
                e = svgedit.browser.isTouch() ? 15 : 2.5;
            svgedit.utilities.assignAttributes(
                this.ptgrip,
                this.ptgrip.nodeName == "rect" ? { x: k.x - e, y: k.y - e } : { cx: k.x, cy: k.y }
            );
            svgedit.path.getSegSelector(this, true);
            if (this.ctrlpts) {
                if (b) {
                    this.item = svgedit.path.path.elem.pathSegList.getItem(this.index);
                    this.type = this.item.pathSegType;
                }
                svgedit.path.getControlPoints(this);
            }
        }
    };
    svgedit.path.Segment.prototype.move = function(b, k) {
        var e = this.item;
        e = $.extend({}, e);
        e = this.ctrlpts ? [(e.x += b), (e.y += k), e.x1, e.y1, (e.x2 += b), (e.y2 += k)] : [(e.x += b), (e.y += k)];
        svgedit.path.replacePathSeg(this.type, this.index, e);
        if (this.next && this.next.ctrlpts) {
            e = this.next.item;
            e = [e.x, e.y, (e.x1 += b), (e.y1 += k), e.x2, e.y2];
            svgedit.path.replacePathSeg(this.next.type, this.next.index, e);
        }
        if (this.mate) {
            e = this.mate.item;
            e = [(e.x += b), (e.y += k)];
            svgedit.path.replacePathSeg(this.mate.type, this.mate.index, e);
        }
        this.update(true);
        this.next && this.next.update(true);
    };
    svgedit.path.Segment.prototype.setLinked = function(b) {
        var k, e, p;
        if (b == 2) {
            e = 1;
            k = this.next;
            if (!k) return;
            p = this.item;
        } else {
            e = 2;
            k = this.prev;
            if (!k) return;
            p = k.item;
        }
        var A = $.extend({}, k.item);
        A["x" + e] = p.x + (p.x - this.item["x" + b]);
        A["y" + e] = p.y + (p.y - this.item["y" + b]);
        svgedit.path.replacePathSeg(k.type, k.index, [
            A.x,
            A.y,
            A.x1,
            A.y1,
            A.x2,
            A.y2,
        ]);
        k.update(true);
    };
    svgedit.path.Segment.prototype.moveCtrl = function(b, k, e) {
        var p = $.extend({}, this.item);
        p["x" + b] += k;
        p["y" + b] += e;
        svgedit.path.replacePathSeg(this.type, this.index, [
            p.x,
            p.y,
            p.x1,
            p.y1,
            p.x2,
            p.y2,
        ]);
        this.update(true);
    };
    svgedit.path.Segment.prototype.setType = function(b, k) {
        svgedit.path.replacePathSeg(b, this.index, k);
        this.type = b;
        this.item = svgedit.path.path.elem.pathSegList.getItem(this.index);
        this.showCtrlPts(b === 6);
        this.ctrlpts = svgedit.path.getControlPoints(this);
        this.update(true);
    };
    svgedit.path.Path = function(b) {
        if (!b || b.tagName !== "path")
            throw "svgedit.path.Path constructed without a <path> element";
        this.elem = b;
        this.segs = [];
        this.selected_pts = [];
        svgedit.path.path = this;
        this.init();
    };
    svgedit.path.Path.prototype.init = function() {
        $(svgedit.path.getGripContainer()).find("*").attr("display", "none");
        var b = this.elem.pathSegList,
            k = b.numberOfItems;
        this.segs = [];
        this.selected_pts = [];
        this.first_seg = null;
        for (var e = 0; e < k; e++) {
            var p = b.getItem(e);
            p = new svgedit.path.Segment(e, p);
            p.path = this;
            this.segs.push(p);
        }
        b = this.segs;
        p = null;
        for (e = 0; e < k; e++) {
            var A = b[e],
                C = e + 1 >= k ? null : b[e + 1],
                v = e - 1 < 0 ? null : b[e - 1];
            if (A.type === 2) {
                if (v && v.type !== 1) {
                    C = b[p];
                    C.next = b[p + 1];
                    C.next.prev = C;
                    C.addGrip();
                }
                p = e;
            } else if (C && C.type === 1) {
                A.next = b[p + 1];
                A.next.prev = A;
                A.mate = b[p];
                A.addGrip();
                if (this.first_seg == null) this.first_seg = A;
            } else if (C) {
                if (A.type !== 1) {
                    A.addGrip();
                    if (C && C.type !== 2) {
                        A.next = C;
                        A.next.prev = A;
                    }
                }
            } else if (A.type !== 1) {
                C = b[p];
                C.next = b[p + 1];
                C.next.prev = C;
                C.addGrip();
                A.addGrip();
                if (!this.first_seg) this.first_seg = b[p];
            }
        }
        return this;
    };
    svgedit.path.Path.prototype.eachSeg = function(b) {
        for (var k = this.segs.length, e = 0; e < k; e++)
            if (b.call(this.segs[e], e) === false) break;
    };
    svgedit.path.Path.prototype.addSeg = function(b) {
        var k = this.segs[b];
        if (k.prev) {
            var e = k.prev,
                p;
            switch (k.item.pathSegType) {
                case 4:
                    var A = (k.item.x + e.item.x) / 2,
                        C = (k.item.y + e.item.y) / 2;
                    p = this.elem.createSVGPathSegLinetoAbs(A, C);
                    break;
                case 6:
                    p = (e.item.x + k.item.x1) / 2;
                    var v = (k.item.x1 + k.item.x2) / 2,
                        K = (k.item.x2 + k.item.x) / 2,
                        O = (p + v) / 2;
                    v = (v + K) / 2;
                    A = (O + v) / 2;
                    var L = (e.item.y + k.item.y1) / 2,
                        H = (k.item.y1 + k.item.y2) / 2;
                    e = (k.item.y2 + k.item.y) / 2;
                    var V = (L + H) / 2;
                    H = (H + e) / 2;
                    C = (V + H) / 2;
                    p = this.elem.createSVGPathSegCurvetoCubicAbs(A, C, p, L, O, V);
                    svgedit.path.replacePathSeg(k.type, b, [
                        k.item.x,
                        k.item.y,
                        v,
                        H,
                        K,
                        e,
                    ]);
            }
            svgedit.path.insertItemBefore(this.elem, p, b);
        }
    };
    svgedit.path.Path.prototype.deleteSeg = function(b) {
        var k = this.segs[b],
            e = this.elem.pathSegList;
        k.show(false);
        var p = k.next;
        if (k.mate) {
            var A = [p.item.x, p.item.y];
            svgedit.path.replacePathSeg(2, p.index, A);
            svgedit.path.replacePathSeg(4, k.index, A);
            e.removeItem(k.mate.index);
        } else {
            if (!k.prev) {
                A = [p.item.x, p.item.y];
                svgedit.path.replacePathSeg(2, k.next.index, A);
            }
            e.removeItem(b);
        }
    };
    svgedit.path.Path.prototype.subpathIsClosed = function(b) {
        var k = false;
        svgedit.path.path.eachSeg(function(e) {
            if (e <= b) return true;
            if (this.type === 2) return false;
            else if (this.type === 1) {
                k = true;
                return false;
            }
        });
        return k;
    };
    svgedit.path.Path.prototype.removePtFromSelection = function(b) {
        var k = this.selected_pts.indexOf(b);
        if (k != -1) {
            this.segs[b].select(false);
            this.selected_pts.splice(k, 1);
        }
    };
    svgedit.path.Path.prototype.clearSelection = function() {
        this.eachSeg(function() {
            this.select(false);
        });
        this.selected_pts = [];
    };
    svgedit.path.Path.prototype.storeD = function() {
        this.last_d = this.elem.getAttribute("d");
    };
    svgedit.path.Path.prototype.show = function(b) {
        this.eachSeg(function() {
            this.show(b);
        });
        b && this.selectPt(this.first_seg.index);
        return this;
    };
    svgedit.path.Path.prototype.movePts = function(b, k) {
        for (var e = this.selected_pts.length; e--;)
            this.segs[this.selected_pts[e]].move(b, k);
    };
    svgedit.path.Path.prototype.moveCtrl = function(b, k) {
        var e = this.segs[this.selected_pts[0]];
        e.moveCtrl(this.dragctrl, b, k);
        d && e.setLinked(this.dragctrl);
    };
    svgedit.path.Path.prototype.setSegType = function(b) {
        this.storeD();
        for (var k = this.selected_pts.length, e; k--;) {
            var p = this.segs[this.selected_pts[k]],
                A = p.prev;
            if (A) {
                if (!b) {
                    e = "Toggle Path Segment Type";
                    b = p.type == 6 ? 4 : 6;
                }
                b -= 0;
                var C = p.item.x,
                    v = p.item.y,
                    K = A.item.x;
                A = A.item.y;
                var O;
                switch (b) {
                    case 6:
                        if (p.olditem) {
                            K = p.olditem;
                            O = [C, v, K.x1, K.y1, K.x2, K.y2];
                        } else {
                            O = C - K;
                            var L = v - A;
                            O = [C, v, K + O / 3, A + L / 3, C - O / 3, v - L / 3];
                        }
                        break;
                    case 4:
                        O = [C, v];
                        p.olditem = p.item;
                }
                p.setType(b, O);
            }
        }
        svgedit.path.path.endChanges(e);
    };
    svgedit.path.Path.prototype.selectPt = function(b, k) {
        this.clearSelection();
        b == null &&
            this.eachSeg(function(e) {
                if (this.prev) b = e;
            });
        this.addPtsToSelection(b);
        if (k) {
            this.dragctrl = k;
            d && this.segs[b].setLinked(k);
        }
    };
    svgedit.path.Path.prototype.update = function() {
        var b = this.elem;
        if (svgedit.utilities.getRotationAngle(b)) {
            this.matrix = svgedit.math.getMatrix(b);
            this.imatrix = this.matrix.inverse();
        } else this.imatrix = this.matrix = null;
        this.eachSeg(function(k) {
            this.item = b.pathSegList.getItem(k);
            this.update();
        });
        return this;
    };
    svgedit.path.getPath_ = function(b) {
        var k = c[b.id];
        k || (k = c[b.id] = new svgedit.path.Path(b));
        return k;
    };
    svgedit.path.removePath_ = function(b) {
        b in c && delete c[b];
    };
    var q = function(b, k, e, p, A, C, v) {
        dx = b - e;
        dy = k - p;
        r = Math.sqrt(dx * dx + dy * dy);
        theta = Math.atan2(dy, dx) + v;
        dx = r * Math.cos(theta) + e;
        dy = r * Math.sin(theta) + p;
        dx -= A;
        dy -= C;
        r = Math.sqrt(dx * dx + dy * dy);
        theta = Math.atan2(dy, dx) - v;
        return {
            x: (r * Math.cos(theta) + A) / 1,
            y: (r * Math.sin(theta) + C) / 1,
        };
    };
    svgedit.path.recalcRotatedPath = function() {
        var b = svgedit.path.path.elem,
            k = svgedit.utilities.getRotationAngle(b, true);
        if (k) {
            var e = svgedit.utilities.getBBox(b),
                p = svgedit.path.path.oldbbox,
                A = p.x + p.width / 2;
            p = p.y + p.height / 2;
            var C = e.x + e.width / 2;
            e = e.y + e.height / 2;
            C = C - A;
            var v = e - p;
            e = Math.sqrt(C * C + v * v);
            v = Math.atan2(v, C) + k;
            C = e * Math.cos(v) + A;
            e = e * Math.sin(v) + p;
            v = b.pathSegList;
            for (var K = v.numberOfItems; K;) {
                K -= 1;
                var O = v.getItem(K),
                    L = O.pathSegType;
                if (L != 1) {
                    var H = q(O.x, O.y, A, p, C, e, k);
                    H = [H.x, H.y];
                    if (O.x1 != null && O.x2 != null) {
                        c_vals1 = q(O.x1, O.y1, A, p, C, e, k);
                        c_vals2 = q(O.x2, O.y2, A, p, C, e, k);
                        H.splice(H.length, 0, c_vals1.x, c_vals1.y, c_vals2.x, c_vals2.y);
                    }
                    svgedit.path.replacePathSeg(L, K, H);
                }
            }
            svgedit.utilities.getBBox(b);
            A = svgroot.createSVGTransform();
            b = svgedit.transformlist.getTransformList(b);
            A.setRotate((k * 180) / Math.PI, C, e);
            b.replaceItem(A, 0);
        }
    };
    svgedit.path.clearData = function() {
        c = {};
    };
})();
if (!window.console) {
    window.console = {};
    window.console.log = function() {};
    window.console.dir = function() {};
}
if (window.opera) {
    window.console.log = function(a) {
        opera.postError(a);
    };
    window.console.dir = function() {};
}
(function() {
    var a = jQuery.fn.attr;
    jQuery.fn.attr = function(n, d) {
        var c = this.length;
        if (!c) return a.apply(this, arguments);
        for (var l = 0; l < c; l++) {
            var q = this[l];
            if (q.namespaceURI === "http://www.w3.org/2000/svg")
                if (d !== undefined) q.setAttribute(n, d);
                else if ($.isArray(n)) {
                c = n.length;
                for (l = {}; c--;) {
                    var b = n[c],
                        k = q.getAttribute(b);
                    if (k || k === "0") k = isNaN(k) ? k : k - 0;
                    l[b] = k;
                }
                return l;
            } else if (typeof n === "object")
                for (b in n) q.setAttribute(b, n[b]);
            else {
                if ((k = q.getAttribute(n)) || k === "0") k = isNaN(k) ? k : k - 0;
                return k;
            } else return a.apply(this, arguments);
        }
        return this;
    };
})();
$.SvgCanvas = function(a, n) {
    function d(f, h) {
        for (var m = svgedit.utilities.getBBox(f), B = 0; B < 2; B++) {
            var z = B === 0 ? "fill" : "stroke",
                F = f.getAttribute(z);
            if (F && F.indexOf("url(") === 0) {
                F = Q(F);
                if (F.tagName === "linearGradient") {
                    var D = F.getAttribute("x1") || 0,
                        u = F.getAttribute("y1") || 0,
                        E = F.getAttribute("x2") || 1,
                        J = F.getAttribute("y2") || 0;
                    D = m.width * D + m.x;
                    u = m.height * u + m.y;
                    E = m.width * E + m.x;
                    J = m.height * J + m.y;
                    D = N(D, u, h);
                    J = N(E, J, h);
                    E = {};
                    E.x1 = (D.x - m.x) / m.width;
                    E.y1 = (D.y - m.y) / m.height;
                    E.x2 = (J.x - m.x) / m.width;
                    E.y2 = (J.y - m.y) / m.height;
                    F = F.cloneNode(true);
                    $(F).attr(E);
                    F.id = Y();
                    ib().appendChild(F);
                    f.setAttribute(z, "url(#" + F.id + ")");
                }
            }
        }
    }
    var c = "http://www.w3.org/2000/svg",
        l = { show_outside_canvas: true, selectNew: true, dimensions: [640, 480] };
    n && $.extend(l, n);
    var q = l.dimensions,
        b = this,
        k = a.ownerDocument,
        e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    e.setAttribute("width", q[0]);
    e.setAttribute("height", q[1]);
    e.id = "svgroot";
    e.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    a.appendChild(e);
    var p = k.createElementNS(c, "svg");
    (b.clearSvgContentElement = function() {
        for (; p.firstChild;) p.removeChild(p.firstChild);
        $(p)
            .attr({
                id: "svgcontent",
                width: q[0],
                height: q[1],
                x: q[0],
                y: q[1],
                overflow: l.show_outside_canvas ? "visible" : "hidden",
                xmlns: c,
                "xmlns:se": "http://svg-edit.googlecode.com",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
            })
            .appendTo(e);
        var f = k.createComment(
            " Created with Method Draw - http://github.com/duopixel/Method-Draw/ "
        );
        p.appendChild(f);
    })();
    var A = "svg_";
    b.setIdPrefix = function(f) {
        A = f;
    };
    b.current_drawing_ = new svgedit.draw.Drawing(p, A);
    var C = (b.getCurrentDrawing = function() {
            return b.current_drawing_;
        }),
        v = 1,
        K = null,
        O = {
            shape: {
                fill: (l.initFill.color == "none" ? "" : "#") + l.initFill.color,
                fill_paint: null,
                fill_opacity: l.initFill.opacity,
                stroke: "#" + l.initStroke.color,
                stroke_paint: null,
                stroke_opacity: l.initStroke.opacity,
                stroke_width: l.initStroke.width,
                stroke_dasharray: "none",
                opacity: l.initOpacity,
            },
        };
    O.text = $.extend(true, {}, O.shape);
    $.extend(O.text, {
        fill: "#000000",
        stroke_width: 0,
        font_size: 24,
        font_family: "Helvetica, Arial, sans-serif",
    });
    var L = O.shape,
        H = Array(1),
        V = (this.addSvgElementFromJson = function(f) {
            var h = svgedit.utilities.getElem(f.attr.id),
                m = C().getCurrentLayer();
            if (h && f.element != h.tagName) {
                m.removeChild(h);
                h = null;
            }
            if (!h) {
                h = k.createElementNS(c, f.element);
                if (m)(K || m).appendChild(h);
            }
            f.curStyles &&
                svgedit.utilities.assignAttributes(
                    h, {
                        fill: L.fill,
                        stroke: L.stroke,
                        "stroke-width": L.stroke_width,
                        "stroke-dasharray": L.stroke_dasharray,
                        "stroke-opacity": L.stroke_opacity,
                        "fill-opacity": L.fill_opacity,
                        opacity: L.opacity / 2,
                        style: "pointer-events:inherit",
                    },
                    100
                );
            svgedit.utilities.assignAttributes(h, f.attr, 100);
            svgedit.utilities.cleanupElement(h);
            return h;
        }),
        R = (b.getTransformList = svgedit.transformlist.getTransformList),
        N = svgedit.math.transformPoint,
        ca = (b.matrixMultiply = svgedit.math.matrixMultiply),
        ma = (b.hasMatrixTransform = svgedit.math.hasMatrixTransform),
        Z = (b.transformListToTransform = svgedit.math.transformListToTransform),
        U = svgedit.math.snapToAngle,
        fa = svgedit.math.getMatrix;
    svgedit.units.init({
        getBaseUnit: function() {
            return l.baseUnit;
        },
        getElement: svgedit.utilities.getElem,
        getHeight: function() {
            return p.getAttribute("height") / v;
        },
        getWidth: function() {
            return p.getAttribute("width") / v;
        },
        getRoundDigits: function() {
            return ra.round_digits;
        },
    });
    var ua = (b.convertToNum = svgedit.units.convertToNum);
    svgedit.utilities.init({
        getDOMDocument: function() {
            return k;
        },
        getDOMContainer: function() {
            return a;
        },
        getSVGRoot: function() {
            return e;
        },
        getSelectedElements: function() {
            return H;
        },
        getSVGContent: function() {
            return p;
        },
    });
    var ja = (b.getUrlFromAttr = svgedit.utilities.getUrlFromAttr),
        ka = (b.getHref = svgedit.utilities.getHref),
        aa = (b.setHref = svgedit.utilities.setHref),
        da = svgedit.utilities.getPathBBox;
    b.getBBox = svgedit.utilities.getBBox;
    var qa = (b.getRotationAngle = svgedit.utilities.getRotationAngle),
        pa = (b.getElem = svgedit.utilities.getElem),
        na = (b.assignAttributes = svgedit.utilities.assignAttributes),
        oa = (this.cleanupElement = svgedit.utilities.cleanupElement),
        Ka = svgedit.sanitize.getNSMap(),
        Ea = (b.sanitizeSvg = svgedit.sanitize.sanitizeSvg),
        Pa = svgedit.history.MoveElementCommand,
        Wa = svgedit.history.InsertElementCommand,
        Ia = svgedit.history.RemoveElementCommand,
        Ja = svgedit.history.ChangeElementCommand,
        za = svgedit.history.BatchCommand;
    b.undoMgr = new svgedit.history.UndoManager({
        handleHistoryEvent: function(f, h) {
            var m = svgedit.history.HistoryEventTypes;
            if (f == m.BEFORE_UNAPPLY || f == m.BEFORE_APPLY) b.clearSelection();
            else if (f == m.AFTER_APPLY || f == m.AFTER_UNAPPLY) {
                var B = h.elements();
                b.pathActions.clear();
                ga("changed", B);
                B = h.type();
                m = f == m.AFTER_APPLY;
                if (B == Pa.type())
                    (m ? h.newParent : h.oldParent) == p && b.identifyLayers();
                else if (B == Wa.type() || B == Ia.type()) {
                    h.parent == p && b.identifyLayers();
                    if (B == Wa.type()) m && jb(h.elem);
                    else m || jb(h.elem);
                    h.elem.tagName === "use" && Hb(h.elem);
                } else if (B == Ja.type()) {
                    h.elem.tagName == "title" &&
                        h.elem.parentNode.parentNode == p &&
                        b.identifyLayers();
                    m = m ? h.newValues : h.oldValues;
                    m.stdDeviation && b.setBlurOffsets(h.elem.parentNode, m.stdDeviation);
                }
            }
        },
    });
    var wa = function(f) {
        b.undoMgr.addCommandToHistory(f);
    };
    svgedit.select.init(l, {
        createSVGElement: function(f) {
            return b.addSvgElementFromJson(f);
        },
        svgRoot: function() {
            return e;
        },
        svgContent: function() {
            return p;
        },
        currentZoom: function() {
            return v;
        },
        getStrokedBBox: function(f) {
            return b.getStrokedBBox([f]);
        },
    });
    var sa = (this.selectorManager = svgedit.select.getSelectorManager());
    svgedit.path.init({
        getCurrentZoom: function() {
            return v;
        },
        getSVGRoot: function() {
            return e;
        },
    });
    svgedit.utilities.snapToGrid = function(f) {
        var h = l.snappingStep,
            m = l.baseUnit;
        if (m !== "px") h *= svgedit.units.getTypeMap()[m];
        return (f = Math.round(f / h) * h);
    };
    var va = svgedit.utilities.snapToGrid,
        tb = [
            "clip-path",
            "fill",
            "filter",
            "marker-end",
            "marker-mid",
            "marker-start",
            "mask",
            "stroke",
        ],
        pb = $.data,
        jb = function(f) {
            var h = $(f).attr(tb),
                m;
            for (m in h) {
                var B = h[m];
                if (B && B.indexOf("url(") === 0) {
                    B = ja(B).substr(1);
                    if (!pa(B)) {
                        ib().appendChild(fb[B]);
                        delete fb[B];
                    }
                }
            }
            f = f.getElementsByTagName("*");
            if (f.length) {
                h = 0;
                for (m = f.length; h < m; h++) jb(f[h]);
            }
        },
        Va = {},
        Ya = l.imgPath + "logo.png",
        Aa = [],
        ra = { round_digits: 5 },
        Fa = false,
        Ra = null,
        ya = "select",
        eb = "none",
        nb = {},
        $a = O.text,
        Sa = L,
        ub = null,
        La = null,
        Ga = [],
        qb = {},
        fb = {};
    b.clipBoard = [];
    var rb = (this.runExtensions = function(f, h, m) {
        var B = false;
        if (m) B = [];
        $.each(qb, function(z, F) {
            if (f in F)
                if (m) B.push(F[f](h));
                else B = F[f](h);
        });
        return B;
    });
    this.addExtension = function(f, h) {
        if (f in qb)
            console.log(
                'Cannot add extension "' +
                f +
                '", an extension by that name already exists"'
            );
        else {
            var m = $.isFunction(h) ?
                h(
                    $.extend(b.getPrivateMethods(), {
                        svgroot: e,
                        svgcontent: p,
                        nonce: C().getNonce(),
                        selectorManager: sa,
                    })
                ) :
                h;
            qb[f] = m;
            ga("extension_added", m);
        }
    };
    var kb = (this.round = function(f) {
            return parseInt(f * v) / v;
        }),
        gb = (this.getIntersectionList = function(f) {
            if (La == null) return null;
            var h = K || C().getCurrentLayer();
            Ga.length || (Ga = wb(h));
            var m = null;
            try {
                m = h.getIntersectionList(f, null);
            } catch (B) {}
            if (m == null || typeof m.item != "function") {
                m = [];
                if (f) f = f;
                else {
                    f = La.getBBox();
                    h = {};
                    for (var z in f) h[z] = f[z] / v;
                    f = h;
                }
                for (z = Ga.length; z--;)
                    f.width &&
                    f.width &&
                    svgedit.math.rectsIntersect(f, Ga[z].bbox) &&
                    m.push(Ga[z].elem);
            }
            return m;
        });
    getStrokedBBox = this.getStrokedBBox = function(f) {
        f || (f = ob());
        if (!f.length) return false;
        var h = function(J) {
                try {
                    var g = svgedit.utilities.getBBox(J),
                        o = svgedit.utilities.getRotationAngle(J);
                    if (
                        (o && o % 90) ||
                        svgedit.math.hasMatrixTransform(
                            svgedit.transformlist.getTransformList(J)
                        )
                    ) {
                        o = false;
                        if (
                            ["ellipse", "path", "line", "polyline", "polygon"].indexOf(
                                J.tagName
                            ) >= 0
                        )
                            g = o = b.convertToPath(J, true);
                        else if (J.tagName == "rect") {
                            var s = J.getAttribute("rx"),
                                w = J.getAttribute("ry");
                            if (s || w) g = o = b.convertToPath(J, true);
                        }
                        if (!o) {
                            var G = J.cloneNode(true),
                                I = document.createElementNS(c, "g"),
                                M = J.parentNode;
                            M.appendChild(I);
                            I.appendChild(G);
                            g = svgedit.utilities.bboxToObj(I.getBBox());
                            M.removeChild(I);
                        }
                    }
                    return g;
                } catch (T) {
                    console.log(J, T);
                }
            },
            m;
        $.each(f, function() {
            if (!m)
                if (this.parentNode) m = h(this);
        });
        if (m == null) return null;
        var B = m.x + m.width,
            z = m.y + m.height,
            F = m.x,
            D = m.y,
            u = function(J) {
                var g = J.getAttribute("stroke-width"),
                    o = 0;
                if (J.getAttribute("stroke") != "none" && !isNaN(g)) o += g / 2;
                return o;
            },
            E = [];
        $.each(f, function(J, g) {
            var o = h(g);
            if (o) {
                var s = u(g);
                F = Math.min(F, o.x - s);
                D = Math.min(D, o.y - s);
                E.push(o);
            }
        });
        m.x = F;
        m.y = D;
        $.each(f, function(J, g) {
            var o = E[J];
            if (o && g.nodeType == 1) {
                var s = u(g);
                B = Math.max(B, o.x + o.width + s);
                z = Math.max(z, o.y + o.height + s);
            }
        });
        m.width = B - F;
        m.height = z - D;
        return m;
    };
    var ob = (this.getVisibleElements = function(f) {
            f || (f = $(p).children());
            f.find("#canvas_background").length && f.splice(0, 1);
            var h = [];
            $(f)
                .children()
                .each(function(m, B) {
                    try {
                        B.getBBox() && h.push(B);
                    } catch (z) {}
                });
            return h.reverse();
        }),
        wb = (this.getVisibleElementsAndBBoxes = function(f) {
            f || (f = $(p).children());
            var h = [];
            $(f)
                .children()
                .each(function(m, B) {
                    try {
                        B.getBBox() && h.push({ elem: B, bbox: getStrokedBBox([B]) });
                    } catch (z) {}
                });
            return h.reverse();
        }),
        cb = (this.groupSvgElem = function(f) {
            var h = document.createElementNS(c, "g");
            f.parentNode.replaceChild(h, f);
            $(h).append(f).data("gsvg", f)[0].id = Y();
        }),
        lb = function(f) {
            var h = document.createElementNS(f.namespaceURI, f.nodeName);
            h.removeAttribute("id");
            $.each(f.attributes, function(B, z) {
                z.localName != "-moz-math-font-style" &&
                    h.setAttributeNS(z.namespaceURI, z.nodeName, z.nodeValue);
            });
            if (svgedit.browser.isWebkit() && f.nodeName == "path") {
                var m = Ha.convertPath(f);
                h.setAttribute("d", m);
            }
            $.each(f.childNodes, function(B, z) {
                switch (z.nodeType) {
                    case 1:
                        h.appendChild(lb(z));
                        break;
                    case 3:
                        h.textContent = z.nodeValue;
                }
            });
            if ($(f).data("gsvg")) $(h).data("gsvg", h.firstChild);
            else if ($(f).data("symbol")) {
                f = $(f).data("symbol");
                $(h).data("ref", f).data("symbol", f);
            } else h.tagName == "image" && zb(h);
            h.id = Y();
            return h;
        },
        ia,
        Y,
        ga;
    (function(f) {
        var h = {};
        ia = f.getId = function() {
            return C().getId();
        };
        Y = f.getNextId = function() {
            return C().getNextId();
        };
        ga = f.call = function(m, B) {
            if (h[m]) return h[m](this, B);
        };
        f.bind = function(m, B) {
            var z = h[m];
            h[m] = B;
            return z;
        };
    })(b);
    this.prepareSvg = function(f) {
        this.sanitizeSvg(f.documentElement);
        f = f.getElementsByTagNameNS(c, "path");
        for (var h = 0, m = f.length; h < m; ++h) {
            var B = f[h];
            B.setAttribute("d", Ha.convertPath(B));
            Ha.fixEnd(B);
        }
    };
    var Q = (this.getRefElem = function(f) {
            return pa(ja(f).substr(1));
        }),
        P = function(f) {
            if (!svgedit.browser.isGecko()) return f;
            var h = f.cloneNode(true);
            f.parentNode.insertBefore(h, f);
            f.parentNode.removeChild(f);
            sa.releaseSelector(f);
            H[0] = h;
            sa.requestSelector(h).showGrips(true);
            return h;
        };
    this.setRotationAngle = function(f, h) {
        f = parseFloat(f);
        var m = H[0];
        if (m) {
            var B = m.getAttribute("transform"),
                z = svgedit.utilities.getBBox(m),
                F = z.x + z.width / 2,
                D = z.y + z.height / 2;
            z = R(m);
            z.numberOfItems > 0 && z.getItem(0).type == 4 && z.removeItem(0);
            if (f != 0) {
                F = N(F, D, Z(z).matrix);
                D = e.createSVGTransform();
                D.setRotate(f, F.x, F.y);
                z.numberOfItems ? z.insertItemBefore(D, 0) : z.appendItem(D);
            } else z.numberOfItems == 0 && m.removeAttribute("transform");
            if (!h) {
                z = m.getAttribute("transform");
                m.setAttribute("transform", B);
                db("transform", z, H);
                ga("changed", H);
            }
            pa("pathpointgrip_container");
            m = sa.requestSelector(H[0]);
            m.resize();
            m.updateGripCursors(f);
        }
    };
    var ba = (this.recalculateAllSelectedDimensions = function() {
            for (
                var f = new za(eb == "none" ? "position" : "size"), h = H.length; h--;

            ) {
                var m = Xa(H[h]);
                m && f.addSubCommand(m);
            }
            if (!f.isEmpty()) {
                wa(f);
                ga("changed", H);
            }
        }),
        Ca = [
            0,
            "z",
            "M",
            "m",
            "L",
            "l",
            "C",
            "c",
            "Q",
            "q",
            "A",
            "a",
            "H",
            "h",
            "V",
            "v",
            "S",
            "s",
            "T",
            "t",
        ],
        Qa = function(f) {
            console.log([f.a, f.b, f.c, f.d, f.e, f.f]);
        },
        Ua = (this.remapElement = function(f, h, m) {
            var B = l.gridSnapping && f.parentNode.parentNode.localName === "svg",
                z = function() {
                    if (B)
                        for (var o in h) h[o] = va(h[o]);
                    na(f, h, 1e3, true);
                };
            box = svgedit.utilities.getBBox(f);
            for (var F = 0; F < 2; F++) {
                var D = F === 0 ? "fill" : "stroke",
                    u = f.getAttribute(D);
                if (u && u.indexOf("url(") === 0)
                    if (m.a < 0 || m.d < 0) {
                        u = Q(u).cloneNode(true);
                        if (m.a < 0) {
                            var E = u.getAttribute("x1"),
                                J = u.getAttribute("x2");
                            u.setAttribute("x1", -(E - 1));
                            u.setAttribute("x2", -(J - 1));
                        }
                        if (m.d < 0) {
                            E = u.getAttribute("y1");
                            J = u.getAttribute("y2");
                            u.setAttribute("y1", -(E - 1));
                            u.setAttribute("y2", -(J - 1));
                        }
                        u.id = Y();
                        ib().appendChild(u);
                        f.setAttribute(D, "url(#" + u.id + ")");
                    }
            }
            F = f.tagName;
            if (F === "g" || F === "text" || F === "use")
                if (
                    m.a == 1 &&
                    m.b == 0 &&
                    m.c == 0 &&
                    m.d == 1 &&
                    (m.e != 0 || m.f != 0)
                ) {
                    D = Z(f).matrix;
                    D = ca(D.inverse(), m, D);
                    h.x = parseFloat(h.x) + D.e;
                    h.y = parseFloat(h.y) + D.f;
                } else {
                    D = R(f);
                    u = e.createSVGTransform();
                    u.setMatrix(ca(Z(D).matrix, m));
                    D.clear();
                    D.appendItem(u);
                }
            switch (F) {
                case "foreignObject":
                case "rect":
                case "image":
                    if (F === "image" && (m.a < 0 || m.d < 0)) {
                        D = R(f);
                        u = e.createSVGTransform();
                        u.setMatrix(ca(Z(D).matrix, m));
                        D.clear();
                        D.appendItem(u);
                    } else {
                        D = N(h.x, h.y, m);
                        h.width = m.a * h.width;
                        h.height = m.d * h.height;
                        h.x = D.x + Math.min(0, h.width);
                        h.y = D.y + Math.min(0, h.height);
                        h.width = Math.abs(h.width);
                        h.height = Math.abs(h.height);
                    }
                    z();
                    break;
                case "ellipse":
                    F = N(h.cx, h.cy, m);
                    h.cx = F.x;
                    h.cy = F.y;
                    h.rx = m.a * h.rx;
                    h.ry = m.d * h.ry;
                    h.rx = Math.abs(h.rx);
                    h.ry = Math.abs(h.ry);
                    z();
                    break;
                case "circle":
                    F = N(h.cx, h.cy, m);
                    h.cx = F.x;
                    h.cy = F.y;
                    F = svgedit.math.transformBox(box.x, box.y, box.width, box.height, m);
                    h.r = Math.min((F.tr.x - F.tl.x) / 2, (F.bl.y - F.tl.y) / 2);
                    if (h.r) h.r = Math.abs(h.r);
                    z();
                    break;
                case "line":
                    D = N(h.x1, h.y1, m);
                    E = N(h.x2, h.y2, m);
                    h.x1 = D.x;
                    h.y1 = D.y;
                    h.x2 = E.x;
                    h.y2 = E.y;
                case "text":
                    m = f.querySelectorAll("tspan");
                    for (F = m.length; F--;) {
                        D = ua("x", f.getAttribute("x"));
                        u = ua("x", m[F].getAttribute("x"));
                        E = ua("y", f.getAttribute("y"));
                        J = ua("y", m[F].getAttribute("y"));
                        var g = {};
                        if (!isNaN(D) && !isNaN(u) && D != 0 && u != 0 && h.x)
                            g.x = h.x - (D - u);
                        if (!isNaN(E) && !isNaN(J) && E != 0 && J != 0 && h.y)
                            g.y = h.y - (E - J);
                        if (g.x || g.y) na(m[F], g, 1e3, true);
                    }
                    z();
                    break;
                case "use":
                    z();
                    break;
                case "g":
                    (z = $(f).data("gsvg")) && na(z, h, 1e3, true);
                    break;
                case "polyline":
                case "polygon":
                    z = h.points.length;
                    for (F = 0; F < z; ++F) {
                        J = h.points[F];
                        J = N(J.x, J.y, m);
                        h.points[F].x = J.x;
                        h.points[F].y = J.y;
                    }
                    z = h.points.length;
                    m = "";
                    for (F = 0; F < z; ++F) {
                        J = h.points[F];
                        m += J.x + "," + J.y + " ";
                    }
                    f.setAttribute("points", m);
                    break;
                case "path":
                    D = f.pathSegList;
                    z = D.numberOfItems;
                    h.d = Array(z);
                    for (F = 0; F < z; ++F) {
                        u = D.getItem(F);
                        h.d[F] = {
                            type: u.pathSegType,
                            x: u.x,
                            y: u.y,
                            x1: u.x1,
                            y1: u.y1,
                            x2: u.x2,
                            y2: u.y2,
                            r1: u.r1,
                            r2: u.r2,
                            angle: u.angle,
                            largeArcFlag: u.largeArcFlag,
                            sweepFlag: u.sweepFlag,
                        };
                    }
                    z = h.d.length;
                    F = h.d[0];
                    g = N(F.x, F.y, m);
                    h.d[0].x = g.x;
                    h.d[0].y = g.y;
                    for (F = 1; F < z; ++F) {
                        u = h.d[F];
                        D = u.type;
                        if (D % 2 == 0) {
                            J = N(
                                u.x != undefined ? u.x : g.x,
                                u.y != undefined ? u.y : g.y,
                                m
                            );
                            D = N(u.x1, u.y1, m);
                            E = N(u.x2, u.y2, m);
                            u.x = J.x;
                            u.y = J.y;
                            u.x1 = D.x;
                            u.y1 = D.y;
                            u.x2 = E.x;
                            u.y2 = E.y;
                        } else {
                            u.x = m.a * u.x;
                            u.y = m.d * u.y;
                            u.x1 = m.a * u.x1;
                            u.y1 = m.d * u.y1;
                            u.x2 = m.a * u.x2;
                            u.y2 = m.d * u.y2;
                        }
                        u.r1 = m.a * u.r1;
                        u.r2 = m.d * u.r2;
                    }
                    m = "";
                    z = h.d.length;
                    for (F = 0; F < z; ++F) {
                        u = h.d[F];
                        D = u.type;
                        m += Ca[D];
                        switch (D) {
                            case 13:
                            case 12:
                                m += u.x + " ";
                                break;
                            case 15:
                            case 14:
                                m += u.y + " ";
                                break;
                            case 3:
                            case 5:
                            case 19:
                            case 2:
                            case 4:
                            case 18:
                                m += u.x + "," + u.y + " ";
                                break;
                            case 7:
                            case 6:
                                m +=
                                    u.x1 +
                                    "," +
                                    u.y1 +
                                    " " +
                                    u.x2 +
                                    "," +
                                    u.y2 +
                                    " " +
                                    u.x +
                                    "," +
                                    u.y +
                                    " ";
                                break;
                            case 9:
                            case 8:
                                m += u.x1 + "," + u.y1 + " " + u.x + "," + u.y + " ";
                                break;
                            case 11:
                            case 10:
                                m +=
                                    u.r1 +
                                    "," +
                                    u.r2 +
                                    " " +
                                    u.angle +
                                    " " +
                                    +u.largeArcFlag +
                                    " " +
                                    +u.sweepFlag +
                                    " " +
                                    u.x +
                                    "," +
                                    u.y +
                                    " ";
                                break;
                            case 17:
                            case 16:
                                m += u.x2 + "," + u.y2 + " " + u.x + "," + u.y + " ";
                        }
                    }
                    f.setAttribute("d", m);
            }
        }),
        hb = function(f, h, m) {
            f = Q(f).firstChild;
            var B = R(f),
                z = e.createSVGTransform();
            z.setTranslate(h, m);
            B.appendItem(z);
            Xa(f);
        },
        Xa = (this.recalculateDimensions = function(f) {
            if (f == null) return null;
            var h = R(f);
            if (h && h.numberOfItems > 0) {
                for (var m = h.numberOfItems; m--;) {
                    var B = h.getItem(m);
                    if (B.type === 0) h.removeItem(m);
                    else if (B.type === 1)
                        svgedit.math.isIdentity(B.matrix) && h.removeItem(m);
                    else B.type === 4 && B.angle === 0 && h.removeItem(m);
                }
                if (h.numberOfItems === 1 && qa(f)) return null;
            }
            if (!h || h.numberOfItems == 0) {
                f.removeAttribute("transform");
                return null;
            }
            if (h) {
                m = h.numberOfItems;
                for (var z = []; m--;) {
                    B = h.getItem(m);
                    if (B.type === 1) z.push([B.matrix, m]);
                    else if (z.length) z = [];
                }
                if (z.length === 2) {
                    m = e.createSVGTransformFromMatrix(ca(z[1][0], z[0][0]));
                    h.removeItem(z[0][1]);
                    h.removeItem(z[1][1]);
                    h.insertItemBefore(m, z[1][1]);
                }
                m = h.numberOfItems;
                if (
                    m >= 2 &&
                    h.getItem(m - 2).type === 1 &&
                    h.getItem(m - 1).type === 2
                ) {
                    z = e.createSVGTransform();
                    B = ca(h.getItem(m - 2).matrix, h.getItem(m - 1).matrix);
                    z.setMatrix(B);
                    h.removeItem(m - 2);
                    h.removeItem(m - 2);
                    h.appendItem(z);
                }
            }
            switch (f.tagName) {
                case "line":
                case "polyline":
                case "polygon":
                case "path":
                    break;
                default:
                    if (
                        (h.numberOfItems === 1 && h.getItem(0).type === 1) ||
                        (h.numberOfItems === 2 &&
                            h.getItem(0).type === 1 &&
                            h.getItem(0).type === 4)
                    )
                        return null;
            }
            var F = $(f).data("gsvg");
            m = new za("Transform");
            var D = {},
                u = null;
            B = [];
            switch (f.tagName) {
                case "line":
                    B = ["x1", "y1", "x2", "y2"];
                    break;
                case "circle":
                    B = ["cx", "cy", "r"];
                    break;
                case "ellipse":
                    B = ["cx", "cy", "rx", "ry"];
                    break;
                case "foreignObject":
                case "rect":
                case "image":
                    B = ["width", "height", "x", "y"];
                    break;
                case "use":
                case "text":
                case "tspan":
                    B = ["x", "y"];
                    break;
                case "polygon":
                case "polyline":
                    u = {};
                    u.points = f.getAttribute("points");
                    z = f.points;
                    var E = z.numberOfItems;
                    D.points = Array(E);
                    for (var J = 0; J < E; ++J) {
                        var g = z.getItem(J);
                        D.points[J] = { x: g.x, y: g.y };
                    }
                    break;
                case "path":
                    u = {};
                    u.d = f.getAttribute("d");
                    D.d = f.getAttribute("d");
            }
            if (B.length) {
                D = $(f).attr(B);
                $.each(D, function(xa, Da) {
                    D[xa] = ua(xa, Da);
                });
            } else if (F) D = { x: $(F).attr("x") || 0, y: $(F).attr("y") || 0 };
            if (u == null) {
                u = $.extend(true, {}, D);
                $.each(u, function(xa, Da) {
                    u[xa] = ua(xa, Da);
                });
            }
            u.transform = Ra ? Ra : "";
            if ((f.tagName == "g" && !F) || f.tagName == "a") {
                z = svgedit.utilities.getBBox(f);
                var o = { x: z.x + z.width / 2, y: z.y + z.height / 2 },
                    s = N(z.x + z.width / 2, z.y + z.height / 2, Z(h).matrix);
                B = e.createSVGMatrix();
                if ((z = qa(f))) {
                    J = (z * Math.PI) / 180;
                    E = Math.abs(J) > 1.0e-10 ? Math.sin(J) / (1 - Math.cos(J)) : 2 / J;
                    for (J = 0; J < h.numberOfItems; ++J) {
                        B = h.getItem(J);
                        if (B.type == 4) {
                            B = B.matrix;
                            o.y = (E * B.e + B.f) / 2;
                            o.x = (B.e - E * B.f) / 2;
                            h.removeItem(J);
                            break;
                        }
                    }
                }
                J = B = F = 0;
                var w = h.numberOfItems;
                if (w) var G = h.getItem(0).matrix;
                if (
                    w >= 3 &&
                    h.getItem(w - 2).type == 3 &&
                    h.getItem(w - 3).type == 2 &&
                    h.getItem(w - 1).type == 2
                ) {
                    J = 3;
                    var I = h.getItem(w - 3).matrix,
                        M = h.getItem(w - 2).matrix,
                        T = h.getItem(w - 1).matrix;
                    E = f.childNodes;
                    for (g = E.length; g--;) {
                        var X = E.item(g);
                        B = F = 0;
                        if (X.nodeType == 1) {
                            var S = R(X);
                            if (S) {
                                B = Z(S).matrix;
                                F = qa(X);
                                var W = Ra,
                                    ha = [];
                                Ra = X.getAttribute("transform");
                                if (F || ma(S)) {
                                    var la = e.createSVGTransform();
                                    la.setMatrix(ca(I, M, T, B));
                                    S.clear();
                                    S.appendItem(la);
                                    ha.push(la);
                                } else {
                                    F = ca(B.inverse(), T, B);
                                    la = e.createSVGMatrix();
                                    la.e = -F.e;
                                    la.f = -F.f;
                                    B = ca(la.inverse(), B.inverse(), I, M, T, B, F.inverse());
                                    var ea = e.createSVGTransform(),
                                        ta = e.createSVGTransform(),
                                        Ba = e.createSVGTransform();
                                    ea.setTranslate(F.e, F.f);
                                    ta.setScale(B.a, B.d);
                                    Ba.setTranslate(la.e, la.f);
                                    S.appendItem(Ba);
                                    S.appendItem(ta);
                                    S.appendItem(ea);
                                    ha.push(Ba);
                                    ha.push(ta);
                                    ha.push(ea);
                                }
                                m.addSubCommand(Xa(X));
                                Ra = W;
                            }
                        }
                    }
                    h.removeItem(w - 1);
                    h.removeItem(w - 2);
                    h.removeItem(w - 3);
                } else if (w >= 3 && h.getItem(w - 1).type == 1) {
                    J = 3;
                    B = Z(h).matrix;
                    la = e.createSVGTransform();
                    la.setMatrix(B);
                    h.clear();
                    h.appendItem(la);
                } else if (
                    (w == 1 || (w > 1 && h.getItem(1).type != 3)) &&
                    h.getItem(0).type == 2
                ) {
                    J = 2;
                    F = Z(h).matrix;
                    h.removeItem(0);
                    B = Z(h).matrix.inverse();
                    B = ca(B, F);
                    F = B.e;
                    B = B.f;
                    if (F != 0 || B != 0) {
                        E = f.childNodes;
                        g = E.length;
                        for (w = []; g--;) {
                            X = E.item(g);
                            if (X.nodeType == 1) {
                                if (X.getAttribute("clip-path")) {
                                    W = X.getAttribute("clip-path");
                                    if (w.indexOf(W) === -1) {
                                        hb(W, F, B);
                                        w.push(W);
                                    }
                                }
                                W = Ra;
                                Ra = X.getAttribute("transform");
                                if ((S = R(X))) {
                                    I = e.createSVGTransform();
                                    I.setTranslate(F, B);
                                    S.numberOfItems ? S.insertItemBefore(I, 0) : S.appendItem(I);
                                    m.addSubCommand(Xa(X));
                                    S = f.getElementsByTagNameNS(c, "use");
                                    X = "#" + X.id;
                                    for (I = S.length; I--;) {
                                        M = S.item(I);
                                        if (X == ka(M)) {
                                            T = e.createSVGTransform();
                                            T.setTranslate(-F, -B);
                                            R(M).insertItemBefore(T, 0);
                                            m.addSubCommand(Xa(M));
                                        }
                                    }
                                    Ra = W;
                                }
                            }
                        }
                        w = [];
                        Ra = W;
                    }
                } else if (w == 1 && h.getItem(0).type == 1 && !z) {
                    J = 1;
                    B = h.getItem(0).matrix;
                    E = f.childNodes;
                    for (g = E.length; g--;) {
                        X = E.item(g);
                        if (X.nodeType == 1) {
                            W = Ra;
                            Ra = X.getAttribute("transform");
                            if ((S = R(X))) {
                                F = ca(B, Z(S).matrix);
                                w = e.createSVGTransform();
                                w.setMatrix(F);
                                S.clear();
                                S.appendItem(w, 0);
                                m.addSubCommand(Xa(X));
                                Ra = W;
                                W = X.getAttribute("stroke-width");
                                X.getAttribute("stroke") !== "none" &&
                                    !isNaN(W) &&
                                    X.setAttribute(
                                        "stroke-width",
                                        W * ((Math.abs(F.a) + Math.abs(F.d)) / 2)
                                    );
                            }
                        }
                    }
                    h.clear();
                } else {
                    if (z) {
                        o = e.createSVGTransform();
                        o.setRotate(z, s.x, s.y);
                        h.numberOfItems ? h.insertItemBefore(o, 0) : h.appendItem(o);
                    }
                    h.numberOfItems == 0 && f.removeAttribute("transform");
                    return null;
                }
                if (J == 2) {
                    if (z) {
                        s = { x: o.x + G.e, y: o.y + G.f };
                        o = e.createSVGTransform();
                        o.setRotate(z, s.x, s.y);
                        h.numberOfItems ? h.insertItemBefore(o, 0) : h.appendItem(o);
                    }
                } else if (J == 3) {
                    B = Z(h).matrix;
                    G = e.createSVGTransform();
                    G.setRotate(z, o.x, o.y);
                    G = G.matrix;
                    o = e.createSVGTransform();
                    o.setRotate(z, s.x, s.y);
                    s = o.matrix.inverse();
                    W = B.inverse();
                    s = ca(W, s, G, B);
                    F = s.e;
                    B = s.f;
                    if (F != 0 || B != 0) {
                        E = f.childNodes;
                        for (g = E.length; g--;) {
                            X = E.item(g);
                            if (X.nodeType == 1) {
                                W = Ra;
                                Ra = X.getAttribute("transform");
                                S = R(X);
                                I = e.createSVGTransform();
                                I.setTranslate(F, B);
                                S.numberOfItems ? S.insertItemBefore(I, 0) : S.appendItem(I);
                                m.addSubCommand(Xa(X));
                                Ra = W;
                            }
                        }
                    }
                    if (z) h.numberOfItems ? h.insertItemBefore(o, 0) : h.appendItem(o);
                }
            } else {
                z = svgedit.utilities.getBBox(f);
                if (!z && f.tagName != "path") return null;
                B = e.createSVGMatrix();
                if ((F = qa(f))) {
                    o = { x: z.x + z.width / 2, y: z.y + z.height / 2 };
                    s = N(z.x + z.width / 2, z.y + z.height / 2, Z(h).matrix);
                    J = (F * Math.PI) / 180;
                    E = Math.abs(J) > 1.0e-10 ? Math.sin(J) / (1 - Math.cos(J)) : 2 / J;
                    for (J = 0; J < h.numberOfItems; ++J) {
                        B = h.getItem(J);
                        if (B.type == 4) {
                            B = B.matrix;
                            o.y = (E * B.e + B.f) / 2;
                            o.x = (B.e - E * B.f) / 2;
                            h.removeItem(J);
                            break;
                        }
                    }
                }
                J = 0;
                w = h.numberOfItems;
                if (!svgedit.browser.isWebkit())
                    if ((G = f.getAttribute("fill")) && G.indexOf("url(") === 0) {
                        G = Q(G);
                        W = "pattern";
                        if (G.tagName !== W) W = "gradient";
                        if (G.getAttribute(W + "Units") === "userSpaceOnUse") {
                            B = Z(h).matrix;
                            z = R(G);
                            z = Z(z).matrix;
                            B = ca(B, z);
                            z = "matrix(" + [B.a, B.b, B.c, B.d, B.e, B.f].join(",") + ")";
                            G.setAttribute(W + "Transform", z);
                        }
                    }
                if (
                    w >= 3 &&
                    h.getItem(w - 2).type == 3 &&
                    h.getItem(w - 3).type == 2 &&
                    h.getItem(w - 1).type == 2
                ) {
                    J = 3;
                    B = Z(h, w - 3, w - 1).matrix;
                    h.removeItem(w - 1);
                    h.removeItem(w - 2);
                    h.removeItem(w - 3);
                } else if (w == 4 && h.getItem(w - 1).type == 1) {
                    J = 3;
                    B = Z(h).matrix;
                    la = e.createSVGTransform();
                    la.setMatrix(B);
                    h.clear();
                    h.appendItem(la);
                    B = e.createSVGMatrix();
                } else if (
                    (w == 1 || (w > 1 && h.getItem(1).type != 3)) &&
                    h.getItem(0).type == 2
                ) {
                    J = 2;
                    G = h.getItem(0).matrix;
                    W = Z(h, 1).matrix;
                    z = W.inverse();
                    B = ca(z, G, W);
                    h.removeItem(0);
                } else if (w == 1 && h.getItem(0).type == 1 && !F) {
                    B = Z(h).matrix;
                    switch (f.tagName) {
                        case "line":
                            D = $(f).attr(["x1", "y1", "x2", "y2"]);
                        case "polyline":
                        case "polygon":
                            D.points = f.getAttribute("points");
                            if (D.points) {
                                z = f.points;
                                E = z.numberOfItems;
                                D.points = Array(E);
                                for (J = 0; J < E; ++J) {
                                    g = z.getItem(J);
                                    D.points[J] = { x: g.x, y: g.y };
                                }
                            }
                        case "path":
                            D.d = f.getAttribute("d");
                            J = 1;
                            h.clear();
                    }
                } else {
                    J = 4;
                    if (F) {
                        o = e.createSVGTransform();
                        o.setRotate(F, s.x, s.y);
                        h.numberOfItems ? h.insertItemBefore(o, 0) : h.appendItem(o);
                    }
                    h.numberOfItems == 0 && f.removeAttribute("transform");
                    return null;
                }
                if (J == 1 || J == 2 || J == 3) Ua(f, D, B);
                if (J == 2) {
                    if (F) {
                        ma(h) || (s = { x: o.x + B.e, y: o.y + B.f });
                        o = e.createSVGTransform();
                        o.setRotate(F, s.x, s.y);
                        h.numberOfItems ? h.insertItemBefore(o, 0) : h.appendItem(o);
                    }
                } else if (J == 3 && F) {
                    B = Z(h).matrix;
                    G = e.createSVGTransform();
                    G.setRotate(F, o.x, o.y);
                    G = G.matrix;
                    o = e.createSVGTransform();
                    o.setRotate(F, s.x, s.y);
                    s = o.matrix.inverse();
                    W = B.inverse();
                    s = ca(W, s, G, B);
                    Ua(f, D, s);
                    if (F) h.numberOfItems ? h.insertItemBefore(o, 0) : h.appendItem(o);
                }
            }
            h.numberOfItems == 0 && f.removeAttribute("transform");
            m.addSubCommand(new Ja(f, u));
            return m;
        }),
        ab = null,
        Ma = (this.clearSelection = function(f) {
            if (H[0] != null)
                for (var h = H.length, m = 0; m < h; ++m) {
                    var B = H[m];
                    if (B == null) break;
                    sa.releaseSelector(B);
                    H[m] = null;
                }
            f || ga("selected", H);
        }),
        Na = (this.addToSelection = function(f, h) {
            if (f.length != 0) {
                for (var m = 0; m < H.length;) {
                    if (H[m] == null) break;
                    ++m;
                }
                for (var B = f.length; B--;) {
                    var z = f[B];
                    if (z && svgedit.utilities.getBBox(z)) {
                        if (z.tagName === "a" && z.childNodes.length === 1)
                            z = z.firstChild;
                        if (H.indexOf(z) == -1) {
                            H[m] = z;
                            m++;
                            z = sa.requestSelector(z);
                            H.length > 1 && z.showGrips(false);
                        }
                    }
                }
                ga("selected", H);
                h || H.length == 1 ?
                    sa.requestSelector(H[0]).showGrips(true) :
                    sa.requestSelector(H[0]).showGrips(false);
                for (
                    H.sort(function(F, D) {
                        if (F && D && F.compareDocumentPosition)
                            return 3 - (D.compareDocumentPosition(F) & 6);
                        else if (F == null) return 1;
                    }); H[0] == null;

                )
                    H.shift(0);
            }
        }),
        sb = (this.selectOnly = function(f, h) {
            Ma(true);
            Na(f, h);
        });
    this.removeFromSelection = function(f) {
        if (H[0] != null)
            if (f.length != 0) {
                var h = Array(H.length);
                j = 0;
                len = H.length;
                for (var m = 0; m < len; ++m) {
                    var B = H[m];
                    if (B)
                        if (f.indexOf(B) == -1) {
                            h[j] = B;
                            j++;
                        } else sa.releaseSelector(B);
                }
                H = h;
            }
    };
    this.selectAllInCurrentLayer = function() {
        var f = C().getCurrentLayer();
        if (f) {
            ya = "select";
            sb($(K || f).children());
        }
    };
    var Fb = (this.getMouseTarget = function(f) {
        if (f == null || f.target == null) return null;
        f = f.target;
        if (f.correspondingUseElement) f = f.correspondingUseElement;
        if (
            [
                "http://www.w3.org/1998/Math/MathML",
                "http://www.w3.org/1999/xhtml",
            ].indexOf(f.namespaceURI) >= 0 &&
            f.id != "svgcanvas"
        )
            for (; f.nodeName != "foreignObject";) {
                f = f.parentNode;
                if (!f) return e;
            }
        var h = C().getCurrentLayer();
        if ([e, a, p, h].indexOf(f) >= 0) return e;
        if ($(f).closest("#selectorParentGroup").length)
            return sa.selectorParentGroup;
        for (; f.parentNode && f.parentNode !== (K || h);) f = f.parentNode;
        return f;
    });
    (function() {
        var f = null,
            h = null,
            m = null,
            B = null,
            z = null,
            F = {},
            D = { minx: null, miny: null, maxx: null, maxy: null };
        $(a)
            .mousedown(function(u) {
                if (!b.spaceKey) {
                    var E = u.button === 2;
                    ab = p.querySelector("g").getScreenCTM().inverse();
                    var J = N(u.pageX, u.pageY, ab),
                        g = J.x * v;
                    J = J.y * v;
                    u.preventDefault();
                    if (E) ya = "select";
                    g = g / v;
                    J = J / v;
                    var o = Fb(u);
                    if (o.tagName === "a" && o.childNodes.length === 1) o = o.firstChild;
                    var s = (B = h = g),
                        w = (z = m = J);
                    if (l.gridSnapping) {
                        g = va(g);
                        J = va(J);
                        h = va(h);
                        m = va(m);
                    }
                    if (o == sa.selectorParentGroup && H[0] != null) {
                        o = u.target;
                        var G = pb(o, "type");
                        if (G == "rotate") {
                            ya = "rotate";
                            current_rotate_mode = pb(o, "dir");
                        } else if (G == "resize") {
                            ya = "resize";
                            eb = pb(o, "dir");
                        }
                        o = H[0];
                    }
                    Ra = o.getAttribute("transform");
                    G = R(o);
                    switch (ya) {
                        case "select":
                            Fa = true;
                            eb = "none";
                            if (E) Fa = false;
                            if (o != e) {
                                if (H.indexOf(o) == -1) {
                                    u.shiftKey || Ma(true);
                                    Na([o]);
                                    ub = o;
                                    Ha.clear();
                                }
                                if (!E)
                                    for (E = 0; E < H.length; ++E)
                                        if (H[E] != null) {
                                            var I = R(H[E]);
                                            I.numberOfItems ?
                                                I.insertItemBefore(e.createSVGTransform(), 0) :
                                                I.appendItem(e.createSVGTransform());
                                        }
                            } else if (!E) {
                                Ma();
                                ya = "multiselect";
                                if (La == null) La = sa.getRubberBandBox();
                                B *= v;
                                z *= v;
                                na(
                                    La, { x: B, y: z, width: 0, height: 0, display: "inline" },
                                    100
                                );
                            }
                            break;
                        case "zoom":
                            Fa = true;
                            if (La == null) La = sa.getRubberBandBox();
                            na(
                                La, { x: s * v, y: s * v, width: 0, height: 0, display: "inline" },
                                100
                            );
                            break;
                        case "resize":
                            Fa = true;
                            h = g;
                            m = J;
                            F = svgedit.utilities.getBBox($("#selectedBox0")[0]);
                            var M = {};
                            $.each(F, function(T, X) {
                                M[T] = X / v;
                            });
                            F = M;
                            E = qa(o) ? 1 : 0;
                            if (ma(G)) {
                                G.insertItemBefore(e.createSVGTransform(), E);
                                G.insertItemBefore(e.createSVGTransform(), E);
                                G.insertItemBefore(e.createSVGTransform(), E);
                            } else {
                                G.appendItem(e.createSVGTransform());
                                G.appendItem(e.createSVGTransform());
                                G.appendItem(e.createSVGTransform());
                                if (svgedit.browser.supportsNonScalingStroke()) {
                                    if ((g = svgedit.browser.isWebkit()))
                                        I = function(T) {
                                            var X = T.getAttributeNS(null, "stroke");
                                            T.removeAttributeNS(null, "stroke");
                                            setTimeout(function() {
                                                T.setAttributeNS(null, "stroke", X);
                                            }, 0);
                                        };
                                    o.style.vectorEffect = "non-scaling-stroke";
                                    g && I(o);
                                    J = o.getElementsByTagName("*");
                                    s = J.length;
                                    for (E = 0; E < s; E++) {
                                        J[E].style.vectorEffect = "non-scaling-stroke";
                                        g && I(J[E]);
                                    }
                                }
                            }
                            break;
                        case "fhellipse":
                        case "fhrect":
                        case "fhpath":
                            Fa = true;
                            f = s + "," + w + " ";
                            I = L.stroke_width == 0 ? 1 : L.stroke_width;
                            V({
                                element: "polyline",
                                curStyles: true,
                                attr: {
                                    points: f,
                                    id: Y(),
                                    fill: "none",
                                    opacity: L.opacity / 2,
                                    "stroke-linecap": "round",
                                    style: "pointer-events:none",
                                },
                            });
                            D.minx = s;
                            D.maxx = s;
                            D.miny = w;
                            D.maxy = w;
                            break;
                        case "image":
                            Fa = true;
                            I = V({
                                element: "image",
                                attr: {
                                    x: g,
                                    y: J,
                                    width: 0,
                                    height: 0,
                                    id: Y(),
                                    opacity: L.opacity / 2,
                                    style: "pointer-events:inherit",
                                },
                            });
                            aa(I, Ya);
                            zb(I);
                            break;
                        case "square":
                        case "rect":
                            Fa = true;
                            h = g;
                            m = J;
                            V({
                                element: "rect",
                                curStyles: true,
                                attr: {
                                    x: g,
                                    y: J,
                                    width: 0,
                                    height: 0,
                                    id: Y(),
                                    opacity: L.opacity / 2,
                                },
                            });
                            break;
                        case "line":
                            Fa = true;
                            I = L.stroke_width == 0 ? 1 : L.stroke_width;
                            V({
                                element: "line",
                                curStyles: true,
                                attr: {
                                    x1: g,
                                    y1: J,
                                    x2: g,
                                    y2: J,
                                    id: Y(),
                                    stroke: L.stroke,
                                    "stroke-width": I,
                                    "stroke-dasharray": L.stroke_dasharray,
                                    "stroke-linejoin": L.stroke_linejoin,
                                    "stroke-linecap": L.stroke_linecap,
                                    "stroke-opacity": L.stroke_opacity,
                                    fill: "none",
                                    opacity: L.opacity / 2,
                                    style: "pointer-events:none",
                                },
                            });
                            break;
                        case "circle":
                            Fa = true;
                            V({
                                element: "circle",
                                curStyles: true,
                                attr: { cx: g, cy: J, r: 0, id: Y(), opacity: L.opacity / 2 },
                            });
                            break;
                        case "ellipse":
                            Fa = true;
                            V({
                                element: "ellipse",
                                curStyles: true,
                                attr: {
                                    cx: g,
                                    cy: J,
                                    rx: 0,
                                    ry: 0,
                                    id: Y(),
                                    opacity: L.opacity / 2,
                                },
                            });
                            break;
                        case "text":
                            Fa = true;
                            V({
                                element: "text",
                                curStyles: true,
                                attr: {
                                    x: g,
                                    y: J,
                                    id: Y(),
                                    fill: $a.fill,
                                    "stroke-width": $a.stroke_width,
                                    "font-size": $a.font_size,
                                    "font-family": $a.font_family,
                                    "text-anchor": "start",
                                    "xml:space": "preserve",
                                    opacity: L.opacity,
                                },
                            });
                            break;
                        case "path":
                        case "pathedit":
                            h *= v;
                            m *= v;
                            Ha.mouseDown(u, o, h, m);
                            Fa = true;
                            break;
                        case "textedit":
                            h *= v;
                            m *= v;
                            bb.mouseDown(u, o, h, m);
                            Fa = true;
                            break;
                        case "rotate":
                            Fa = true;
                            b.undoMgr.beginUndoableChange("transform", H);
                            document.getElementById("workarea").className = "rotate";
                    }
                    I = rb(
                        "mouseDown", { event: u, start_x: h, start_y: m, selectedElements: H },
                        true
                    );
                    $.each(I, function(T, X) {
                        if (X && X.started) Fa = true;
                    });
                    if (ya)
                        document.getElementById("workarea").className =
                        ya == "resize" ? u.target.style.cursor : ya;
                }
            })
            .mousemove(function(u) {
                if (!(u.originalEvent.touches && u.originalEvent.touches.length > 1))
                    if (Fa)
                        if (!(u.button === 1 || b.spaceKey)) {
                            var E = H[0],
                                J = N(u.pageX, u.pageY, ab),
                                g = J.x * v;
                            J = J.y * v;
                            var o = pa(ia()),
                                s = (x = g / v),
                                w = (y = J / v);
                            if (l.gridSnapping) {
                                x = va(x);
                                y = va(y);
                            }
                            u.preventDefault();
                            switch (ya) {
                                case "select":
                                    if (H[0] !== null) {
                                        s = x - h;
                                        var G = y - m;
                                        if (l.gridSnapping) {
                                            s = va(s);
                                            G = va(G);
                                        }
                                        if (u.shiftKey) {
                                            var I = U(h, m, x, y);
                                            x = I.x;
                                            y = I.y;
                                        }
                                        if (s != 0 || G != 0) {
                                            w = H.length;
                                            for (var M = 0; M < w; ++M) {
                                                E = H[M];
                                                if (E == null) break;
                                                var T = e.createSVGTransform();
                                                o = R(E);
                                                if (I) {
                                                    s = I.x - h;
                                                    G = I.y - m;
                                                }
                                                T.setTranslate(s, G);
                                                o.numberOfItems ? o.replaceItem(T, 0) : o.appendItem(T);
                                                sa.requestSelector(E).resize();
                                            }
                                            if (u.altKey)
                                                if (!b.addClones) {
                                                    b.addClones = b.cloneSelectedElements(0, 0, T);
                                                    b.removeClones = function() {
                                                        b.addClones &&
                                                            b.addClones.forEach(function(ta) {
                                                                ta.parentNode && ta.parentNode.removeChild(ta);
                                                                b.addClones = false;
                                                            });
                                                    };
                                                    window.addEventListener("keyup", b.removeClones);
                                                }
                                            ga("transition", H);
                                        }
                                    }
                                    break;
                                case "multiselect":
                                    s *= v;
                                    w *= v;
                                    na(
                                        La, {
                                            x: Math.min(B, s),
                                            y: Math.min(z, w),
                                            width: Math.abs(s - B),
                                            height: Math.abs(w - z),
                                        },
                                        100
                                    );
                                    o = [];
                                    s = [];
                                    I = gb();
                                    w = H.length;
                                    for (M = 0; M < w; ++M) {
                                        G = I.indexOf(H[M]);
                                        if (G == -1) o.push(H[M]);
                                        else I[G] = null;
                                    }
                                    w = I.length;
                                    for (M = 0; M < w; ++M) I[M] && s.push(I[M]);
                                    o.length > 0 && b.removeFromSelection(o);
                                    s.length > 0 && Na(s);
                                    break;
                                case "resize":
                                    o = R(E);
                                    s = (I = ma(o)) ? F : svgedit.utilities.getBBox(E);
                                    w = s.x;
                                    M = s.y;
                                    var X = s.width,
                                        S = s.height;
                                    s = x - h;
                                    G = y - m;
                                    if (l.gridSnapping) {
                                        s = va(s);
                                        G = va(G);
                                        S = va(S);
                                        X = va(X);
                                    }
                                    if ((T = qa(E))) {
                                        var W = Math.sqrt(s * s + G * G);
                                        G = Math.atan2(G, s) - (T * Math.PI) / 180;
                                        s = W * Math.cos(G);
                                        G = W * Math.sin(G);
                                    }
                                    if (eb.indexOf("n") == -1 && eb.indexOf("s") == -1) G = 0;
                                    if (eb.indexOf("e") == -1 && eb.indexOf("w") == -1) s = 0;
                                    var ha = (W = 0),
                                        la = S ? (S + G) / S : 1,
                                        ea = X ? (X + s) / X : 1;
                                    if (eb.indexOf("n") >= 0) {
                                        la = S ? (S - G) / S : 1;
                                        ha = S;
                                    }
                                    if (eb.indexOf("w") >= 0) {
                                        ea = X ? (X - s) / X : 1;
                                        W = X;
                                    }
                                    s = e.createSVGTransform();
                                    G = e.createSVGTransform();
                                    X = e.createSVGTransform();
                                    if (l.gridSnapping) {
                                        w = va(w);
                                        W = va(W);
                                        M = va(M);
                                        ha = va(ha);
                                    }
                                    s.setTranslate(-(w + W), -(M + ha));
                                    if (u.shiftKey)
                                        if (ea == 1) ea = la;
                                        else la = ea;
                                    G.setScale(ea, la);
                                    X.setTranslate(w + W, M + ha);
                                    if (I) {
                                        I = T ? 1 : 0;
                                        o.replaceItem(s, 2 + I);
                                        o.replaceItem(G, 1 + I);
                                        o.replaceItem(X, 0 + I);
                                    } else {
                                        I = o.numberOfItems;
                                        o.replaceItem(X, I - 3);
                                        o.replaceItem(G, I - 2);
                                        o.replaceItem(s, I - 1);
                                    }
                                    sa.requestSelector(E).resize();
                                    ga("transition", H);
                                    break;
                                case "zoom":
                                    s *= v;
                                    w *= v;
                                    na(
                                        La, {
                                            x: Math.min(B * v, s),
                                            y: Math.min(z * v, w),
                                            width: Math.abs(s - B * v),
                                            height: Math.abs(w - z * v),
                                        },
                                        100
                                    );
                                    break;
                                case "text":
                                    na(o, { x: x, y: y }, 1e3);
                                    break;
                                case "line":
                                    if (l.gridSnapping) {
                                        x = va(x);
                                        y = va(y);
                                    }
                                    s = x;
                                    I = y;
                                    if (u.shiftKey) {
                                        I = U(h, m, s, I);
                                        s = I.x;
                                        I = I.y;
                                    }
                                    o.setAttributeNS(null, "x2", s);
                                    o.setAttributeNS(null, "y2", I);
                                    break;
                                case "foreignObject":
                                case "square":
                                case "rect":
                                case "image":
                                    s = Math.abs(x - h);
                                    I = Math.abs(y - m);
                                    if (ya == "square" || u.shiftKey) {
                                        s = I = Math.max(s, I);
                                        w = h < x ? h : h - s;
                                        M = m < y ? m : m - I;
                                    } else {
                                        w = Math.min(h, x);
                                        M = Math.min(m, y);
                                    }
                                    if (u.altKey) {
                                        s *= 2;
                                        I *= 2;
                                        w = h - s / 2;
                                        M = m - I / 2;
                                    }
                                    if (l.gridSnapping) {
                                        s = va(s);
                                        I = va(I);
                                        w = va(w);
                                        M = va(M);
                                    }
                                    na(o, { width: s, height: I, x: w, y: M }, 1e3);
                                    break;
                                case "circle":
                                    s = $(o).attr(["cx", "cy"]);
                                    I = s.cx;
                                    w = s.cy;
                                    s = Math.sqrt((x - I) * (x - I) + (y - w) * (y - w));
                                    if (l.gridSnapping) s = va(s);
                                    o.setAttributeNS(null, "r", s);
                                    break;
                                case "ellipse":
                                    s = $(o).attr(["cx", "cy"]);
                                    I = Math.abs(h + (x - h) / 2);
                                    w = Math.abs(m + (y - m) / 2);
                                    if (l.gridSnapping) {
                                        x = va(x);
                                        I = va(I);
                                        y = va(y);
                                        w = va(w);
                                    }
                                    s = Math.abs(h - I);
                                    M = Math.abs(m - w);
                                    if (u.shiftKey) {
                                        M = s;
                                        w = y > m ? m + s : m - s;
                                    }
                                    if (u.altKey) {
                                        I = h;
                                        w = m;
                                        s = Math.abs(x - I);
                                        M = u.shiftKey ? s : Math.abs(y - w);
                                    }
                                    o.setAttributeNS(null, "rx", s);
                                    o.setAttributeNS(null, "ry", M);
                                    o.setAttributeNS(null, "cx", I);
                                    o.setAttributeNS(null, "cy", w);
                                    break;
                                case "fhellipse":
                                case "fhrect":
                                    D.minx = Math.min(s, D.minx);
                                    D.maxx = Math.max(s, D.maxx);
                                    D.miny = Math.min(w, D.miny);
                                    D.maxy = Math.max(w, D.maxy);
                                case "fhpath":
                                    f += +s + "," + w + " ";
                                    o.setAttributeNS(null, "points", f);
                                    break;
                                case "path":
                                case "pathedit":
                                    x *= v;
                                    y *= v;
                                    if (l.gridSnapping) {
                                        x = va(x);
                                        y = va(y);
                                        h = va(h);
                                        m = va(m);
                                    }
                                    if (u.shiftKey) {
                                        if ((I = svgedit.path.path)) {
                                            o = I.dragging ? I.dragging[0] : h;
                                            I = I.dragging ? I.dragging[1] : m;
                                        } else {
                                            o = h;
                                            I = m;
                                        }
                                        I = U(o, I, x, y);
                                        x = I.x;
                                        y = I.y;
                                    }
                                    if (La && La.getAttribute("display") !== "none") {
                                        s *= v;
                                        w *= v;
                                        na(
                                            La, {
                                                x: Math.min(B * v, s),
                                                y: Math.min(z * v, w),
                                                width: Math.abs(s - B * v),
                                                height: Math.abs(w - z * v),
                                            },
                                            100
                                        );
                                    }
                                    Ha.mouseMove(u, x, y);
                                    break;
                                case "textedit":
                                    x *= v;
                                    y *= v;
                                    bb.mouseMove(g, J);
                                    break;
                                case "rotate":
                                    s = svgedit.utilities.getBBox(E);
                                    I = s.x + s.width / 2;
                                    w = s.y + s.height / 2;
                                    o = fa(E);
                                    o = N(I, w, o);
                                    I = o.x;
                                    w = o.y;
                                    o = s.x;
                                    M = s.y;
                                    if (current_rotate_mode == "nw") o = s.x + s.width;
                                    if (current_rotate_mode == "se") M = s.y + s.height;
                                    if (current_rotate_mode == "sw") {
                                        o = s.x + s.width;
                                        M = s.y + s.height;
                                    }
                                    compensation_angle =
                                        (Math.atan2(w - M, I - o) * (180 / Math.PI) - 90) % 360;
                                    T = (Math.atan2(w - y, I - x) * (180 / Math.PI) - 90) % 360;
                                    T += compensation_angle;
                                    if (l.gridSnapping) T = va(T);
                                    if (u.shiftKey) T = Math.round(T / 45) * 45;
                                    b.setRotationAngle(T < -180 ? 360 + T : T, true);
                                    ga("transition", H);
                            }
                            rb("mouseMove", {
                                event: u,
                                mouse_x: g,
                                mouse_y: J,
                                selected: E,
                            });
                        }
            })
            .click(function(u) {
                u.preventDefault();
                return false;
            })
            .dblclick(function(u) {
                var E = u.target.parentNode,
                    J = Fb(u),
                    g = J.tagName;
                if (E !== K) {
                    if (g === "text" && ya !== "textedit") {
                        u = N(u.pageX, u.pageY, ab);
                        bb.select(J, u.x, u.y);
                    }
                    if ((g === "g" || g === "a") && qa(J)) {
                        Ab(J);
                        J = H[0];
                        Ma(true);
                    }
                    K && Bb();
                    (E.tagName !== "g" && E.tagName !== "a") ||
                    E === C().getCurrentLayer() ||
                        J === sa.selectorParentGroup ||
                        Nb(J);
                }
            })
            .mouseup(function(u) {
                b.addClones = false;
                window.removeEventListener("keyup", b.removeClones);
                H = H.filter(Boolean);
                if (u.button !== 2) {
                    var E = ub;
                    ub = null;
                    if (Fa) {
                        var J = N(u.pageX, u.pageY, ab),
                            g = J.x * v;
                        J = J.y * v;
                        var o = g / v,
                            s = J / v,
                            w = pa(ia()),
                            G = false;
                        Fa = false;
                        switch (ya) {
                            case "resize":
                            case "multiselect":
                                if (La != null) {
                                    La.setAttribute("display", "none");
                                    Ga = [];
                                }
                                ya = "select";
                            case "select":
                                if (H[0] != null) {
                                    if (H.length == 1) {
                                        g = H[0];
                                        switch (g.tagName) {
                                            case "g":
                                            case "use":
                                            case "image":
                                            case "foreignObject":
                                                break;
                                            default:
                                                Sa.fill = g.getAttribute("fill");
                                                Sa.fill_opacity = g.getAttribute("fill-opacity");
                                                Sa.stroke = g.getAttribute("stroke");
                                                Sa.stroke_opacity = g.getAttribute("stroke-opacity");
                                                Sa.stroke_width = g.getAttribute("stroke-width");
                                                Sa.stroke_dasharray = g.getAttribute(
                                                    "stroke-dasharray"
                                                );
                                                Sa.stroke_linejoin = g.getAttribute("stroke-linejoin");
                                                Sa.stroke_linecap = g.getAttribute("stroke-linecap");
                                        }
                                        if (g.tagName == "text") {
                                            $a.font_size = g.getAttribute("font-size");
                                            $a.font_family = g.getAttribute("font-family");
                                        }
                                        sa.requestSelector(g).showGrips(true);
                                    }
                                    ba();
                                    B = B;
                                    z = z;
                                    g = Math.abs(s - z);
                                    if (g > 1 || g > 1) {
                                        u = H.length;
                                        for (g = 0; g < u; ++g) {
                                            if (H[g] == null) break;
                                            H[g].firstChild || sa.requestSelector(H[g]).resize();
                                        }
                                    } else {
                                        g = u.target;
                                        if (H[0].nodeName === "path" && H[1] == null)
                                            Ha.select(H[0]);
                                        else u.shiftKey && E != g && b.removeFromSelection([g]);
                                    }
                                    if (svgedit.browser.supportsNonScalingStroke())
                                        if ((u = H[0])) {
                                            u.removeAttribute("style");
                                            svgedit.utilities.walkTree(u, function(T) {
                                                T.removeAttribute("style");
                                            });
                                        }
                                }
                                return;
                            case "zoom":
                                La != null && La.setAttribute("display", "none");
                                ga("zoomed", {
                                    x: Math.min(B, o),
                                    y: Math.min(z, s),
                                    width: Math.abs(o - B),
                                    height: Math.abs(s - z),
                                    factor: u.altKey ? 0.5 : 2,
                                });
                                return;
                            case "fhpath":
                                E = w.getAttribute("points");
                                s = E.indexOf(",");
                                if (
                                    (G =
                                        s >= 0 ?
                                        E.indexOf(",", s + 1) >= 0 :
                                        E.indexOf(" ", E.indexOf(" ") + 1) >= 0)
                                )
                                    w = Ha.smoothPolylineIntoPath(w);
                                break;
                            case "line":
                                E = $(w).attr(["x1", "x2", "y1", "y2"]);
                                G = E.x1 != E.x2 || E.y1 != E.y2;
                                break;
                            case "foreignObject":
                            case "square":
                            case "rect":
                            case "image":
                                E = $(w).attr(["width", "height"]);
                                G = E.width != 0 || E.height != 0 || ya === "image";
                                break;
                            case "circle":
                                G = w.getAttribute("r") != 0;
                                break;
                            case "ellipse":
                                E = $(w).attr(["rx", "ry"]);
                                G = E.rx != null || E.ry != null;
                                break;
                            case "fhellipse":
                                if (D.maxx - D.minx > 0 && D.maxy - D.miny > 0) {
                                    w = V({
                                        element: "ellipse",
                                        curStyles: true,
                                        attr: {
                                            cx: (D.minx + D.maxx) / 2,
                                            cy: (D.miny + D.maxy) / 2,
                                            rx: (D.maxx - D.minx) / 2,
                                            ry: (D.maxy - D.miny) / 2,
                                            id: ia(),
                                        },
                                    });
                                    ga("changed", [w]);
                                    G = true;
                                }
                                break;
                            case "fhrect":
                                if (D.maxx - D.minx > 0 && D.maxy - D.miny > 0) {
                                    w = V({
                                        element: "rect",
                                        curStyles: true,
                                        attr: {
                                            x: D.minx,
                                            y: D.miny,
                                            width: D.maxx - D.minx,
                                            height: D.maxy - D.miny,
                                            id: ia(),
                                        },
                                    });
                                    ga("changed", [w]);
                                    G = true;
                                }
                                break;
                            case "text":
                                G = true;
                                sb([w]);
                                bb.start(w);
                                break;
                            case "path":
                                w = null;
                                Fa = true;
                                E = Ha.mouseUp(u, w, g, J);
                                w = E.element;
                                G = E.keep;
                                break;
                            case "pathedit":
                                G = true;
                                w = null;
                                Ha.mouseUp(u);
                                break;
                            case "textedit":
                                G = false;
                                w = null;
                                bb.mouseUp(u, g, J);
                                break;
                            case "rotate":
                                G = true;
                                w = null;
                                ya = "select";
                                E = b.undoMgr.finishUndoableChange();
                                E.isEmpty() || wa(E);
                                ba();
                                ga("changed", H);
                        }
                        g = rb("mouseUp", { event: u, mouse_x: g, mouse_y: J }, true);
                        $.each(g, function(T, X) {
                            if (X) {
                                G = X.keep || G;
                                w = X.element;
                                Fa = X.started || Fa;
                            }
                        });
                        if (!G && w != null) {
                            C().releaseId(ia());
                            w.parentNode.removeChild(w);
                            w = null;
                            for (g = u.target; g.parentNode.parentNode.tagName == "g";)
                                g = g.parentNode;
                            if (
                                (ya != "path" || !drawn_path) &&
                                g.parentNode.id != "selectorParentGroup" &&
                                g.id != "svgcanvas" &&
                                g.id != "svgroot"
                            ) {
                                b.setMode("select");
                                sb([g], true);
                            }
                        } else if (w != null) {
                            b.addedNew = true;
                            u = 0.2;
                            var I;
                            if (
                                false.beginElement &&
                                w.getAttribute("opacity") != L.opacity
                            ) {
                                I = $(false)
                                    .clone()
                                    .attr({ to: L.opacity, dur: u })
                                    .appendTo(w);
                                try {
                                    I[0].beginElement();
                                } catch (M) {}
                            } else u = 0;
                            setTimeout(function() {
                                I && I.remove();
                                w.setAttribute("opacity", L.opacity);
                                w.setAttribute("style", "pointer-events:inherit");
                                oa(w);
                                if (ya === "path") Ha.toEditMode(w);
                                else l.selectNew && sb([w], true);
                                wa(new Wa(w));
                                ga("changed", [w]);
                            }, u * 1e3);
                        }
                        Ra = null;
                    }
                }
            });
        $(a).bind("mousewheel DOMMouseScroll", function(u) {
            if (u.shiftKey) {
                u.preventDefault();
                ab = p.getScreenCTM().inverse();
                var E = N(u.pageX, u.pageY, ab);
                E = { x: E.x, y: E.y, width: 0, height: 0 };
                if (u.wheelDelta)
                    if (u.wheelDelta >= 120) E.factor = 2;
                    else {
                        if (u.wheelDelta <= -120) E.factor = 0.5;
                    }
                else if (u.detail)
                    if (u.detail > 0) E.factor = 0.5;
                    else if (u.detail < 0) E.factor = 2;
                E.factor && ga("zoomed", E);
            }
        });
    })();
    var zb = function(f) {
            $(f).click(function(h) {
                h.preventDefault();
            });
        },
        bb = (b.textActions = (function() {
            function f(S) {
                var W = J.value === "";
                $(J).focus();
                if (!arguments.length)
                    if (W) S = 0;
                    else {
                        if (J.selectionEnd !== J.selectionStart) return;
                        S = J.selectionEnd;
                    }
                var ha;
                ha = w[S];
                W || J.setSelectionRange(S, S);
                g = pa("text_cursor");
                if (!g) {
                    g = document.createElementNS(c, "line");
                    na(g, { id: "text_cursor", stroke: "#333", "stroke-width": 1 });
                    g = pa("selectorParentGroup").appendChild(g);
                }
                s ||
                    (s = setInterval(function() {
                        var la = g.getAttribute("display") === "none";
                        g.setAttribute("display", la ? "inline" : "none");
                    }, 600));
                W = F(ha.x, G.y);
                ha = F(ha.x, G.y + G.height);
                na(g, {
                    x1: W.x,
                    y1: W.y,
                    x2: ha.x,
                    y2: ha.y,
                    visibility: "visible",
                    display: "inline",
                });
                o && o.setAttribute("d", "M 0 0");
            }

            function h(S, W, ha) {
                if (S === W) f(W);
                else {
                    ha || J.setSelectionRange(S, W);
                    o = pa("text_selectblock");
                    if (!o) {
                        o = document.createElementNS(c, "path");
                        na(o, {
                            id: "text_selectblock",
                            fill: "green",
                            opacity: 0.5,
                            style: "pointer-events:none",
                        });
                        pa("selectorParentGroup").appendChild(o);
                    }
                    S = w[S];
                    var la = w[W];
                    g.setAttribute("visibility", "hidden");
                    W = F(S.x, G.y);
                    ha = F(S.x + (la.x - S.x), G.y);
                    var ea = F(S.x, G.y + G.height);
                    S = F(S.x + (la.x - S.x), G.y + G.height);
                    na(o, {
                        d: "M" +
                            W.x +
                            "," +
                            W.y +
                            " L" +
                            ha.x +
                            "," +
                            ha.y +
                            " " +
                            S.x +
                            "," +
                            S.y +
                            " " +
                            ea.x +
                            "," +
                            ea.y +
                            "z",
                        display: "inline",
                    });
                }
            }

            function m(S, W) {
                var ha = e.createSVGPoint();
                ha.x = S;
                ha.y = W;
                if (w.length == 1) return 0;
                ha = E.getCharNumAtPosition(ha);
                if (ha < 0) {
                    ha = w.length - 2;
                    if (S <= w[0].x) ha = 0;
                } else if (ha >= w.length - 2) ha = w.length - 2;
                var la = w[ha];
                S > la.x + la.width / 2 && ha++;
                return ha;
            }

            function B(S, W, ha) {
                var la = J.selectionStart;
                S = m(S, W);
                h(Math.min(la, S), Math.max(la, S), !ha);
            }

            function z(S, W) {
                var ha = { x: S, y: W };
                ha.x /= v;
                ha.y /= v;
                if (I) {
                    var la = N(ha.x, ha.y, I.inverse());
                    ha.x = la.x;
                    ha.y = la.y;
                }
                return ha;
            }

            function F(S, W) {
                var ha = { x: S, y: W };
                if (I) {
                    var la = N(ha.x, ha.y, I);
                    ha.x = la.x;
                    ha.y = la.y;
                }
                ha.x *= v;
                ha.y *= v;
                return ha;
            }

            function D(S) {
                h(0, E.textContent.length);
                $(this).unbind(S);
            }

            function u(S) {
                if (X && E) {
                    var W = N(S.pageX, S.pageY, ab);
                    W = z(W.x * v, W.y * v);
                    W = m(W.x, W.y);
                    var ha = E.textContent,
                        la = ha.substr(0, W).replace(/[a-z0-9]+$/i, "").length;
                    ha = ha.substr(W).match(/^[a-z0-9]+/i);
                    h(la, (ha ? ha[0].length : 0) + W);
                    $(S.target).click(D);
                    setTimeout(function() {
                        $(S.target).unbind("click", D);
                    }, 300);
                }
            }
            var E,
                J,
                g,
                o,
                s,
                w = [],
                G,
                I,
                M,
                T,
                X;
            return {
                select: function(S, W, ha) {
                    E = S;
                    bb.toEditMode(W, ha);
                },
                start: function(S) {
                    E = S;
                    bb.toEditMode();
                },
                mouseDown: function(S, W, ha, la) {
                    S = z(ha, la);
                    J.focus();
                    f(m(S.x, S.y));
                    M = ha;
                    T = la;
                },
                mouseMove: function(S, W) {
                    var ha = z(S, W);
                    B(ha.x, ha.y);
                },
                mouseUp: function(S, W, ha) {
                    var la = z(W, ha);
                    B(la.x, la.y, true);
                    S.target !== E &&
                        W < M + 2 &&
                        W > M - 2 &&
                        ha < T + 2 &&
                        ha > T - 2 &&
                        bb.toSelectMode(true);
                },
                setCursor: f,
                toEditMode: function(S, W) {
                    sb([E], false);
                    X = false;
                    ya = "textedit";
                    sa.requestSelector(E).showGrips(false);
                    sa.requestSelector(E);
                    bb.init();
                    $(E).css("cursor", "text");
                    if (arguments.length) {
                        var ha = z(S, W);
                        f(m(ha.x, ha.y));
                    } else f();
                    setTimeout(function() {
                        X = true;
                    }, 300);
                },
                toSelectMode: function(S) {
                    ya = "select";
                    clearInterval(s);
                    s = null;
                    o && $(o).attr("display", "none");
                    g && $(g).attr("visibility", "hidden");
                    $(E).css("cursor", "move");
                    if (S) {
                        Ma();
                        $(E).css("cursor", "move");
                        ga("selected", [E]);
                        Na([E], true);
                    }
                    E && !E.textContent.length && b.deleteSelectedElements();
                    $(J).blur();
                    E = false;
                },
                setInputElem: function(S) {
                    J = S;
                },
                clear: function() {
                    ya == "textedit" && bb.toSelectMode();
                },
                init: function() {
                    if (E) {
                        if (!E.parentNode) {
                            E = H[0];
                            sa.requestSelector(E).showGrips(false);
                        }
                        var S = E.textContent.length,
                            W = E.getAttribute("transform");
                        G = svgedit.utilities.getBBox(E);
                        I = W ? fa(E) : null;
                        w = Array(S);
                        J.focus();
                        $(E).unbind("dblclick", u).dblclick(u);
                        if (!S) var ha = { x: G.x + G.width / 2, width: 0 };
                        for (W = 0; W < S; W++) {
                            var la = E.getStartPositionOfChar(W);
                            ha = E.getEndPositionOfChar(W);
                            if (!svgedit.browser.supportsGoodTextCharPos()) {
                                var ea = b.contentW * v;
                                la.x -= ea;
                                ha.x -= ea;
                                la.x /= v;
                                ha.x /= v;
                            }
                            w[W] = { x: la.x, y: G.y, width: ha.x - la.x, height: G.height };
                        }
                        w.push({ x: ha.x, width: 0 });
                        h(J.selectionStart, J.selectionEnd, true);
                    }
                },
            };
        })()),
        Ha = (b.pathActions = (function() {
            var f = false,
                h,
                m,
                B;
            svgedit.path.Path.prototype.endChanges = function(D) {
                if (svgedit.browser.isWebkit()) {
                    var u = this.elem;
                    u.setAttribute("d", Ha.convertPath(u));
                }
                D = new Ja(this.elem, { d: this.last_d }, D);
                wa(D);
                ga("changed", [this.elem]);
            };
            svgedit.path.Path.prototype.addPtsToSelection = function(D) {
                $.isArray(D) || (D = [D]);
                for (var u = 0; u < D.length; u++) {
                    var E = D[u],
                        J = this.segs[E];
                    J.ptgrip &&
                        this.selected_pts.indexOf(E) == -1 &&
                        E >= 0 &&
                        this.selected_pts.push(E);
                }
                this.selected_pts.sort();
                u = this.selected_pts.length;
                for (D = Array(u); u--;) {
                    J = this.segs[this.selected_pts[u]];
                    J.select(true);
                    D[u] = J.ptgrip;
                }
                Ha.canDeleteNodes = true;
                Ha.closed_subpath = this.subpathIsClosed(this.selected_pts[0]);
                ga("selected", D);
            };
            var z = (h = null),
                F = false;
            this.lastCtrlPoint = [0, 0];
            return {
                mouseDown: function(D, u, E, J) {
                    if (ya === "path") {
                        mouse_x = E;
                        mouse_y = J;
                        E = mouse_x / v;
                        u = mouse_y / v;
                        J = pa("path_stretch_line");
                        m = [E, u];
                        if (l.gridSnapping) {
                            E = va(E);
                            u = va(u);
                            mouse_x = va(mouse_x);
                            mouse_y = va(mouse_y);
                        }
                        if (!J) {
                            J = document.createElementNS(c, "path");
                            na(J, {
                                id: "path_stretch_line",
                                stroke: "#22C",
                                "stroke-width": "0.5",
                                fill: "none",
                            });
                            J = pa("selectorParentGroup").appendChild(J);
                        }
                        J.setAttribute("display", "inline");
                        this.stretchy = J;
                        var g = null;
                        if (z) {
                            g = z.pathSegList;
                            for (var o = g.numberOfItems, s = 6 / v, w = false; o;) {
                                o--;
                                var G = g.getItem(o),
                                    I = G.x;
                                G = G.y;
                                if (E >= I - s && E <= I + s && u >= G - s && u <= G + s) {
                                    w = true;
                                    break;
                                }
                            }
                            s = ia();
                            svgedit.path.removePath_(s);
                            s = pa(s);
                            I = g.numberOfItems;
                            if (w) {
                                if (o <= 1 && I >= 2) {
                                    E = g.getItem(0).x;
                                    u = g.getItem(0).y;
                                    o = svgedit.path.first_grip ?
                                        svgedit.path.first_grip[0] / v :
                                        g.getItem(0).x;
                                    w = svgedit.path.first_grip ?
                                        svgedit.path.first_grip[1] / v :
                                        g.getItem(0).y;
                                    D = J.pathSegList.getItem(1);
                                    D =
                                        D.pathSegType === 4 ?
                                        z.createSVGPathSegLinetoAbs(E, u) :
                                        z.createSVGPathSegCurvetoCubicAbs(
                                            E,
                                            u,
                                            D.x1 / v,
                                            D.y1 / v,
                                            o,
                                            w
                                        );
                                    E = z.createSVGPathSegClosePath();
                                    g.appendItem(D);
                                    g.appendItem(E);
                                } else if (I < 3) return (g = false);
                                $(J).remove();
                                element = s;
                                z = null;
                                Fa = false;
                                if (f) {
                                    svgedit.path.path.matrix &&
                                        Ua(s, {}, svgedit.path.path.matrix.inverse());
                                    E = s.getAttribute("d");
                                    J = $(svgedit.path.path.elem).attr("d");
                                    $(svgedit.path.path.elem).attr("d", J + E);
                                    $(s).remove();
                                    svgedit.path.path.matrix && svgedit.path.recalcRotatedPath();
                                    svgedit.path.path.init();
                                    Ha.toEditMode(svgedit.path.path.elem);
                                    svgedit.path.path.selectPt();
                                    return false;
                                }
                            } else {
                                if (!$.contains(a, Fb(D))) {
                                    console.log("Clicked outside canvas");
                                    return false;
                                }
                                g = z.pathSegList.numberOfItems;
                                o = z.pathSegList.getItem(g - 1);
                                s = o.x;
                                o = o.y;
                                if (D.shiftKey) {
                                    u = U(s, o, E, u);
                                    E = u.x;
                                    u = u.y;
                                }
                                D = J.pathSegList.getItem(1);
                                D =
                                    D.pathSegType === 4 ?
                                    z.createSVGPathSegLinetoAbs(kb(E), kb(u)) :
                                    z.createSVGPathSegCurvetoCubicAbs(
                                        kb(E),
                                        kb(u),
                                        D.x1 / v,
                                        D.y1 / v,
                                        D.x2 / v,
                                        D.y2 / v
                                    );
                                z.pathSegList.appendItem(D);
                                E *= v;
                                u *= v;
                                J.setAttribute("d", ["M", E, u, E, u].join(" "));
                                J = svgedit.path.addCtrlGrip("1c1");
                                D = svgedit.path.addCtrlGrip("0c2");
                                s = svgedit.path.getCtrlLine(1);
                                o = svgedit.path.getCtrlLine(2);
                                J.setAttribute("cx", E);
                                J.setAttribute("cy", u);
                                D.setAttribute("cx", E);
                                D.setAttribute("cy", u);
                                s.setAttribute("x1", E);
                                s.setAttribute("x2", E);
                                s.setAttribute("y1", u);
                                s.setAttribute("y2", u);
                                o.setAttribute("x1", E);
                                o.setAttribute("x2", E);
                                o.setAttribute("y1", u);
                                o.setAttribute("y2", u);
                                J = g;
                                if (f) J += svgedit.path.path.segs.length;
                                svgedit.path.addPointGrip(J, E, u);
                            }
                            g = true;
                        } else {
                            d_attr = "M" + E + "," + u + " ";
                            z = V({
                                element: "path",
                                curStyles: true,
                                attr: { d: d_attr, id: Y(), opacity: L.opacity / 2 },
                            });
                            J.setAttribute(
                                "d", ["M", mouse_x, mouse_y, mouse_x, mouse_y].join(" ")
                            );
                            J = f ? svgedit.path.path.segs.length : 0;
                            svgedit.path.addPointGrip(J, mouse_x, mouse_y);
                            svgedit.path.first_grip = null;
                        }
                    } else if (svgedit.path.path) {
                        svgedit.path.path.storeD();
                        s = D.target.id;
                        if (s.substr(0, 14) == "pathpointgrip_") {
                            u = svgedit.path.path.cur_pt = parseInt(s.substr(14));
                            svgedit.path.path.dragging = [E, J];
                            s = svgedit.path.path.segs[u];
                            if (D.shiftKey)
                                s.selected ?
                                svgedit.path.path.removePtFromSelection(u) :
                                svgedit.path.path.addPtsToSelection(u);
                            else {
                                if (svgedit.path.path.selected_pts.length <= 1 || !s.selected)
                                    svgedit.path.path.clearSelection();
                                svgedit.path.path.addPtsToSelection(u);
                            }
                        } else if (s.indexOf("ctrlpointgrip_") == 0) {
                            svgedit.path.path.dragging = [E, J];
                            D = s.split("_")[1].split("c");
                            u = D[0] - 0;
                            g = D = D[1] - 0;
                            o = svgedit.path.path.segs[u];
                            svgedit.path.path.selectPt(u, D);
                            if (g == 2) {
                                w = 1;
                                s = o.next;
                            } else {
                                w = 2;
                                s = o.prev;
                            }
                            if (!s) return;
                            D = function(M, T) {
                                return Math.sqrt(
                                    Math.pow(M.x - T.x, 2) + Math.pow(M.y - T.y, 2)
                                );
                            };
                            u = { x: o.item["x" + g], y: o.item["y" + g] };
                            g =
                                g == 2 ? { x: o.item.x, y: o.item.y } : { x: s.item.x, y: s.item.y };
                            o = { x: s.item["x" + w], y: s.item["y" + w] };
                            s = D(u, g);
                            D = D(o, g);
                            u =
                                Math.abs(
                                    Math.round(
                                        Math.atan2(u.y - g.y, u.x - g.x) * (180 / Math.PI),
                                        0
                                    ) -
                                    Math.round(
                                        Math.atan2(o.y - g.y, o.x - g.x) * (180 / Math.PI),
                                        0
                                    )
                                ) == 180;
                            if (Math.abs(s - D) < 5 && u) {
                                svgedit.path.setLinkControlPoints(true);
                                svgedit.path.is_linked = true;
                            } else {
                                svgedit.path.setLinkControlPoints(false);
                                svgedit.path.is_linked = false;
                            }
                        }
                        if (!svgedit.path.path.dragging) {
                            if (La == null) La = sa.getRubberBandBox();
                            na(
                                La, { x: E * v, y: J * v, width: 0, height: 0, display: "inline" },
                                100
                            );
                        }
                    }
                },
                mouseMove: function(D, u, E) {
                    F = true;
                    var J = !D.altKey;
                    if (ya === "path") {
                        if (z) {
                            var g = z.pathSegList,
                                o = g.numberOfItems - 1,
                                s = svgedit.path.addCtrlGrip("1c1"),
                                w = svgedit.path.addCtrlGrip("0c2");
                            if (m) {
                                var G = w.getAttribute("cx") / v || 0,
                                    I = w.getAttribute("cy") / v || 0;
                                s.setAttribute("cx", u);
                                s.setAttribute("cy", E);
                                s.setAttribute("display", "inline");
                                D = m[0];
                                s = m[1];
                                g.getItem(o);
                                var M = u / v,
                                    T = E / v;
                                G = J ? D + (D - M) : G;
                                J = J ? s + (s - T) : I;
                                w.setAttribute("cx", G * v);
                                w.setAttribute("cy", J * v);
                                w.setAttribute("display", "inline");
                                w = svgedit.path.getCtrlLine(1);
                                I = svgedit.path.getCtrlLine(2);
                                na(w, {
                                    x1: u,
                                    y1: E,
                                    x2: D * v,
                                    y2: s * v,
                                    display: "inline",
                                });
                                na(I, {
                                    x1: G * v,
                                    y1: J * v,
                                    x2: D * v,
                                    y2: s * v,
                                    display: "inline",
                                });
                                if (o === 0) B = [u, E];
                                else {
                                    g = g.getItem(o - 1);
                                    u = g.x;
                                    E = g.y;
                                    if (g.pathSegType === 6) {
                                        u += u - g.x2;
                                        E += E - g.y2;
                                    } else if (B) {
                                        u = B[0] / v;
                                        E = B[1] / v;
                                    }
                                    svgedit.path.replacePathSeg(
                                        6,
                                        o, [
                                            D,
                                            s,
                                            this.lastCtrlPoint[0] / v,
                                            this.lastCtrlPoint[1] / v,
                                            G,
                                            J,
                                        ],
                                        z
                                    );
                                }
                            } else if ((J = this.stretchy)) {
                                o = g.getItem(o);
                                g = u;
                                s = E;
                                if (
                                    D.target.id === "pathpointgrip_0" &&
                                    svgedit.path.first_grip
                                ) {
                                    g = svgedit.path.first_grip[0];
                                    s = svgedit.path.first_grip[1];
                                }
                                if (o.pathSegType === 6)
                                    svgedit.path.replacePathSeg(
                                        6,
                                        1, [
                                            u,
                                            E,
                                            (this.lastCtrlPoint[0] / v || o.x + (o.x - o.x2)) * v,
                                            (this.lastCtrlPoint[1] / v || o.y + (o.y - o.y2)) * v,
                                            g,
                                            s,
                                        ],
                                        J
                                    );
                                else
                                    B ?
                                    svgedit.path.replacePathSeg(
                                        6,
                                        1, [u, E, B[0], B[1], u, E],
                                        J
                                    ) :
                                    svgedit.path.replacePathSeg(4, 1, [u, E], J);
                            }
                        }
                    } else if (svgedit.path.path.dragging) {
                        g = svgedit.path.getPointFromGrip({
                                x: svgedit.path.path.dragging[0],
                                y: svgedit.path.path.dragging[1],
                            },
                            svgedit.path.path
                        );
                        D = svgedit.path.getPointFromGrip({ x: u, y: E },
                            svgedit.path.path
                        );
                        o = D.x - g.x;
                        g = D.y - g.y;
                        svgedit.path.path.dragging = [u, E];
                        !J || !svgedit.path.is_linked ?
                            svgedit.path.setLinkControlPoints(false) :
                            svgedit.path.setLinkControlPoints(true);
                        svgedit.path.path.dragctrl ?
                            svgedit.path.path.moveCtrl(o, g) :
                            svgedit.path.path.movePts(o, g);
                    } else {
                        svgedit.path.path.selected_pts = [];
                        svgedit.path.path.eachSeg(function() {
                            if (this.next || this.prev) {
                                var X = La.getBBox(),
                                    S = svgedit.path.getGripPt(this);
                                X = svgedit.math.rectsIntersect(X, {
                                    x: S.x,
                                    y: S.y,
                                    width: 0,
                                    height: 0,
                                });
                                this.select(X);
                                X && svgedit.path.path.selected_pts.push(this.index);
                            }
                        });
                    }
                },
                mouseUp: function(D, u, E, J) {
                    var g = pa("ctrlpointgrip_1c1"),
                        o = pa("ctrlpointgrip_0c2");
                    this.lastCtrlPoint = g ? [g.getAttribute("cx"), g.getAttribute("cy")] : [E, J];
                    if (!svgedit.path.first_grip)
                        svgedit.path.first_grip = o ? [o.getAttribute("cx"), o.getAttribute("cy")] : [E, J];
                    if (ya === "path") {
                        m = null;
                        if (!z) {
                            u = pa(ia());
                            Fa = false;
                            B = null;
                        }
                        return { keep: true, element: u };
                    }
                    if (svgedit.path.path.dragging) {
                        u = svgedit.path.path.cur_pt;
                        svgedit.path.path.dragging = false;
                        svgedit.path.path.dragctrl = false;
                        svgedit.path.path.update();
                        F && svgedit.path.path.endChanges("Move path point(s)");
                        !D.shiftKey && !F && svgedit.path.path.selectPt(u);
                    } else if (La && La.getAttribute("display") != "none") {
                        La.setAttribute("display", "none");
                        La.getAttribute("width") <= 2 &&
                            La.getAttribute("height") <= 2 &&
                            Ha.toSelectMode(D.target);
                    } else Ha.toSelectMode(D.target);
                    F = false;
                },
                toEditMode: function(D) {
                    svgedit.path.path = svgedit.path.getPath_(D);
                    ya = "pathedit";
                    Ma();
                    svgedit.path.path.show(true).update();
                    svgedit.path.path.oldbbox = svgedit.utilities.getBBox(
                        svgedit.path.path.elem
                    );
                    f = false;
                },
                toSelectMode: function(D) {
                    var u = D == svgedit.path.path.elem;
                    ya = "select";
                    svgedit.path.path.show(false);
                    h = false;
                    Ma();
                    svgedit.path.path.matrix && svgedit.path.recalcRotatedPath();
                    if (u) {
                        ga("selected", [D]);
                        Na([D], true);
                    }
                },
                addSubPath: function(D) {
                    if (D) {
                        ya = "path";
                        f = true;
                    } else {
                        Ha.clear(true);
                        Ha.toEditMode(svgedit.path.path.elem);
                    }
                },
                select: function(D) {
                    if (h === D) {
                        Ha.toEditMode(D);
                        ya = "pathedit";
                    } else h = D;
                },
                reorient: function() {
                    var D = H[0];
                    if (D)
                        if (qa(D) != 0) {
                            var u = new za("Reorient path"),
                                E = {
                                    d: D.getAttribute("d"),
                                    transform: D.getAttribute("transform"),
                                };
                            u.addSubCommand(new Ja(D, E));
                            Ma();
                            this.resetOrientation(D);
                            wa(u);
                            svgedit.path.getPath_(D).show(false).matrix = null;
                            this.clear();
                            Na([D], true);
                            ga("changed", H);
                        }
                },
                clear: function(D) {
                    h = null;
                    if (z) {
                        var u = pa(ia());
                        $(pa("path_stretch_line")).remove();
                        D && $(u).remove();
                        $(pa("pathpointgrip_container")).find("*").attr("display", "none");
                        z = B = null;
                        Fa = false;
                    } else ya == "pathedit" && this.toSelectMode();
                    svgedit.path.path && svgedit.path.path.init().show(false);
                },
                resetOrientation: function(D) {
                    if (D == null || D.nodeName != "path") return false;
                    var u = R(D),
                        E = Z(u).matrix;
                    u.clear();
                    D.removeAttribute("transform");
                    u = D.pathSegList;
                    for (var J = u.numberOfItems, g = 0; g < J; ++g) {
                        var o = u.getItem(g),
                            s = o.pathSegType;
                        if (s != 1) {
                            var w = [];
                            $.each(["", 1, 2], function(G, I) {
                                var M = o["x" + I],
                                    T = o["y" + I];
                                if (M !== undefined && T !== undefined) {
                                    M = N(M, T, E);
                                    w.splice(w.length, 0, M.x, M.y);
                                }
                            });
                            svgedit.path.replacePathSeg(s, g, w, D);
                        }
                    }
                    d(D, E);
                },
                zoomChange: function() {
                    ya == "pathedit" && svgedit.path.path.update();
                },
                getNodePoint: function() {
                    if (svgedit.path.path) {
                        var D =
                            svgedit.path.path.segs[
                                svgedit.path.path.selected_pts.length ?
                                svgedit.path.path.selected_pts[0] :
                                1
                            ];
                        return { x: D.item.x, y: D.item.y, type: D.type };
                    }
                },
                linkControlPoints: function(D) {
                    svgedit.path.setLinkControlPoints(D);
                },
                clonePathNode: function() {
                    svgedit.path.path.storeD();
                    for (
                        var D = svgedit.path.path.selected_pts, u = D.length, E = []; u--;

                    ) {
                        var J = D[u];
                        svgedit.path.path.addSeg(J);
                        E.push(J + u);
                        E.push(J + u + 1);
                    }
                    svgedit.path.path.init().addPtsToSelection(E);
                    svgedit.path.path.endChanges("Clone path node(s)");
                },
                opencloseSubPath: function() {
                    var D = svgedit.path.path.selected_pts;
                    if (D.length === 1) {
                        var u = svgedit.path.path.elem,
                            E = u.pathSegList,
                            J = D[0],
                            g = null,
                            o = null;
                        svgedit.path.path.eachSeg(function(I) {
                            if (this.type === 2 && I <= J) o = this.item;
                            if (I <= J) return true;
                            if (this.type === 2) {
                                g = I;
                                return false;
                            } else if (this.type === 1) return (g = false);
                        });
                        if (g == null) g = svgedit.path.path.segs.length - 1;
                        if (g !== false) {
                            var s = u.createSVGPathSegLinetoAbs(o.x, o.y),
                                w = u.createSVGPathSegClosePath();
                            if (g == svgedit.path.path.segs.length) {
                                E.appendItem(s);
                                E.appendItem(w);
                            } else {
                                svgedit.path.insertItemBefore(u, w, g);
                                svgedit.path.insertItemBefore(u, s, g);
                            }
                            svgedit.path.path.init().selectPt(g + 1);
                        } else if (svgedit.path.path.segs[J].mate) {
                            E.removeItem(J);
                            E.removeItem(J);
                            svgedit.path.path.init().selectPt(J - 1);
                        } else {
                            for (D = 0; D < E.numberOfItems; D++) {
                                var G = E.getItem(D);
                                if (G.pathSegType === 2) s = D;
                                else if (D === J) E.removeItem(s);
                                else if (G.pathSegType === 1 && J < D) {
                                    w = D - 1;
                                    E.removeItem(D);
                                    break;
                                }
                            }
                            for (D = J - s - 1; D--;)
                                svgedit.path.insertItemBefore(u, E.getItem(s), w);
                            u = E.getItem(s);
                            svgedit.path.replacePathSeg(2, s, [u.x, u.y]);
                            D = J;
                            svgedit.path.path.init().selectPt(0);
                        }
                    }
                },
                deletePathNode: function() {
                    if (Ha.canDeleteNodes) {
                        svgedit.path.path.storeD();
                        for (var D = svgedit.path.path.selected_pts, u = D.length; u--;)
                            svgedit.path.path.deleteSeg(D[u]);
                        var E = function() {
                            var J = svgedit.path.path.elem.pathSegList,
                                g = J.numberOfItems,
                                o = function(G, I) {
                                    for (; I--;) J.removeItem(G);
                                };
                            if (g <= 1) return true;
                            for (; g--;) {
                                var s = J.getItem(g);
                                if (s.pathSegType === 1) {
                                    s = J.getItem(g - 1);
                                    var w = J.getItem(g - 2);
                                    if (s.pathSegType === 2) {
                                        o(g - 1, 2);
                                        E();
                                        break;
                                    } else if (w.pathSegType === 2) {
                                        o(g - 2, 3);
                                        E();
                                        break;
                                    }
                                } else if (s.pathSegType === 2)
                                    if (g > 0) {
                                        s = J.getItem(g - 1).pathSegType;
                                        if (s === 2) {
                                            o(g - 1, 1);
                                            E();
                                            break;
                                        } else if (s === 1 && J.numberOfItems - 1 === g) {
                                            o(g, 1);
                                            E();
                                            break;
                                        }
                                    }
                            }
                            return false;
                        };
                        E();
                        if (svgedit.path.path.elem.pathSegList.numberOfItems <= 1) {
                            b.setMode("select");
                            b.deleteSelectedElements();
                        } else {
                            svgedit.path.path.init();
                            svgedit.path.path.clearSelection();
                            if (window.opera) {
                                D = $(svgedit.path.path.elem);
                                D.attr("d", D.attr("d"));
                            }
                            svgedit.path.path.endChanges("Delete path node(s)");
                        }
                    }
                },
                smoothPolylineIntoPath: function(D) {
                    var u = D.points,
                        E = u.numberOfItems;
                    if (E >= 4) {
                        var J = u.getItem(0),
                            g = null;
                        D = [];
                        D.push(["M", J.x, ",", J.y, " C"].join(""));
                        for (var o = 1; o <= E - 4; o += 3) {
                            var s = u.getItem(o),
                                w = u.getItem(o + 1),
                                G = u.getItem(o + 2);
                            if (g)
                                if (
                                    (J = svgedit.path.smoothControlPoints(g, s, J)) &&
                                    J.length == 2
                                ) {
                                    s = D[D.length - 1].split(",");
                                    s[2] = J[0].x;
                                    s[3] = J[0].y;
                                    D[D.length - 1] = s.join(",");
                                    s = J[1];
                                }
                            D.push([s.x, s.y, w.x, w.y, G.x, G.y].join(","));
                            J = G;
                            g = w;
                        }
                        for (D.push("L"); o < E; ++o) {
                            w = u.getItem(o);
                            D.push([w.x, w.y].join(","));
                        }
                        D = D.join(" ");
                        D = V({
                            element: "path",
                            curStyles: true,
                            attr: { id: ia(), d: D, fill: "none" },
                        });
                    }
                    return D;
                },
                setSegType: function(D) {
                    svgedit.path.path.setSegType(D);
                },
                moveNode: function(D, u) {
                    var E = svgedit.path.path.selected_pts;
                    if (E.length) {
                        svgedit.path.path.storeD();
                        E = svgedit.path.path.segs[E[0]];
                        var J = { x: 0, y: 0 };
                        J[D] = u - E.item[D];
                        E.move(J.x, J.y);
                        svgedit.path.path.endChanges("Move path point");
                    }
                },
                fixEnd: function(D) {
                    for (
                        var u = D.pathSegList, E = u.numberOfItems, J, g = 0; g < E;
                        ++g
                    ) {
                        var o = u.getItem(g);
                        if (o.pathSegType === 2) J = o;
                        if (o.pathSegType === 1) {
                            o = u.getItem(g - 1);
                            if (o.x != J.x || o.y != J.y) {
                                u = D.createSVGPathSegLinetoAbs(J.x, J.y);
                                svgedit.path.insertItemBefore(D, u, g);
                                Ha.fixEnd(D);
                                break;
                            }
                        }
                    }
                    svgedit.browser.isWebkit() && D.setAttribute("d", Ha.convertPath(D));
                },
                convertPath: function(D, u) {
                    for (
                        var E = D.pathSegList,
                            J = E.numberOfItems,
                            g = 0,
                            o = 0,
                            s = "",
                            w = null,
                            G = 0; G < J;
                        ++G
                    ) {
                        var I = E.getItem(G),
                            M = I.x || 0,
                            T = I.y || 0,
                            X = I.x1 || 0,
                            S = I.y1 || 0,
                            W = I.x2 || 0,
                            ha = I.y2 || 0,
                            la = I.pathSegType,
                            ea = Ca[la]["to" + (u ? "Lower" : "Upper") + "Case"](),
                            ta = function(Ba, xa, Da) {
                                xa = xa ? " " + xa.join(" ") : "";
                                Da = Da ? " " + svgedit.units.shortFloat(Da) : "";
                                $.each(Ba, function(Za, Ta) {
                                    Ba[Za] = svgedit.units.shortFloat(Ta);
                                });
                                s += ea + Ba.join(" ") + xa + Da;
                            };
                        switch (la) {
                            case 1:
                                s += "z";
                                break;
                            case 12:
                                M -= g;
                            case 13:
                                if (u) {
                                    g += M;
                                    ea = "l";
                                } else {
                                    M += g;
                                    g = M;
                                    ea = "L";
                                }
                                ta([
                                    [M, o]
                                ]);
                                break;
                            case 14:
                                T -= o;
                            case 15:
                                if (u) {
                                    o += T;
                                    ea = "l";
                                } else {
                                    T += o;
                                    o = T;
                                    ea = "L";
                                }
                                ta([
                                    [g, T]
                                ]);
                                break;
                            case 2:
                            case 4:
                            case 18:
                                M -= g;
                                T -= o;
                            case 5:
                            case 3:
                                if (w && E.getItem(G - 1).pathSegType === 1 && !u) {
                                    g = w[0];
                                    o = w[1];
                                }
                            case 19:
                                if (u) {
                                    g += M;
                                    o += T;
                                } else {
                                    M += g;
                                    T += o;
                                    g = M;
                                    o = T;
                                }
                                if (la === 3) w = [g, o];
                                ta([
                                    [M, T]
                                ]);
                                break;
                            case 6:
                                M -= g;
                                X -= g;
                                W -= g;
                                T -= o;
                                S -= o;
                                ha -= o;
                            case 7:
                                if (u) {
                                    g += M;
                                    o += T;
                                } else {
                                    M += g;
                                    X += g;
                                    W += g;
                                    T += o;
                                    S += o;
                                    ha += o;
                                    g = M;
                                    o = T;
                                }
                                ta([
                                    [X, S],
                                    [W, ha],
                                    [M, T],
                                ]);
                                break;
                            case 8:
                                M -= g;
                                X -= g;
                                T -= o;
                                S -= o;
                            case 9:
                                if (u) {
                                    g += M;
                                    o += T;
                                } else {
                                    M += g;
                                    X += g;
                                    T += o;
                                    S += o;
                                    g = M;
                                    o = T;
                                }
                                ta([
                                    [X, S],
                                    [M, T],
                                ]);
                                break;
                            case 10:
                                M -= g;
                                T -= o;
                            case 11:
                                if (u) {
                                    g += M;
                                    o += T;
                                } else {
                                    M += g;
                                    T += o;
                                    g = M;
                                    o = T;
                                }
                                ta(
                                    [
                                        [I.r1, I.r2]
                                    ], [I.angle, I.largeArcFlag ? 1 : 0, I.sweepFlag ? 1 : 0], [M, T]
                                );
                                break;
                            case 16:
                                M -= g;
                                W -= g;
                                T -= o;
                                ha -= o;
                            case 17:
                                if (u) {
                                    g += M;
                                    o += T;
                                } else {
                                    M += g;
                                    W += g;
                                    T += o;
                                    ha += o;
                                    g = M;
                                    o = T;
                                }
                                ta([
                                    [W, ha],
                                    [M, T],
                                ]);
                        }
                    }
                    return s;
                },
            };
        })()),
        Kb = (this.removeUnusedDefElems = function() {
            var f = p.getElementsByTagNameNS(c, "defs");
            if (!f || !f.length) return 0;
            for (
                var h = [],
                    m = 0,
                    B = [
                        "fill",
                        "stroke",
                        "filter",
                        "marker-start",
                        "marker-mid",
                        "marker-end",
                    ],
                    z = B.length,
                    F = p.getElementsByTagNameNS(c, "*"),
                    D = F.length,
                    u = 0; u < D; u++
            ) {
                for (var E = F[u], J = 0; J < z; J++)
                    if (E) {
                        var g = ja(E.getAttribute(B[J]));
                        g && h.push(g.substr(1));
                    }
                    (E = ka(E)) && E.indexOf("#") === 0 && h.push(E.substr(1));
            }
            f = $(f).find(
                "linearGradient, radialGradient, filter, marker, svg, symbol"
            );
            defelem_ids = [];
            for (u = f.length; u--;) {
                B = f[u];
                z = B.id;
                if (h.indexOf(z) < 0) {
                    fb[z] = B;
                    B.parentNode.removeChild(B);
                    m++;
                }
            }
            return m;
        });
    this.svgCanvasToString = function() {
        for (; Kb() > 0;);
        Ha.clear(true);
        $.each(p.childNodes, function(m, B) {
            m &&
                B.nodeType === 8 &&
                B.data.indexOf("Created with") >= 0 &&
                p.insertBefore(B, p.firstChild);
        });
        if (K) {
            Bb();
            sb([K]);
        }
        $("#canvasGrid").attr("display", "none");
        var f = [];
        $(p)
            .find("g:data(gsvg)")
            .each(function() {
                for (var m = this.attributes, B = m.length, z = 0; z < B; z++)
                    if (m[z].nodeName == "id" || m[z].nodeName == "style") B--;
                if (B <= 0) {
                    m = this.firstChild;
                    f.push(m);
                    $(this).replaceWith(m);
                }
            });
        var h = this.svgToString(p, 0);
        f.length &&
            $(f).each(function() {
                cb(this);
            });
        return h;
    };
    this.svgToString = function(f, h) {
        var m = [],
            B = svgedit.utilities.toXml,
            z = l.baseUnit,
            F = RegExp("^-?[\\d\\.]+" + z + "$");
        if (f) {
            oa(f);
            var D = f.attributes,
                u,
                E,
                J = f.childNodes;
            for (E = 0; E < h; E++) m.push(" ");
            m.push("<");
            m.push(f.nodeName);
            if (f.id === "svgcontent") {
                E = yb();
                if (z !== "px") {
                    E.w = svgedit.units.convertUnit(E.w, z) + z;
                    E.h = svgedit.units.convertUnit(E.h, z) + z;
                }
                m.push(' width="' + E.w + '" height="' + E.h + '" xmlns="' + c + '"');
                var g = {};
                $(f)
                    .find("*")
                    .andSelf()
                    .each(function() {
                        $.each(this.attributes, function(G, I) {
                            var M = I.namespaceURI;
                            if (M && !g[M] && Ka[M] !== "xmlns" && Ka[M] !== "xml") {
                                g[M] = true;
                                m.push(" xmlns:" + Ka[M] + '="' + M + '"');
                            }
                        });
                    });
                E = D.length;
                for (
                    z = [
                        "width",
                        "height",
                        "xmlns",
                        "x",
                        "y",
                        "viewBox",
                        "id",
                        "overflow",
                    ]; E--;

                ) {
                    u = D.item(E);
                    var o = B(u.nodeValue);
                    if (u.nodeName.indexOf("xmlns:") !== 0)
                        if (o != "" && z.indexOf(u.localName) == -1)
                            if (!u.namespaceURI || Ka[u.namespaceURI]) {
                                m.push(" ");
                                m.push(u.nodeName);
                                m.push('="');
                                m.push(o);
                                m.push('"');
                            }
                }
            } else {
                if (f.nodeName === "defs" && !f.firstChild) return;
                var s = ["-moz-math-font-style", "_moz-math-font-style"];
                for (E = D.length - 1; E >= 0; E--) {
                    u = D.item(E);
                    o = B(u.nodeValue);
                    if (!(s.indexOf(u.localName) >= 0))
                        if (o != "")
                            if (o.indexOf("pointer-events") !== 0)
                                if (!(u.localName === "class" && o.indexOf("se_") === 0)) {
                                    m.push(" ");
                                    if (u.localName === "d") o = Ha.convertPath(f, true);
                                    if (isNaN(o)) {
                                        if (F.test(o)) o = svgedit.units.shortFloat(o) + z;
                                    } else o = svgedit.units.shortFloat(o);
                                    if (
                                        ra.apply &&
                                        f.nodeName === "image" &&
                                        u.localName === "href" &&
                                        ra.images &&
                                        ra.images === "embed"
                                    ) {
                                        var w = Va[o];
                                        if (w) o = w;
                                    }
                                    if (!u.namespaceURI ||
                                        u.namespaceURI == c ||
                                        Ka[u.namespaceURI]
                                    ) {
                                        m.push(u.nodeName);
                                        m.push('="');
                                        m.push(o);
                                        m.push('"');
                                    }
                                }
                }
            }
            if (f.hasChildNodes()) {
                m.push(">");
                h++;
                D = false;
                for (E = 0; E < J.length; E++) {
                    z = J.item(E);
                    switch (z.nodeType) {
                        case 1:
                            m.push("\n");
                            m.push(this.svgToString(J.item(E), h));
                            break;
                        case 3:
                            z = z.nodeValue.replace(/^\s+|\s+$/g, "");
                            if (z != "") {
                                D = true;
                                m.push(B(z) + "");
                            }
                            break;
                        case 4:
                            m.push("\n");
                            m.push(Array(h + 1).join(" "));
                            m.push("<![CDATA[");
                            m.push(z.nodeValue);
                            m.push("]]>");
                            break;
                        case 8:
                            m.push("\n");
                            m.push(Array(h + 1).join(" "));
                            m.push("<!--");
                            m.push(z.data);
                            m.push("-->");
                    }
                }
                h--;
                if (!D) {
                    m.push("\n");
                    for (E = 0; E < h; E++) m.push(" ");
                }
                m.push("</");
                m.push(f.nodeName);
                m.push(">");
            } else m.push("/>");
        }
        return m.join("");
    };
    this.embedImage = function(f, h) {
        $(new Image())
            .load(function() {
                var m = document.createElement("canvas");
                m.width = this.width;
                m.height = this.height;
                m.getContext("2d").drawImage(this, 0, 0);
                try {
                    var B = ";svgedit_url=" + encodeURIComponent(f);
                    B = m.toDataURL().replace(";base64", B + ";base64");
                    Va[f] = B;
                } catch (z) {
                    Va[f] = false;
                }
                Ya = f;
                h && h(Va[f]);
            })
            .attr("src", f);
    };
    this.setGoodImage = function(f) {
        Ya = f;
    };
    this.open = function() {};
    this.save = function(f) {
        Ma();
        f && $.extend(ra, f);
        ra.apply = true;
        f = this.svgCanvasToString();
        f = new Blob([f], { type: "image/svg+xml;charset=utf-8" });
        saveAs(f, "method-draw-image.svg", true);
    };
    this.rasterExport = function() {
        Ma();
        var f = [],
            h = {
                feGaussianBlur: "Blurred elements will appear as un-blurred",
                foreignObject: "foreignObject elements will not appear",
                "[stroke-dasharray]": "Strokes will appear filled",
            },
            m = $(p);
        "font" in $("<canvas>")[0].getContext("2d") ||
            (h.text = "Text may not appear as expected");
        $.each(h, function(B, z) {
            m.find(B).length && f.push(z);
        });
        h = this.svgCanvasToString();
        ga("exported", { svg: h, issues: f });
    };
    this.getSvgString = function() {
        ra.apply = false;
        return this.svgCanvasToString();
    };
    this.randomizeIds = function() {
        arguments.length > 0 && arguments[0] == false ?
            svgedit.draw.randomizeIds(false, C()) :
            svgedit.draw.randomizeIds(true, C());
    };
    var xb = (this.uniquifyElems = function(f) {
            var h = {},
                m = [
                    "filter",
                    "linearGradient",
                    "pattern",
                    "radialGradient",
                    "symbol",
                    "textPath",
                    "use",
                ];
            svgedit.utilities.walkTree(f, function(u) {
                if (u.nodeType == 1) {
                    if (u.id) {
                        u.id in h || (h[u.id] = { elem: null, attrs: [], hrefs: [] });
                        h[u.id].elem = u;
                    }
                    $.each(tb, function(J, g) {
                        var o = u.getAttributeNode(g);
                        if (o) {
                            var s = svgedit.utilities.getUrlFromAttr(o.value);
                            if ((s = s ? s.substr(1) : null)) {
                                s in h || (h[s] = { elem: null, attrs: [], hrefs: [] });
                                h[s].attrs.push(o);
                            }
                        }
                    });
                    var E = svgedit.utilities.getHref(u);
                    if (E && m.indexOf(u.nodeName) >= 0)
                        if ((E = E.substr(1))) {
                            E in h || (h[E] = { elem: null, attrs: [], hrefs: [] });
                            h[E].hrefs.push(u);
                        }
                }
            });
            for (var B in h)
                if (B) {
                    var z = h[B].elem;
                    if (z) {
                        f = Y();
                        z.id = f;
                        z = h[B].attrs;
                        for (var F = z.length; F--;) {
                            var D = z[F];
                            D.ownerElement.setAttribute(D.name, "url(#" + f + ")");
                        }
                        z = h[B].hrefs;
                        for (F = z.length; F--;) svgedit.utilities.setHref(z[F], "#" + f);
                    }
                }
        }),
        Hb = (this.setUseData = function(f) {
            var h = $(f);
            if (f.tagName !== "use") h = h.find("use");
            h.each(function() {
                var m = ka(this).substr(1);
                if ((m = pa(m))) {
                    $(this).data("ref", m);
                    if (m.tagName == "symbol" || m.tagName == "svg")
                        $(this).data("symbol", m).data("ref", m);
                }
            });
        }),
        Ib = (this.convertGradients = function(f) {
            var h = $(f).find("linearGradient, radialGradient");
            if (!h.length && svgedit.browser.isWebkit())
                h = $(f)
                .find("*")
                .filter(function() {
                    return this.tagName.indexOf("Gradient") >= 0;
                });
            h.each(function() {
                if ($(this).attr("gradientUnits") === "userSpaceOnUse") {
                    var m = $(p).find(
                        '[fill="url(#' + this.id + ')"],[stroke="url(#' + this.id + ')"]'
                    );
                    if (m.length)
                        if ((m = svgedit.utilities.getBBox(m[0])))
                            if (this.tagName === "linearGradient") {
                                var B = $(this).attr(["x1", "y1", "x2", "y2"]),
                                    z = this.gradientTransform.baseVal;
                                if (z && z.numberOfItems > 0) {
                                    var F = Z(z).matrix;
                                    z = N(B.x1, B.y1, F);
                                    F = N(B.x2, B.y2, F);
                                    B.x1 = z.x;
                                    B.y1 = z.y;
                                    B.x2 = F.x;
                                    B.y2 = F.y;
                                    this.removeAttribute("gradientTransform");
                                }
                                $(this).attr({
                                    x1: (B.x1 - m.x) / m.width,
                                    y1: (B.y1 - m.y) / m.height,
                                    x2: (B.x2 - m.x) / m.width,
                                    y2: (B.y2 - m.y) / m.height,
                                });
                                this.removeAttribute("gradientUnits");
                            }
                }
            });
        }),
        Lb = (this.convertToGroup = function(f) {
            f || (f = H[0]);
            var h = $(f),
                m = new za(),
                B;
            if (h.data("gsvg")) {
                m = $(f.firstChild).attr(["x", "y"]);
                $(f.firstChild.firstChild).unwrap();
                $(f).removeData("gsvg");
                B = R(f);
                var z = e.createSVGTransform();
                z.setTranslate(m.x, m.y);
                B.appendItem(z);
                Xa(f);
                ga("selected", [f]);
            } else if (h.data("symbol")) {
                f = h.data("symbol");
                B = h.attr("transform");
                z = h.attr(["x", "y"]);
                var F = f.getAttribute("viewBox");
                if (F) {
                    F = F.split(" ");
                    z.x -= +F[0];
                    z.y -= +F[1];
                }
                B += " translate(" + (z.x || 0) + "," + (z.y || 0) + ")";
                z = h.prev();
                m.addSubCommand(new Ia(h[0], h[0].nextSibling, h[0].parentNode));
                h.remove();
                F = $(p).find("use:data(symbol)").length;
                h = k.createElementNS(c, "g");
                for (var D = f.childNodes, u = 0; u < D.length; u++)
                    h.appendChild(D[u].cloneNode(true));
                if (svgedit.browser.isGecko()) {
                    D = $(ib()).children("linearGradient,radialGradient,pattern").clone();
                    $(h).append(D);
                }
                B && h.setAttribute("transform", B);
                B = f.parentNode;
                xb(h);
                svgedit.browser.isGecko() &&
                    $(ib()).append($(h).find("linearGradient,radialGradient,pattern"));
                h.id = Y();
                z.after(h);
                if (B) {
                    if (!F) {
                        z = f.nextSibling;
                        B.removeChild(f);
                        m.addSubCommand(new Ia(f, z, B));
                    }
                    m.addSubCommand(new Wa(h));
                }
                Hb(h);
                svgedit.browser.isGecko() ? Ib(ib()) : Ib(h);
                svgedit.utilities.walkTreePost(h, function(E) {
                    try {
                        Xa(E);
                    } catch (J) {
                        console.log(J);
                    }
                });
                $(h)
                    .find(
                        "a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use"
                    )
                    .each(function() {
                        if (!this.id) this.id = Y();
                    });
                sb([h]);
                (f = Ab(h, true)) && m.addSubCommand(f);
                wa(m);
            } else console.log("Unexpected element to ungroup:", f);
        });
    this.setSvgString = function(f) {
        try {
            var h = svgedit.utilities.text2xml(f);
            this.prepareSvg(h);
            var m = new za("Change Source"),
                B = p.nextSibling,
                z = e.removeChild(p);
            m.addSubCommand(new Ia(z, B, e));
            p = k.adoptNode ?
                k.adoptNode(h.documentElement) :
                k.importNode(h.documentElement, true);
            e.appendChild(p);
            var F = $(p);
            b.current_drawing_ = new svgedit.draw.Drawing(p, A);
            var D = C().getNonce();
            D ? ga("setnonce", D) : ga("unsetnonce");
            F.find("image").each(function() {
                var I = this;
                zb(I);
                var M = ka(this);
                if (M.indexOf("data:") === 0) {
                    var T = M.match(/svgedit_url=(.*?);/);
                    if (T) {
                        var X = decodeURIComponent(T[1]);
                        $(new Image())
                            .load(function() {
                                I.setAttributeNS(
                                    "http://www.w3.org/1999/xlink",
                                    "xlink:href",
                                    X
                                );
                            })
                            .attr("src", X);
                    }
                }
                b.embedImage(M);
            });
            F.find("svg").each(function() {
                if (!$(this).closest("defs").length) {
                    xb(this);
                    var I = this.parentNode;
                    if (I.childNodes.length === 1 && I.nodeName === "g") {
                        $(I).data("gsvg", this);
                        I.id = I.id || Y();
                    } else cb(this);
                }
            });
            F.find("linearGradient, radialGradient, pattern").appendTo(ib());
            Hb(F);
            Ib(F[0]);
            svgedit.utilities.walkTreePost(p, function(I) {
                try {
                    Xa(I);
                } catch (M) {
                    console.log(M);
                }
            });
            var u = {
                    id: "svgcontent",
                    overflow: l.show_outside_canvas ? "visible" : "hidden",
                },
                E = false;
            if (F.attr("viewBox")) {
                var J = F.attr("viewBox").split(" ");
                u.width = J[2];
                u.height = J[3];
            } else
                $.each(["width", "height"], function(I, M) {
                    var T = F.attr(M);
                    T || (T = "100%");
                    if ((T + "").substr(-1) === "%") E = true;
                    else u[M] = ua(M, T);
                });
            Cb();
            F.children()
                .find(
                    "a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use"
                )
                .each(function() {
                    if (!this.id) this.id = Y();
                });
            if (E) {
                var g = getStrokedBBox();
                u.width = g.width + g.x;
                u.height = g.height + g.y;
            }
            if (u.width <= 0) u.width = 200;
            if (u.height <= 0) u.height = 200;
            F.attr(u);
            this.contentW = u.width;
            this.contentH = u.height;
            $("#canvas_width").val(this.contentW);
            $("#canvas_height").val(this.contentH);
            var o = $("#canvas_background");
            if (o.length) {
                var s = o.attr("fill-opacity");
                s = s ? parseInt(s) * 100 : 100;
                fill = this.getPaint(o.attr("fill"), s, "canvas");
            } else fill = this.getPaint("none", 100, "canvas");
            methodDraw.paintBox.canvas.setPaint(fill);
            m.addSubCommand(new Wa(p));
            var w = F.attr(["width", "height"]);
            m.addSubCommand(new Ja(e, w));
            v = 1;
            svgedit.transformlist.resetListMap();
            Ma();
            svgedit.path.clearData();
            e.appendChild(sa.selectorParentGroup);
            wa(m);
            ga("changed", [p]);
        } catch (G) {
            console.log(G);
            return false;
        }
        return true;
    };
    this.getPaint = function(f, h, m) {
        var B = null;
        if (f.indexOf("url(#") === 0) {
            f = (f = svgCanvas.getRefElem(f)) ?
                f.cloneNode(true) :
                $("#" + m + "_color defs *")[0];
            B = { alpha: h };
            B[f.tagName] = f;
        } else
            B =
            f.indexOf("#") === 0 ? { alpha: h, solidColor: f.substr(1) } : { alpha: h, solidColor: "none" };
        return new $.jGraduate.Paint(B);
    };
    this.importSvgString = function(f) {
        try {
            var h = svgedit.utilities.encode64(f.length + f).substr(0, 32),
                m = false;
            if (nb[h])
                if ($(nb[h].symbol).parents("#svgroot").length) m = true;
            var B = new za("Import SVG");
            if (m)
                var z = nb[h].symbol,
                    F = nb[h].xform;
            else {
                var D = svgedit.utilities.text2xml(f);
                this.prepareSvg(D);
                var u;
                u = k.adoptNode ?
                    k.adoptNode(D.documentElement) :
                    k.importNode(D.documentElement, true);
                xb(u);
                var E = ua("width", u.getAttribute("width")),
                    J = ua("height", u.getAttribute("height")),
                    g = u.getAttribute("viewBox"),
                    o = g ? g.split(" ") : [0, 0, E, J];
                for (f = 0; f < 4; ++f) o[f] = +o[f];
                p.getAttribute("width");
                var s = +p.getAttribute("height");
                F =
                    J > E ? "scale(" + s / 3 / o[3] + ")" : "scale(" + s / 3 / o[2] + ")";
                F = "translate(0) " + F + " translate(0)";
                z = k.createElementNS(c, "symbol");
                var w = ib();
                for (
                    svgedit.browser.isGecko() &&
                    $(u).find("linearGradient, radialGradient, pattern").appendTo(w); u.firstChild;

                )
                    z.appendChild(u.firstChild);
                var G = u.attributes;
                for (u = 0; u < G.length; u++) {
                    var I = G[u];
                    z.setAttribute(I.nodeName, I.nodeValue);
                }
                z.id = Y();
                nb[h] = { symbol: z, xform: F };
                ib().appendChild(z);
                B.addSubCommand(new Wa(z));
            }
            var M = k.createElementNS(c, "use");
            M.id = Y();
            aa(M, "#" + z.id);
            (K || C().getCurrentLayer()).appendChild(M);
            B.addSubCommand(new Wa(M));
            Ma();
            M.setAttribute("transform", F);
            Xa(M);
            $(M).data("symbol", z).data("ref", z);
            Na([M]);
            wa(B);
            ga("changed", [p]);
        } catch (T) {
            console.log(T);
            return false;
        }
        return true;
    };
    var Cb = (b.identifyLayers = function() {
        Bb();
        C().identifyLayers();
    });
    this.createLayer = function(f) {
        var h = new za("Create Layer");
        f = C().createLayer(f);
        h.addSubCommand(new Wa(f));
        wa(h);
        Ma();
        ga("changed", [f]);
    };
    this.cloneLayer = function(f) {
        var h = new za("Duplicate Layer"),
            m = k.createElementNS(c, "g"),
            B = k.createElementNS(c, "title");
        B.textContent = f;
        m.appendChild(B);
        B = C().getCurrentLayer();
        $(B).after(m);
        B = B.childNodes;
        for (var z = 0; z < B.length; z++) {
            var F = B[z];
            F.localName != "title" && m.appendChild(lb(F));
        }
        Ma();
        Cb();
        h.addSubCommand(new Wa(m));
        wa(h);
        b.setCurrentLayer(f);
        ga("changed", [m]);
    };
    this.deleteCurrentLayer = function() {
        var f = C().getCurrentLayer(),
            h = f.nextSibling,
            m = f.parentNode;
        if ((f = C().deleteCurrentLayer())) {
            var B = new za("Delete Layer");
            B.addSubCommand(new Ia(f, h, m));
            wa(B);
            Ma();
            ga("changed", [m]);
            return true;
        }
        return false;
    };
    this.setCurrentLayer = function(f) {
        (f = C().setCurrentLayer(svgedit.utilities.toXml(f))) && Ma();
        return f;
    };
    this.renameCurrentLayer = function(f) {
        var h = C();
        if (h.current_layer) {
            var m = h.current_layer;
            if (!b.setCurrentLayer(f)) {
                for (var B = new za("Rename Layer"), z = 0; z < h.getNumLayers(); ++z)
                    if (h.all_layers[z][1] == m) break;
                var F = h.getLayerName(z);
                h.all_layers[z][0] = svgedit.utilities.toXml(f);
                var D = m.childNodes.length;
                for (z = 0; z < D; ++z) {
                    var u = m.childNodes.item(z);
                    if (u && u.tagName == "title") {
                        for (; u.firstChild;) u.removeChild(u.firstChild);
                        u.textContent = f;
                        B.addSubCommand(new Ja(u, { "#text": F }));
                        wa(B);
                        ga("changed", [m]);
                        return true;
                    }
                }
            }
            h.current_layer = m;
        }
        return false;
    };
    this.setCurrentLayerPosition = function(f) {
        var h = C();
        if (h.current_layer && f >= 0 && f < h.getNumLayers()) {
            for (var m = 0; m < h.getNumLayers(); ++m)
                if (h.all_layers[m][1] == h.current_layer) break;
            if (m == h.getNumLayers()) return false;
            if (m != f) {
                var B = null,
                    z = h.current_layer.nextSibling;
                if (f > m) {
                    if (f < h.getNumLayers() - 1) B = h.all_layers[f + 1][1];
                } else B = h.all_layers[f][1];
                p.insertBefore(h.current_layer, B);
                wa(new Pa(h.current_layer, z, p));
                Cb();
                b.setCurrentLayer(h.getLayerName(f));
                return true;
            }
        }
        return false;
    };
    this.setLayerVisibility = function(f, h) {
        var m = C(),
            B = m.getLayerVisibility(f),
            z = m.setLayerVisibility(f, h);
        if (z)
            wa(new Ja(z, { display: B ? "inline" : "none" }, "Layer Visibility"));
        else return false;
        if (z == m.getCurrentLayer()) {
            Ma();
            Ha.clear();
        }
        return true;
    };
    this.moveSelectedToLayer = function(f) {
        for (var h = null, m = C(), B = 0; B < m.getNumLayers(); ++B)
            if (m.getLayerName(B) == f) {
                h = m.all_layers[B][1];
                break;
            }
        if (!h) return false;
        f = new za("Move Elements to Layer");
        m = H;
        for (B = m.length; B--;) {
            var z = m[B];
            if (z) {
                var F = z.nextSibling,
                    D = z.parentNode;
                h.appendChild(z);
                f.addSubCommand(new Pa(z, F, D));
            }
        }
        wa(f);
        return true;
    };
    this.mergeLayer = function(f) {
        var h = new za("Merge Layer"),
            m = C(),
            B = $(m.current_layer).prev()[0];
        if (B) {
            for (
                h.addSubCommand(
                    new Ia(m.current_layer, m.current_layer.nextSibling, p)
                ); m.current_layer.firstChild;

            ) {
                var z = m.current_layer.firstChild;
                if (z.localName == "title") {
                    h.addSubCommand(new Ia(z, z.nextSibling, m.current_layer));
                    m.current_layer.removeChild(z);
                } else {
                    var F = z.nextSibling;
                    B.appendChild(z);
                    h.addSubCommand(new Pa(z, F, m.current_layer));
                }
            }
            p.removeChild(m.current_layer);
            if (!f) {
                Ma();
                Cb();
                ga("changed", [p]);
                wa(h);
            }
            m.current_layer = B;
            return h;
        }
    };
    this.mergeAllLayers = function() {
        var f = new za("Merge all Layers"),
            h = C();
        for (
            h.current_layer = h.all_layers[h.getNumLayers() - 1][1]; $(p).children("g").length > 1;

        )
            f.addSubCommand(b.mergeLayer(true));
        Ma();
        Cb();
        ga("changed", [p]);
        wa(f);
    };
    var Bb = (this.leaveContext = function() {
            var f = Aa.length;
            if (f) {
                for (var h = 0; h < f; h++) {
                    var m = Aa[h],
                        B = pb(m, "orig_opac");
                    B !== 1 ? m.setAttribute("opacity", B) : m.removeAttribute("opacity");
                    m.setAttribute("style", "pointer-events: inherit");
                }
                Aa = [];
                Ma(true);
                ga("contextset", null);
            }
            K = null;
        }),
        Nb = (this.setContext = function(f) {
            Bb();
            if (typeof f === "string") f = pa(f);
            K = f;
            $(f)
                .parentsUntil("#svgcontent")
                .andSelf()
                .siblings()
                .each(function() {
                    var h = this.getAttribute("opacity") || 1;
                    pb(this, "orig_opac", h);
                    this.setAttribute("opacity", h * 0.33);
                    this.setAttribute("style", "pointer-events: none");
                    Aa.push(this);
                });
            Ma();
            ga("contextset", K);
        });
    this.clear = function() {
        Ha.clear();
        Ma();
        b.clearSvgContentElement();
        b.current_drawing_ = new svgedit.draw.Drawing(p);
        b.createLayer("Layer 1");
        b.undoMgr.resetUndoStack();
        sa.initGroup();
        La = sa.getRubberBandBox();
        ga("cleared");
    };
    this.linkControlPoints = Ha.linkControlPoints;
    this.getContentElem = function() {
        return p;
    };
    this.getRootElem = function() {
        return e;
    };
    this.getSelectedElems = function() {
        return H;
    };
    var yb = (this.getResolution = function() {
        var f = p.getAttribute("width") / v,
            h = p.getAttribute("height") / v;
        return { w: f, h: h, zoom: v };
    });
    this.getZoom = function() {
        return v;
    };
    this.getVersion = function() {
        return "svgcanvas.js ($Rev: 2082 $)";
    };
    this.setConfig = function(f) {
        $.extend(l, f);
    };
    this.getTitle = function(f) {
        if ((f = f || H[0])) {
            f = $(f).data("gsvg") || $(f).data("symbol") || f;
            f = f.childNodes;
            for (var h = 0; h < f.length; h++)
                if (f[h].nodeName == "title") return f[h].textContent;
            return "";
        }
    };
    this.setGroupTitle = function(f) {
        var h = H[0];
        h = $(h).data("gsvg") || h;
        var m = $(h).children("title"),
            B = new za("Set Label");
        if (f.length)
            if (m.length) {
                m = m[0];
                B.addSubCommand(new Ja(m, { "#text": m.textContent }));
                m.textContent = f;
            } else {
                m = k.createElementNS(c, "title");
                m.textContent = f;
                $(h).prepend(m);
                B.addSubCommand(new Wa(m));
            }
        else {
            B.addSubCommand(new Ia(m[0], m.nextSibling, h));
            m.remove();
        }
        wa(B);
    };
    this.getDocumentTitle = function() {
        return b.getTitle(p);
    };
    this.setDocumentTitle = function(f) {
        for (
            var h = p.childNodes,
                m = false,
                B = "",
                z = new za("Change Image Title"),
                F = 0; F < h.length; F++
        )
            if (h[F].nodeName == "title") {
                m = h[F];
                B = m.textContent;
                break;
            }
        if (!m) {
            m = k.createElementNS(c, "title");
            p.insertBefore(m, p.firstChild);
        }
        if (f.length) m.textContent = f;
        else m.parentNode.removeChild(m);
        z.addSubCommand(new Ja(m, { "#text": B }));
        wa(z);
    };
    this.getEditorNS = function(f) {
        f && p.setAttribute("xmlns:se", "http://svg-edit.googlecode.com");
        return "http://svg-edit.googlecode.com";
    };
    this.setResolution = function(f, h) {
        var m = yb(),
            B = m.w;
        m = m.h;
        var z;
        if (f == "fit") {
            var F = getStrokedBBox();
            if (F) {
                z = new za("Fit Canvas to Content");
                var D = ob();
                Na(D);
                var u = [],
                    E = [];
                $.each(D, function() {
                    u.push(F.x * -1);
                    E.push(F.y * -1);
                });
                D = b.moveSelectedElements(u, E, true);
                z.addSubCommand(D);
                Ma();
                f = Math.round(F.width);
                h = Math.round(F.height);
            } else return false;
        }
        if (f != B || h != m) {
            z || (z = new za("Change Image Dimensions"));
            f = ua("width", f);
            h = ua("height", h);
            p.setAttribute("width", f);
            p.setAttribute("height", h);
            this.contentW = f;
            this.contentH = h;
            z.addSubCommand(new Ja(p, { width: B, height: m }));
            p.setAttribute("viewBox", [0, 0, f / v, h / v].join(" "));
            z.addSubCommand(new Ja(p, { viewBox: ["0 0", B, m].join(" ") }));
            wa(z);
            if ((background = document.getElementById("canvas_background"))) {
                background.setAttribute("x", -1);
                background.setAttribute("y", -1);
                background.setAttribute("width", f + 2);
                background.setAttribute("height", h + 2);
            }
            ga("changed", [p]);
        }
        return [f, h];
    };
    this.getOffset = function() {
        return $(p).attr(["x", "y"]);
    };
    this.setBBoxZoom = function(f, h, m) {
        var B = 0.85,
            z = function(F) {
                if (!F) return false;
                var D = Math.min(
                    Math.round((h / F.width) * 100 * B) / 100,
                    Math.round((m / F.height) * 100 * B) / 100
                );
                b.setZoom(D);
                return { zoom: D, bbox: F };
            };
        if (typeof f == "object") {
            f = f;
            if (f.width == 0 || f.height == 0) {
                b.setZoom(f.zoom ? f.zoom : v * f.factor);
                return { zoom: v, bbox: f };
            }
            return z(f);
        }
        switch (f) {
            case "selection":
                if (!H[0]) return;
                f = $.map(H, function(F) {
                    if (F) return F;
                });
                f = getStrokedBBox(f);
                break;
            case "canvas":
                f = yb();
                B = 0.95;
                f = { width: f.w, height: f.h, x: 0, y: 0 };
                break;
            case "content":
                f = getStrokedBBox();
                break;
            case "layer":
                f = getStrokedBBox(ob(C().getCurrentLayer()));
                break;
            default:
                return;
        }
        return z(f);
    };
    this.setZoom = function(f) {
        var h = yb();
        p.setAttribute("viewBox", "0 0 " + h.w / f + " " + h.h / f);
        v = f;
        $.each(H, function(m, B) {
            B && sa.requestSelector(B).resize();
        });
        Ha.zoomChange();
        rb("zoomChanged", f);
    };
    this.getMode = function() {
        return ya;
    };
    this.setMode = function(f) {
        Ha.clear();
        bb.clear();
        $("#workarea").attr("class", f);
        Sa = H[0] && H[0].nodeName == "text" ? $a : L;
        ya = f;
    };
    this.getColor = function(f) {
        return Sa[f];
    };
    this.setColor = function(f, h, m) {
        L[f] = h;
        Sa[f + "_paint"] = { type: "solidColor" };
        for (var B = [], z = H.length; z--;) {
            var F = H[z];
            if (F)
                if (F.tagName == "g")
                    svgedit.utilities.walkTree(F, function(D) {
                        D.nodeName != "g" && B.push(D);
                    });
                else if (f == "fill")
                F.tagName != "polyline" && F.tagName != "line" && B.push(F);
            else B.push(F);
        }
        if (B.length > 0)
            if (m) Db(f, h, B);
            else {
                db(f, h, B);
                ga("changed", B);
            }
    };
    var ib = function() {
            var f = p.getElementsByTagNameNS(c, "defs");
            if (f.length > 0) f = f[0];
            else {
                f = k.createElementNS(c, "defs");
                p.firstChild ?
                    p.insertBefore(f, p.firstChild.nextSibling) :
                    p.appendChild(f);
            }
            return f;
        },
        Gb = (this.setGradient = function(f) {
            if (!(!Sa[f + "_paint"] || Sa[f + "_paint"].type == "solidColor")) {
                var h = b[f + "Grad"],
                    m = Mb(h),
                    B = ib();
                if (m) h = m;
                else {
                    h = B.appendChild(k.importNode(h, true));
                    h.id = Y();
                }
                b.setColor(f, "url(#" + h.id + ")");
                if (f == "canvas")
                    (f = document.getElementById("canvas_background")) &&
                    f.setAttribute("fill", "url(#" + h.id + ")");
            }
        }),
        Mb = function(f) {
            var h = ib();
            h = $(h).find("linearGradient, radialGradient");
            for (var m = h.length, B = ["r", "cx", "cy", "fx", "fy"]; m--;) {
                var z = h[m];
                if (f.tagName == "linearGradient") {
                    if (
                        f.getAttribute("x1") != z.getAttribute("x1") ||
                        f.getAttribute("y1") != z.getAttribute("y1") ||
                        f.getAttribute("x2") != z.getAttribute("x2") ||
                        f.getAttribute("y2") != z.getAttribute("y2")
                    )
                        continue;
                } else {
                    var F = $(f).attr(B),
                        D = $(z).attr(B),
                        u = false;
                    $.each(B, function(w, G) {
                        if (F[G] != D[G]) u = true;
                    });
                    if (u) continue;
                }
                var E = f.getElementsByTagNameNS(c, "stop"),
                    J = z.getElementsByTagNameNS(c, "stop");
                if (E.length == J.length) {
                    for (var g = E.length; g--;) {
                        var o = E[g],
                            s = J[g];
                        if (
                            o.getAttribute("offset") != s.getAttribute("offset") ||
                            o.getAttribute("stop-opacity") !=
                            s.getAttribute("stop-opacity") ||
                            o.getAttribute("stop-color") != s.getAttribute("stop-color")
                        )
                            break;
                    }
                    if (g == -1) return z;
                }
            }
            return null;
        };
    this.setPaint = function(f, h) {
        var m = new $.jGraduate.Paint(h);
        this.setPaintOpacity(f, m.alpha / 100, true);
        Sa[f + "_paint"] = m;
        switch (m.type) {
            case "solidColor":
                if (m.solidColor != "none" && m.solidColor != "#none")
                    this.setColor(f, "#" + m.solidColor);
                else {
                    this.setColor(f, "none");
                    document
                        .querySelector(
                            f == "fill" ? "#fill_color rect" : "#stroke_color rect"
                        )
                        .setAttribute("fill", "none");
                }
                break;
            case "linearGradient":
            case "radialGradient":
                b[f + "Grad"] = m[m.type];
                Gb(f);
        }
    };
    this.getStrokeWidth = function() {
        return Sa.stroke_width;
    };
    this.setStrokeWidth = function(f) {
        if (f == 0 && ["line", "path"].indexOf(ya) >= 0) b.setStrokeWidth(1);
        else {
            Sa.stroke_width = f;
            for (var h = [], m = H.length; m--;) {
                var B = H[m];
                if (B)
                    B.tagName == "g" ?
                    svgedit.utilities.walkTree(B, function(z) {
                        z.nodeName != "g" && h.push(z);
                    }) :
                    h.push(B);
            }
            if (h.length > 0) {
                db("stroke-width", f, h);
                ga("changed", H);
            }
        }
    };
    this.setStrokeAttr = function(f, h) {
        L[f.replace("-", "_")] = h;
        for (var m = [], B = H.length; B--;) {
            var z = H[B];
            if (z)
                z.tagName == "g" ?
                svgedit.utilities.walkTree(z, function(F) {
                    F.nodeName != "g" && m.push(F);
                }) :
                m.push(z);
        }
        if (m.length > 0) {
            db(f, h, m);
            ga("changed", H);
        }
    };
    this.getStyle = function() {
        return L;
    };
    this.getOpacity = function() {
        return L.opacity;
    };
    this.setOpacity = function(f) {
        L.opacity = f;
        db("opacity", f);
    };
    this.getFillOpacity = function() {
        return L.fill_opacity;
    };
    this.getStrokeOpacity = function() {
        return L.stroke_opacity;
    };
    this.setPaintOpacity = function(f, h, m) {
        L[f + "_opacity"] = h;
        m ? Db(f + "-opacity", h) : db(f + "-opacity", h);
    };
    this.getBlur = function(f) {
        var h = 0;
        if (f)
            if (f.getAttribute("filter"))
                if ((f = pa(f.id + "_blur")))
                    h = f.firstChild.getAttribute("stdDeviation");
        return h;
    };
    (function() {
        function f() {
            var z = b.undoMgr.finishUndoableChange();
            h.addSubCommand(z);
            wa(h);
            m = h = null;
        }
        var h = null,
            m = null,
            B = false;
        b.setBlurNoUndo = function(z) {
            if (m)
                if (z === 0) {
                    Db("filter", "");
                    B = true;
                } else {
                    var F = H[0];
                    B && Db("filter", "url(#" + F.id + "_blur)");
                    if (svgedit.browser.isWebkit()) {
                        F.removeAttribute("filter");
                        F.setAttribute("filter", "url(#" + F.id + "_blur)");
                    }
                    Db("stdDeviation", z, [m.firstChild]);
                    b.setBlurOffsets(m, z);
                }
            else b.setBlur(z);
        };
        b.setBlurOffsets = function(z, F) {
            if (F > 3)
                na(z, { x: "-50%", y: "-50%", width: "200%", height: "200%" }, 100);
            else if (!svgedit.browser.isWebkit()) {
                z.removeAttribute("x");
                z.removeAttribute("y");
                z.removeAttribute("width");
                z.removeAttribute("height");
            }
        };
        b.setBlur = function(z, F) {
            if (h) f();
            else {
                var D = H[0],
                    u = D.id;
                m = pa(u + "_blur");
                z -= 0;
                var E = new za();
                if (m) {
                    if (z === 0) m = null;
                } else {
                    var J = V({
                        element: "feGaussianBlur",
                        attr: { in: "SourceGraphic", stdDeviation: z },
                    });
                    m = V({ element: "filter", attr: { id: u + "_blur" } });
                    m.appendChild(J);
                    ib().appendChild(m);
                    E.addSubCommand(new Wa(m));
                }
                J = { filter: D.getAttribute("filter") };
                if (z === 0) {
                    D.removeAttribute("filter");
                    E.addSubCommand(new Ja(D, J));
                } else {
                    db("filter", "url(#" + u + "_blur)");
                    E.addSubCommand(new Ja(D, J));
                    b.setBlurOffsets(m, z);
                    h = E;
                    b.undoMgr.beginUndoableChange("stdDeviation", [
                        m ? m.firstChild : null,
                    ]);
                    if (F) {
                        b.setBlurNoUndo(z);
                        f();
                    }
                }
            }
        };
    })();
    this.getBold = function() {
        var f = true;
        H.filter(Boolean).forEach(function(h) {
            if (h.getAttribute("font-weight") != "bold") f = false;
        });
        return f;
    };
    this.setBold = function(f) {
        var h = H.filter(Boolean);
        h.forEach(function(m) {
            if (m != null && m.tagName == "text")
                db("font-weight", f ? "bold" : "normal");
        });
        h[0].textContent || bb.setCursor();
    };
    this.getItalic = function() {
        var f = true;
        H.filter(Boolean).forEach(function(h) {
            if (h.getAttribute("font-style") != "italic") f = false;
        });
        return f;
    };
    this.setItalic = function(f) {
        var h = H.filter(Boolean);
        h.forEach(function(m) {
            if (m != null && m.tagName == "text")
                db("font-style", f ? "italic" : "normal");
        });
        h[0].textContent || bb.setCursor();
    };
    this.getFontFamily = function() {
        return $a.font_family;
    };
    this.setFontFamily = function(f) {
        $a.font_family = f;
        db("font-family", f);
        H[0] && !H[0].textContent && bb.setCursor();
    };
    this.setFontColor = function(f) {
        $a.fill = f;
        db("fill", f);
    };
    this.getFontSize = function() {
        return $a.fill;
    };
    this.getFontSize = function() {
        return $a.font_size;
    };
    this.setFontSize = function(f) {
        $a.font_size = f;
        db("font-size", f);
        H[0].textContent || bb.setCursor();
    };
    this.getText = function() {
        var f = H[0];
        if (f == null) return "";
        return f.textContent;
    };
    this.setTextContent = function(f) {
        db("#text", f);
        bb.init(f);
        bb.setCursor();
    };
    this.setImageURL = function(f) {
        var h = H[0];
        if (h) {
            var m = $(h).attr(["width", "height"]);
            m = !m.width || !m.height;
            var B = ka(h);
            if (B !== f) m = true;
            else if (!m) return;
            var z = new za("Change Image URL");
            aa(h, f);
            z.addSubCommand(new Ja(h, { "#href": B }));
            m
                ?
                $(new Image())
                .load(function() {
                    var F = $(h).attr(["width", "height"]);
                    $(h).attr({ width: this.width, height: this.height });
                    sa.requestSelector(h).resize();
                    z.addSubCommand(new Ja(h, F));
                    wa(z);
                    ga("changed", [h]);
                })
                .attr("src", f) :
                wa(z);
        }
    };
    this.setLinkURL = function(f) {
        var h = H[0];
        if (h) {
            if (h.tagName !== "a") {
                h = $(h).parents("a");
                if (h.length) h = h[0];
                else return;
            }
            var m = ka(h);
            if (m !== f) {
                var B = new za("Change Link URL");
                aa(h, f);
                B.addSubCommand(new Ja(h, { "#href": m }));
                wa(B);
            }
        }
    };
    this.elementsAreSame = function(f) {
        return !f.length || f[0] == null ?
            null :
            H.every(function(h) {
                return h && H[0] ? h.nodeName == H[0].nodeName : null;
            });
    };
    this.setRectRadius = function(f) {
        b.elementsAreSame(H) &&
            H[0].tagName == "rect" &&
            H.forEach(function(h) {
                var m = h.getAttribute("rx");
                if (m != f) {
                    h.setAttribute("rx", f);
                    h.setAttribute("ry", f);
                    wa(new Ja(h, { rx: m, ry: m }, "Radius"));
                    ga("changed", [h]);
                }
            });
    };
    this.makeHyperlink = function(f) {
        b.groupSelectedElements("a", f);
    };
    this.removeHyperlink = function() {
        b.ungroupSelectedElement();
    };
    this.setSegType = function(f) {
        Ha.setSegType(f);
    };
    this.convertToPath = function(f, h) {
        if (f == null)
            $.each(H, function(X, S) {
                S && b.convertToPath(S);
            });
        else {
            if (!h) var m = new za("Convert element to Path");
            var B = h ? {} : {
                fill: L.fill,
                "fill-opacity": L.fill_opacity,
                stroke: L.stroke,
                "stroke-width": L.stroke_width,
                "stroke-dasharray": L.stroke_dasharray,
                "stroke-linejoin": L.stroke_linejoin,
                "stroke-linecap": L.stroke_linecap,
                "stroke-opacity": L.stroke_opacity,
                opacity: L.opacity,
                visibility: "hidden",
            };
            $.each(
                ["marker-start", "marker-end", "marker-mid", "filter", "clip-path"],
                function() {
                    if (f.getAttribute(this)) B[this] = f.getAttribute(this);
                }
            );
            var z = V({ element: "path", attr: B }),
                F = f.getAttribute("transform");
            F && z.setAttribute("transform", F);
            var D = f.id,
                u = f.parentNode;
            f.nextSibling ? u.insertBefore(z, f) : u.appendChild(z);
            var E = "",
                J = function(X) {
                    $.each(X, function(S, W) {
                        var ha = W[1];
                        E += W[0];
                        for (var la = 0; la < ha.length; la += 2)
                            E += ha[la] + "," + ha[la + 1] + " ";
                    });
                },
                g = 1.81;
            switch (f.tagName) {
                case "ellipse":
                case "circle":
                    var o = $(f).attr(["rx", "ry", "cx", "cy"]),
                        s = o.cx,
                        w = o.cy,
                        G = o.rx;
                    o = o.ry;
                    if (f.tagName == "circle") G = o = $(f).attr("r");
                    J([
                        ["M", [s - G, w]],
                        ["C", [s - G, w - o / g, s - G / g, w - o, s, w - o]],
                        ["C", [s + G / g, w - o, s + G, w - o / g, s + G, w]],
                        ["C", [s + G, w + o / g, s + G / g, w + o, s, w + o]],
                        ["C", [s - G / g, w + o, s - G, w + o / g, s - G, w]],
                        ["Z", []],
                    ]);
                    break;
                case "path":
                    E = f.getAttribute("d");
                    break;
                case "line":
                    o = $(f).attr(["x1", "y1", "x2", "y2"]);
                    E = "M" + o.x1 + "," + o.y1 + "L" + o.x2 + "," + o.y2;
                    break;
                case "polyline":
                case "polygon":
                    E = "M" + f.getAttribute("points");
                    break;
                case "rect":
                    o = $(f).attr(["rx", "ry"]);
                    G = o.rx;
                    o = o.ry;
                    var I = f.getBBox();
                    s = I.x;
                    w = I.y;
                    var M = I.width;
                    I = I.height;
                    g = 4 - g;
                    if (!G && !o)
                        J([
                            ["M", [s, w]],
                            ["L", [s + M, w]],
                            ["L", [s + M, w + I]],
                            ["L", [s, w + I]],
                            ["L", [s, w]],
                            ["Z", []],
                        ]);
                    else {
                        o || (o = G);
                        J([
                            ["M", [s, w + o]],
                            ["C", [s, w + o / g, s + G / g, w, s + G, w]],
                            ["L", [s + M - G, w]],
                            ["C", [s + M - G / g, w, s + M, w + o / g, s + M, w + o]],
                            ["L", [s + M, w + I - o]],
                            [
                                "C", [s + M, w + I - o / g, s + M - G / g, w + I, s + M - G, w + I],
                            ],
                            ["L", [s + G, w + I]],
                            ["C", [s + G / g, w + I, s, w + I - o / g, s, w + I - o]],
                            ["L", [s, w + o]],
                            ["Z", []],
                        ]);
                    }
                    break;
                default:
                    z.parentNode.removeChild(z);
            }
            E && z.setAttribute("d", E);
            if (h) {
                Ha.resetOrientation(z);
                m = false;
                try {
                    m = z.getBBox();
                } catch (T) {}
                z.parentNode.removeChild(z);
                return m;
            } else {
                if (F) {
                    F = R(z);
                    ma(F) && Ha.resetOrientation(z);
                }
                m.addSubCommand(new Ia(f, f.nextSibling, u));
                m.addSubCommand(new Wa(z));
                Ma();
                f.parentNode.removeChild(f);
                z.setAttribute("id", D);
                z.removeAttribute("visibility");
                Na([z], true);
                wa(m);
            }
        }
    };
    var Db = (this.changeSelectedAttributeNoUndo = function(f, h, m) {
            ya == "pathedit" && Ha.moveNode(f, h);
            m = m || H;
            for (var B = m.length, z = ["g", "polyline", "path"]; B--;) {
                var F = m[B];
                if (F != null) {
                    ya === "textedit" &&
                        f !== "#text" &&
                        F.textContent.length &&
                        bb.toSelectMode(F);
                    if ((f === "x" || f === "y") && z.indexOf(F.tagName) >= 0) {
                        var D = getStrokedBBox([F]);
                        b.moveSelectedElements(
                            (f === "x" ? h - D.x : 0) * v,
                            (f === "y" ? h - D.y : 0) * v,
                            true
                        );
                    } else {
                        D = f === "#text" ? F.textContent : F.getAttribute(f);
                        if (D == null) D = "";
                        if (D !== String(h)) {
                            if (f == "#text") {
                                svgedit.utilities.getBBox(F);
                                F.textContent = h;
                            } else f == "#href" ? aa(F, h) : F.setAttribute(f, h);
                            H.indexOf(F) >= 0 &&
                                setTimeout(function() {
                                    F.parentNode && sa.requestSelector(F).resize();
                                }, 0);
                            D = qa(F);
                            if (D != 0 && f != "transform")
                                for (var u = R(F), E = u.numberOfItems; E--;)
                                    if (u.getItem(E).type == 4) {
                                        u.removeItem(E);
                                        var J = svgedit.utilities.getBBox(F),
                                            g = N(J.x + J.width / 2, J.y + J.height / 2, Z(u).matrix);
                                        J = g.x;
                                        g = g.y;
                                        var o = e.createSVGTransform();
                                        o.setRotate(D, J, g);
                                        u.insertItemBefore(o, E);
                                        break;
                                    }
                        }
                    }
                }
            }
        }),
        db = (this.changeSelectedAttribute = function(f, h, m) {
            m = m || H;
            b.undoMgr.beginUndoableChange(f, m);
            Db(f, h, m);
            f = b.undoMgr.finishUndoableChange();
            f.isEmpty() || wa(f);
        });
    this.deleteSelectedElements = function() {
        for (
            var f = new za("Delete Elements"), h = H.length, m = [], B = 0; B < h;
            ++B
        ) {
            var z = H[B];
            if (z == null) break;
            var F = z.parentNode,
                D = z;
            sa.releaseSelector(D);
            svgedit.path.removePath_(D.id);
            if (F.tagName === "a" && F.childNodes.length === 1) {
                D = F;
                F = F.parentNode;
            }
            var u = D.nextSibling;
            D = F.removeChild(D);
            m.push(z);
            H[B] = null;
            f.addSubCommand(new Ia(D, u, F));
        }
        f.isEmpty() || wa(f);
        ga("changed", m);
        Ma();
    };
    this.cutSelectedElements = function() {
        for (
            var f = new za("Cut Elements"), h = H.length, m = [], B = 0; B < h;
            ++B
        ) {
            var z = H[B];
            if (z == null) break;
            var F = z.parentNode,
                D = z;
            sa.releaseSelector(D);
            svgedit.path.removePath_(D.id);
            var u = D.nextSibling;
            D = F.removeChild(D);
            m.push(z);
            H[B] = null;
            f.addSubCommand(new Ia(D, u, F));
        }
        f.isEmpty() || wa(f);
        ga("changed", m);
        Ma();
        b.clipBoard = m;
    };
    this.copySelectedElements = function() {
        b.clipBoard = $.merge([], H);
    };
    this.pasteElements = function() {
        var f = b.clipBoard,
            h = f.length;
        if (h) {
            for (var m = [], B = new za("Paste elements"); h--;) {
                var z = f[h];
                if (z) {
                    var F = lb(z);
                    if (!pa(z.id)) F.id = z.id;
                    m.push(F);
                    (K || C().getCurrentLayer()).appendChild(F);
                    B.addSubCommand(new Wa(F));
                }
            }
            svgCanvas.clearSelection();
            setTimeout(function() {
                sb(m);
            }, 100);
            wa(B);
            ga("changed", m);
        }
    };
    this.groupSelectedElements = function(f) {
        f || (f = "g");
        var h = "";
        switch (f) {
            case "a":
                h = "Make hyperlink";
                var m = "";
                if (arguments.length > 1) m = arguments[1];
                break;
            default:
                f = "g";
                h = "Group Elements";
        }
        h = new za(h);
        var B = V({ element: f, attr: { id: Y() } });
        f === "a" && aa(B, m);
        h.addSubCommand(new Wa(B));
        for (m = H.length; m--;) {
            var z = H[m];
            if (z != null) {
                if (
                    z.parentNode.tagName === "a" &&
                    z.parentNode.childNodes.length === 1
                )
                    z = z.parentNode;
                var F = z.nextSibling,
                    D = z.parentNode;
                B.appendChild(z);
                h.addSubCommand(new Pa(z, F, D));
            }
        }
        h.isEmpty() || wa(h);
        sb([B], true);
    };
    var Ab = (this.pushGroupProperties = function(f, h) {
        var m = f.childNodes,
            B = m.length,
            z = f.getAttribute("transform"),
            F = R(f),
            D = Z(F).matrix,
            u = new za("Push group properties"),
            E = 0,
            J = qa(f),
            g = $(f).attr(["filter", "opacity"]),
            o,
            s;
        for (E = 0; E < B; E++) {
            var w = m[E];
            if (w.nodeType === 1) {
                if (g.opacity !== null && g.opacity !== 1) {
                    w.getAttribute("opacity");
                    var G =
                        Math.round((w.getAttribute("opacity") || 1) * g.opacity * 100) /
                        100;
                    db("opacity", G, [w]);
                }
                if (g.filter) {
                    var I = (G = this.getBlur(w));
                    s || (s = this.getBlur(f));
                    if (G) G = s - 0 + (G - 0);
                    else if (G === 0) G = s;
                    if (I) o = Q(w.getAttribute("filter"));
                    else if (o) {
                        o = lb(o);
                        ib().appendChild(o);
                    } else o = Q(g.filter);
                    o.id =
                        w.id +
                        "_" +
                        (o.firstChild.tagName === "feGaussianBlur" ? "blur" : "filter");
                    db("filter", "url(#" + o.id + ")", [w]);
                    if (G) {
                        db("stdDeviation", G, [o.firstChild]);
                        b.setBlurOffsets(o, G);
                    }
                }
                G = R(w);
                if (~w.tagName.indexOf("Gradient")) G = null;
                if (G)
                    if (w.tagName !== "defs")
                        if (F.numberOfItems) {
                            if (J && F.numberOfItems == 1) {
                                var M = F.getItem(0).matrix,
                                    T = e.createSVGMatrix();
                                if ((I = qa(w))) T = G.getItem(0).matrix;
                                var X = svgedit.utilities.getBBox(w),
                                    S = Z(G).matrix,
                                    W = N(X.x + X.width / 2, X.y + X.height / 2, S);
                                X = J + I;
                                S = e.createSVGTransform();
                                S.setRotate(X, W.x, W.y);
                                M = ca(M, T, S.matrix.inverse());
                                I && G.removeItem(0);
                                if (X)
                                    G.numberOfItems ? G.insertItemBefore(S, 0) : G.appendItem(S);
                                if (M.e || M.f) {
                                    I = e.createSVGTransform();
                                    I.setTranslate(M.e, M.f);
                                    G.numberOfItems ? G.insertItemBefore(I, 0) : G.appendItem(I);
                                }
                            } else {
                                I = w.getAttribute("transform");
                                M = {};
                                M.transform = I ? I : "";
                                I = e.createSVGTransform();
                                M = Z(G).matrix;
                                T = M.inverse();
                                M = ca(T, D, M);
                                I.setMatrix(M);
                                G.appendItem(I);
                            }
                            (w = Xa(w)) && u.addSubCommand(w);
                        }
            }
        }
        if (z) {
            M = {};
            M.transform = z;
            f.setAttribute("transform", "");
            f.removeAttribute("transform");
            u.addSubCommand(new Ja(f, M));
        }
        if (h && !u.isEmpty()) return u;
    });
    this.ungroupSelectedElement = function() {
        var f = H[0];
        if ($(f).data("gsvg") || $(f).data("symbol")) Lb(f);
        else if (f.tagName === "use") {
            var h = pa(ka(f).substr(1));
            $(f).data("symbol", h).data("ref", h);
            Lb(f);
        } else {
            h = $(f).parents("a");
            if (h.length) f = h[0];
            if (f.tagName === "g" || f.tagName === "a") {
                h = new za("Ungroup Elements");
                var m = Ab(f, true);
                m && h.addSubCommand(m);
                m = f.parentNode;
                for (
                    var B = f.nextSibling, z = Array(f.childNodes.length), F = 0; f.firstChild;

                ) {
                    var D = f.firstChild,
                        u = D.nextSibling,
                        E = D.parentNode;
                    if (D.tagName === "title") {
                        h.addSubCommand(new Ia(D, D.nextSibling, E));
                        E.removeChild(D);
                    } else {
                        z[F++] = D = m.insertBefore(D, B);
                        h.addSubCommand(new Pa(D, u, E));
                    }
                }
                Ma();
                B = f.nextSibling;
                f = m.removeChild(f);
                h.addSubCommand(new Ia(f, B, m));
                h.isEmpty() || wa(h);
                Na(z);
            }
        }
    };
    this.moveToTopSelectedElement = function() {
        var f = H.filter(Boolean).reverse(),
            h = new za("Move to top");
        f.forEach(function(m) {
            m = m;
            var B = m.parentNode,
                z = m.nextSibling;
            m = m.parentNode.appendChild(m);
            if (z != m.nextSibling) {
                h.addSubCommand(new Pa(m, z, B, "top"));
                ga("changed", [m]);
            }
            h.isEmpty() || wa(h);
        });
    };
    this.moveToBottomSelectedElement = function() {
        var f = H.filter(Boolean).reverse(),
            h = new za("Move to top");
        f.forEach(function(m) {
            m = m;
            var B = m.parentNode,
                z = m.nextSibling,
                F = m.parentNode.firstChild;
            if (F.tagName == "title") F = F.nextSibling;
            if (F.tagName == "defs") F = F.nextSibling;
            m = m.parentNode.insertBefore(m, F);
            if (z != m.nextSibling) {
                h.addSubCommand(new Pa(m, z, B, "bottom"));
                ga("changed", [m]);
            }
        });
        h.isEmpty() || wa(h);
    };
    this.moveUpDownSelected = function(f) {
        var h = H.filter(Boolean);
        f == "Down" && h.reverse();
        var m = new za("Move " + f);
        h.forEach(function(B) {
            Ga = [];
            var z,
                F,
                D = $(gb(getStrokedBBox([B]))).toArray();
            f == "Down" && D.reverse();
            $.each(D, function() {
                if (F) {
                    z = this;
                    return false;
                } else if (this == B) F = true;
            });
            if (z) {
                D = B.parentNode;
                var u = B.nextSibling;
                $(z)[f == "Down" ? "before" : "after"](B);
                if (u != B.nextSibling) {
                    m.addSubCommand(new Pa(B, u, D, "Move " + f));
                    ga("changed", [B]);
                }
            }
        });
        m.isEmpty() || wa(m);
    };
    this.moveSelectedElements = function(f, h, m) {
        if (f.constructor != Array) {
            f /= v;
            h /= v;
        }
        m = m || true;
        for (var B = new za("position"), z = H.length; z--;) {
            var F = H[z];
            if (F != null) {
                var D = e.createSVGTransform(),
                    u = R(F);
                f.constructor == Array ?
                    D.setTranslate(f[z], h[z]) :
                    D.setTranslate(f, h);
                u.numberOfItems ? u.insertItemBefore(D, 0) : u.appendItem(D);
                (D = Xa(F)) && B.addSubCommand(D);
                sa.requestSelector(F).resize();
            }
        }
        if (!B.isEmpty()) {
            m && wa(B);
            ga("changed", H);
            return B;
        }
    };
    this.cloneSelectedElements = function(f, h, m) {
        for (var B = new za("Clone Elements"), z = H.length, F = 0; F < z; ++F) {
            var D = H[F];
            if (D == null) break;
        }
        z = H.slice(0, F);
        this.clearSelection(true);
        F = z.length;
        for (clones = []; F--;) {
            D = z[F];
            var u = lb(z[F]),
                E = K || C().getCurrentLayer();
            if (m) {
                tlist = R(u);
                tlist.removeItem(0);
                Xa(u);
                E.insertBefore(u, D);
            } else E.appendChild(u);
            clones.push(u);
            B.addSubCommand(new Wa(u));
        }
        if (!B.isEmpty()) {
            Na(z.reverse());
            m || this.moveSelectedElements(f, h, false);
            wa(B);
        }
        return clones;
    };
    this.alignSelectedElements = function(f, h) {
        var m = [],
            B = Number.MAX_VALUE,
            z = Number.MIN_VALUE,
            F = Number.MAX_VALUE,
            D = Number.MIN_VALUE,
            u = Number.MIN_VALUE,
            E = Number.MIN_VALUE,
            J = H.length;
        if (J) {
            for (var g = 0; g < J; ++g) {
                if (H[g] == null) break;
                m[g] = getStrokedBBox([H[g]]);
                switch (h) {
                    case "smallest":
                        if (
                            ((f == "l" || f == "c" || f == "r") &&
                                (u == Number.MIN_VALUE || u > m[g].width)) ||
                            ((f == "t" || f == "m" || f == "b") &&
                                (E == Number.MIN_VALUE || E > m[g].height))
                        ) {
                            B = m[g].x;
                            F = m[g].y;
                            z = m[g].x + m[g].width;
                            D = m[g].y + m[g].height;
                            u = m[g].width;
                            E = m[g].height;
                        }
                        break;
                    case "largest":
                        if (
                            ((f == "l" || f == "c" || f == "r") &&
                                (u == Number.MIN_VALUE || u < m[g].width)) ||
                            ((f == "t" || f == "m" || f == "b") &&
                                (E == Number.MIN_VALUE || E < m[g].height))
                        ) {
                            B = m[g].x;
                            F = m[g].y;
                            z = m[g].x + m[g].width;
                            D = m[g].y + m[g].height;
                            u = m[g].width;
                            E = m[g].height;
                        }
                        break;
                    default:
                        if (m[g].x < B) B = m[g].x;
                        if (m[g].y < F) F = m[g].y;
                        if (m[g].x + m[g].width > z) z = m[g].x + m[g].width;
                        if (m[g].y + m[g].height > D) D = m[g].y + m[g].height;
                }
            }
            if (h == "page") {
                F = B = 0;
                z = b.contentW;
                D = b.contentH;
            }
            u = Array(J);
            E = Array(J);
            for (g = 0; g < J; ++g) {
                if (H[g] == null) break;
                var o = m[g];
                u[g] = 0;
                E[g] = 0;
                switch (f) {
                    case "l":
                        u[g] = B - o.x;
                        break;
                    case "c":
                        u[g] = (B + z) / 2 - (o.x + o.width / 2);
                        break;
                    case "r":
                        u[g] = z - (o.x + o.width);
                        break;
                    case "t":
                        E[g] = F - o.y;
                        break;
                    case "m":
                        E[g] = (F + D) / 2 - (o.y + o.height / 2);
                        break;
                    case "b":
                        E[g] = D - (o.y + o.height);
                }
            }
            this.moveSelectedElements(u, E);
        }
    };
    this.contentW = yb().w;
    this.contentH = yb().h;
    this.updateCanvas = function(f, h) {
        e.setAttribute("width", f);
        e.setAttribute("height", h);
        var m = $("#canvasBackground")[0],
            B = p.getAttribute("x"),
            z = p.getAttribute("y"),
            F = f / 2 - (this.contentW * v) / 2,
            D = h / 2 - (this.contentH * v) / 2;
        na(p, {
            width: this.contentW * v,
            height: this.contentH * v,
            x: F,
            y: D,
            viewBox: "0 0 " + this.contentW + " " + this.contentH,
        });
        na(m, {
            width: p.getAttribute("width"),
            height: p.getAttribute("height"),
            x: F,
            y: D,
        });
        (m = pa("background_image")) && na(m, { width: "100%", height: "100%" });
        sa.selectorParentGroup.setAttribute(
            "transform",
            "translate(" + F + "," + D + ")"
        );
        return { x: F, y: D, old_x: B, old_y: z, d_x: F - B, d_y: D - z };
    };
    this.setBackground = function(f, h) {
        var m = pa("canvasBackground"),
            B = $(m).find("rect")[0],
            z = pa("background_image");
        B.setAttribute("fill", f);
        if (h) {
            if (!z) {
                z = k.createElementNS(c, "image");
                na(z, {
                    id: "background_image",
                    width: "100%",
                    height: "100%",
                    preserveAspectRatio: "xMinYMin",
                    style: "pointer-events:none",
                });
            }
            aa(z, h);
            m.appendChild(z);
        } else z && z.parentNode.removeChild(z);
    };
    this.cycleElement = function(f) {
        var h = H[0],
            m = false,
            B = ob(K || C().getCurrentLayer());
        if (B.length) {
            if (h == null) {
                f = f ? B.length - 1 : 0;
                m = B[f];
            } else
                for (var z = B.length; z--;)
                    if (B[z] == h) {
                        f = f ? z - 1 : z + 1;
                        if (f >= B.length) f = 0;
                        else if (f < 0) f = B.length - 1;
                        m = B[f];
                        break;
                    }
            sb([m], true);
            ga("selected", H);
        }
    };
    this.clear();
    this.getPrivateMethods = function() {
        return {
            addCommandToHistory: wa,
            setGradient: Gb,
            addSvgElementFromJson: V,
            assignAttributes: na,
            BatchCommand: za,
            call: ga,
            ChangeElementCommand: Ja,
            copyElem: lb,
            ffClone: P,
            findDefs: ib,
            findDuplicateGradient: Mb,
            getElem: pa,
            getId: ia,
            getIntersectionList: gb,
            getMouseTarget: Fb,
            getNextId: Y,
            getPathBBox: da,
            getUrlFromAttr: ja,
            hasMatrixTransform: ma,
            identifyLayers: Cb,
            InsertElementCommand: Wa,
            isIdentity: svgedit.math.isIdentity,
            logMatrix: Qa,
            matrixMultiply: ca,
            MoveElementCommand: Pa,
            preventClickDefault: zb,
            recalculateAllSelectedDimensions: ba,
            recalculateDimensions: Xa,
            remapElement: Ua,
            RemoveElementCommand: Ia,
            removeUnusedDefElems: Kb,
            round: kb,
            runExtensions: rb,
            sanitizeSvg: Ea,
            SVGEditTransformList: svgedit.transformlist.SVGTransformList,
            toString: toString,
            transformBox: svgedit.math.transformBox,
            transformListToTransform: Z,
            transformPoint: N,
            walkTree: svgedit.utilities.walkTree,
        };
    };
};
(function() {
    if (!window.methodDraw)
        window.methodDraw = (function(a) {
            function n(p, A) {
                var C = d.setSvgString(p) !== false;
                A = A || a.noop;
                C
                    ?
                    A(true) :
                    a.alert("Error: Unable to load SVG data", function() {
                        A(false);
                    });
            }
            var d,
                c = {},
                l = false,
                q = {
                    canvas_expansion: 1,
                    dimensions: [580, 400],
                    initFill: { color: "fff", opacity: 1 },
                    initStroke: { width: 1.5, color: "000", opacity: 1 },
                    initOpacity: 1,
                    imgPath: "images/",
                    extPath: "extensions/",
                    jGraduatePath: "lib/jgraduate/images/",
                    extensions: [],
                    initTool: "select",
                    wireframe: false,
                    colorPickerCSS: false,
                    gridSnapping: false,
                    gridColor: "#000",
                    baseUnit: "px",
                    snappingStep: 10,
                    showRulers: svgedit.browser.isTouch() ? false : true,
                    show_outside_canvas: false,
                    no_save_warning: true,
                    initFont: "Helvetica, Arial, sans-serif",
                },
                b = {},
                k = {};
            c.curConfig = q;
            c.tool_scale = 1;
            c.setConfig = function(p) {
                a.extend(true, q, p);
                if (p.extensions) q.extensions = p.extensions;
            };
            c.setCustomHandlers = function(p) {
                c.ready(function() {
                    if (p.open) {
                        a('#tool_open > input[type="file"]').remove();
                        a("#tool_open").show();
                        d.open = p.open;
                    }
                    if (p.save) {
                        c.show_save_warning = false;
                        d.bind("saved", p.save);
                    }
                    p.pngsave && d.bind("exported", p.pngsave);
                    k = p;
                });
            };
            c.randomizeIds = function() {
                d.randomizeIds(arguments);
            };
            c.init = function() {
                (function() {
                    var g = window.opener;
                    if (g)
                        try {
                            var o = g.document.createEvent("Event");
                            o.initEvent("methodDrawReady", true, true);
                            g.document.documentElement.dispatchEvent(o);
                        } catch (s) {}
                })();
                a("body").toggleClass("touch", svgedit.browser.isTouch());
                a("#canvas_width").val(q.dimensions[0]);
                a("#canvas_height").val(q.dimensions[1]);
                var p = function() {
                    a.each(q.extensions, function() {
                        var g = this;
                        a.getScript(q.extPath + g, function(o) {
                            if (!o) {
                                o = document.createElement("script");
                                o.src = q.extPath + g;
                                document.querySelector("head").appendChild(o);
                            }
                        });
                    });
                };
                document.location.protocol === "file:" ? setTimeout(p, 100) : p();
                a.svgIcons(q.imgPath + "svg_edit_icons.svg", {
                    w: 27,
                    h: 27,
                    id_match: false,
                    no_img: true,
                    fallback_path: q.imgPath,
                    fallback: {
                        logo: "logo.png",
                        select: "select.png",
                        select_node: "select_node.png",
                        pencil: "pencil.png",
                        pen: "line.png",
                        rect: "square.png",
                        ellipse: "ellipse.png",
                        path: "path.png",
                        text: "text.png",
                        image: "image.png",
                        zoom: "zoom.png",
                        delete: "delete.png",
                        spapelib: "shapelib.png",
                        node_delete: "node_delete.png",
                        align_left: "align-left.png",
                        align_center: "align-center.png",
                        align_right: "align-right.png",
                        align_top: "align-top.png",
                        align_middle: "align-middle.png",
                        align_bottom: "align-bottom.png",
                        arrow_right: "flyouth.png",
                        arrow_down: "dropdown.gif",
                    },
                    placement: {
                        "#logo": "logo",
                        "#tool_select": "select",
                        "#tool_fhpath": "pencil",
                        "#tool_line": "pen",
                        "#tool_rect,#tools_rect_show": "rect",
                        "#tool_ellipse,#tools_ellipse_show": "ellipse",
                        "#tool_path": "path",
                        "#tool_text,#layer_rename": "text",
                        "#tool_image": "image",
                        "#tool_zoom": "zoom",
                        "#tool_node_clone": "node_clone",
                        "#tool_node_delete": "node_delete",
                        "#tool_add_subpath": "add_subpath",
                        "#tool_openclose_path": "open_path",
                        "#tool_alignleft, #tool_posleft": "align_left",
                        "#tool_aligncenter, #tool_poscenter": "align_center",
                        "#tool_alignright, #tool_posright": "align_right",
                        "#tool_aligntop, #tool_postop": "align_top",
                        "#tool_alignmiddle, #tool_posmiddle": "align_middle",
                        "#tool_alignbottom, #tool_posbottom": "align_bottom",
                        "#cur_position": "align",
                        "#zoomLabel": "zoom",
                    },
                    resize: {
                        "#logo .svg_icon": 15,
                        ".flyout_arrow_horiz .svg_icon": 5,
                        "#fill_bg .svg_icon, #stroke_bg .svg_icon": svgedit.browser.isTouch() ?
                            24 : 24,
                        ".palette_item:first .svg_icon": svgedit.browser.isTouch() ?
                            30 : 16,
                        "#zoomLabel .svg_icon": 16,
                        "#zoom_dropdown .svg_icon": 7,
                    },
                    callback: function() {
                        a(
                            ".toolbar_button button > svg, .toolbar_button button > img"
                        ).each(function() {
                            a(this).parent().prepend(this);
                        });
                        a(".tool_button, .tool_button_current").addClass("loaded");
                        var g = a("#tools_left");
                        if (g.length != 0) {
                            g.offset();
                            g.outerHeight();
                        }
                        a(".tools_flyout").each(function() {
                            var o = a("#" + this.id + "_show"),
                                s = o.attr("data-curopt");
                            if (!o.children("svg, img").length) {
                                s = a(s).children().clone();
                                if (s.length) {
                                    s[0].removeAttribute("style");
                                    o.append(s);
                                }
                            }
                        });
                        methodDraw.runCallbacks();
                        setTimeout(function() {
                            a(".flyout_arrow_horiz:empty").each(function() {
                                a(this).append(a.getSvgIcon("arrow_right").width(5).height(5));
                            });
                        }, 1);
                    },
                });
                a("#rulers").on("dblclick", function(g) {
                    a("#base_unit_container").css({
                        top: g.pageY - 10,
                        left: g.pageX - 50,
                        display: "block",
                    });
                });
                a("#base_unit_container").on("mouseleave mouseenter", function() {
                    t = setTimeout(function() {
                        a("#base_unit_container").fadeOut(500);
                    }, 200);
                    event.type == "mouseover" && clearTimeout(t);
                });
                a("#base_unit").on("change", function() {
                    savePreferences();
                });
                c.canvas = d = new a.SvgCanvas(document.getElementById("svgcanvas"), q);
                c.show_save_warning = false;
                c.paintBox = { fill: null, stroke: null, canvas: null };
                p = navigator.platform.indexOf("Mac") >= 0;
                var A = navigator.userAgent.indexOf("AppleWebKit") >= 0,
                    C = p ? "meta+" : "ctrl+",
                    v = d.pathActions,
                    K = d.undoMgr,
                    O = q.imgPath + "placeholder.svg",
                    L = a("#workarea"),
                    H = a("#cmenu_canvas"),
                    V = null,
                    R = 1,
                    N = "toolbars",
                    ca = "";
                p ||
                    a(".shortcut").each(function() {
                        var g = a(this).text();
                        a(this).text(g.split("\u2318").join("Ctrl+"));
                    });
                (function() {
                    a("#dialog_container").draggable({
                        cancel: "#dialog_content, #dialog_buttons *",
                        containment: "window",
                    });
                    var g = a("#dialog_box"),
                        o = a("#dialog_buttons"),
                        s = function(w, G, I, M) {
                            a("#dialog_content")
                                .html("<p>" + G.replace(/\n/g, "</p><p>") + "</p>")
                                .toggleClass("prompt", w == "prompt");
                            o.empty();
                            var T = a('<input type="button" value="OK">').appendTo(o);
                            w != "alert" &&
                                a('<input type="button" value="Cancel">')
                                .appendTo(o)
                                .on("click touchstart", function() {
                                    g.hide();
                                    I(false);
                                });
                            if (w == "prompt") {
                                var X = a('<input type="text">').prependTo(o);
                                X.val(M || "");
                                X.bind("keydown", "return", function() {
                                    T.trigger("click touchstart");
                                });
                            }
                            w == "process" && T.hide();
                            g.show();
                            T.on("click touchstart", function() {
                                g.hide();
                                var S = w == "prompt" ? X.val() : true;
                                I && I(S);
                            }).focus();
                            w == "prompt" && X.focus();
                        };
                    a.alert = function(w, G) {
                        s("alert", w, G);
                    };
                    a.confirm = function(w, G) {
                        s("confirm", w, G);
                    };
                    a.process_cancel = function(w, G) {
                        s("process", w, G);
                    };
                    a.prompt = function(w, G, I) {
                        s("prompt", w, I, G);
                    };
                })();
                var ma = function() {
                        var g = a(".tool_button_current");
                        if (g.length && g[0].id !== "tool_select") {
                            g.removeClass("tool_button_current").addClass("tool_button");
                            a("#tool_select")
                                .addClass("tool_button_current")
                                .removeClass("tool_button");
                        }
                        d.setMode("select");
                    },
                    Z = null,
                    U = false,
                    fa = false,
                    ua = "",
                    ja = function(g, o) {
                        var s = d.getResolution(),
                            w = L;
                        a("#svgcanvas").position();
                        if ((w = d.setBBoxZoom(o, w.width() - 15, w.height() - 15))) {
                            var G = w.zoom;
                            w = w.bbox;
                            if (G < 0.001) wa({ value: 0.1 });
                            else {
                                typeof animatedZoom != "undefined" &&
                                    g.cancelAnimationFrame(animatedZoom);
                                var I = Date.now(),
                                    M = G - s.zoom;
                                a("#zoom");
                                var T = s.zoom,
                                    X = function() {
                                        var S = (Date.now() - I) / 500;
                                        S = Math.pow(S - 1, 3) + 1;
                                        d.setZoom(T + M * S);
                                        D();
                                        if (S < 1 && S > -0.9)
                                            g.animatedZoom = requestAnimationFrame(X);
                                        else {
                                            a("#zoom").val(parseInt(G * 100));
                                            a("option", "#zoom_select").removeAttr("selected");
                                            a(
                                                "option[value=" + parseInt(G * 100) + "]",
                                                "#zoom_select"
                                            ).attr("selected", "selected");
                                        }
                                    };
                                X();
                                d.getMode() == "zoom" && w.width && ma();
                                Bb();
                            }
                        }
                    };
                a("#cur_context_panel").delegate("a", "click", function() {
                    var g = a(this);
                    g.attr("data-root") ? d.leaveContext() : d.setContext(g.text());
                    d.clearSelection();
                    return false;
                });
                var ka = function() {
                        c.paintBox.fill.prep();
                        c.paintBox.stroke.prep();
                    },
                    aa = {},
                    da = function(g) {
                        a.each(g, function(o, s) {
                            var w = a(o).children(),
                                G = o + "_show",
                                I = a(G),
                                M = false;
                            w.addClass("tool_button")
                                .unbind("click mousedown mouseup")
                                .each(function(S) {
                                    var W = s[S];
                                    aa[W.sel] = W.fn;
                                    if (W.isDefault) M = S;
                                    S = function(ha) {
                                        var la = W;
                                        if (ha.type === "keydown") {
                                            var ea = a(la.parent + "_show").hasClass(
                                                    "tool_button_current"
                                                ),
                                                ta = a(la.parent + "_show").attr("data-curopt");
                                            a.each(g[W.parent], function(xa, Da) {
                                                if (Da.sel == ta)
                                                    la = !ha.shiftKey || !ea ?
                                                    Da :
                                                    g[W.parent][xa + 1] || g[W.parent][0];
                                            });
                                        }
                                        if (a(this).hasClass("disabled")) return false;
                                        sa(G) && la.fn();
                                        var Ba = la.icon ?
                                            a.getSvgIcon(la.icon, true) :
                                            a(la.sel).children().eq(0).clone();
                                        Ba[0].setAttribute("width", I.width());
                                        Ba[0].setAttribute("height", I.height());
                                        I.children(":not(.flyout_arrow_horiz)").remove();
                                        I.append(Ba).attr("data-curopt", la.sel);
                                    };
                                    a(this).mouseup(S);
                                    W.key &&
                                        a(document).bind(
                                            "keydown",
                                            W.key[0] + " shift+" + W.key[0],
                                            S
                                        );
                                });
                            if (M) I.attr("data-curopt", s[M].sel);
                            else I.attr("data-curopt") || I.attr("data-curopt", s[0].sel);
                            var T,
                                X = a(G).position();
                            a(o).css({ left: X.left + 34, top: X.top + 77 });
                            I.mousedown(function(S) {
                                a("#workarea").one("mousedown", function() {
                                    a("#tools_shapelib").hide();
                                });
                                a("#tools_shapelib").is(":visible") && sa(G, false);
                                if (I.hasClass("disabled")) return false;
                                var W = a(o),
                                    ha = X.left + 34,
                                    la = W.width() * -1,
                                    ea = W.data("shown_popop") ? 200 : 0;
                                T = setTimeout(function() {
                                    I.data("isLibrary") ?
                                        W.css("left", ha).show() :
                                        W.css("left", la).show().animate({ left: ha }, 50);
                                    W.data("shown_popop", true);
                                }, ea);
                                S.preventDefault();
                            }).mouseup(function() {
                                clearTimeout(T);
                                var S = a(this).attr("data-curopt");
                                if (
                                    I.data("isLibrary") &&
                                    a(G.replace("_show", "")).is(":visible")
                                )
                                    sa(G, true);
                                else sa(G) && S in aa && aa[S]();
                            });
                        });
                        na();
                    },
                    qa = function(g, o) {
                        return a("<div>", { class: "tools_flyout", id: g })
                            .appendTo("#svg_editor")
                            .append(o);
                    },
                    pa = function() {
                        a(".tools_flyout").each(function() {
                            var g = a("#" + this.id + "_show"),
                                o = g.offset();
                            g = g.outerWidth();
                            a(this).css({ left: (o.left + g) * R, top: o.top });
                        });
                    },
                    na = function() {
                        a(".tools_flyout").each(function() {
                            var g = a("#" + this.id + "_show");
                            if (!g.data("isLibrary")) {
                                var o = [];
                                a(this)
                                    .children()
                                    .each(function() {
                                        o.push(this.title);
                                    });
                                g[0].title = o.join(" / ");
                            }
                        });
                    },
                    oa,
                    Ka = function(g, o, s) {
                        var w = null;
                        if (g.indexOf("url(#") === 0) {
                            g = (g = d.getRefElem(g)) ?
                                g.cloneNode(true) :
                                a("#" + s + "_color defs *")[0];
                            w = { alpha: o };
                            w[g.tagName] = g;
                        } else
                            w =
                            g.indexOf("#") === 0 ? { alpha: o, solidColor: g.substr(1) } : { alpha: o, solidColor: "none" };
                        return new a.jGraduate.Paint(w);
                    },
                    Ea = d.getResolution();
                if (q.baseUnit !== "px") {
                    Ea.w = svgedit.units.convertUnit(Ea.w) + q.baseUnit;
                    Ea.h = svgedit.units.convertUnit(Ea.h) + q.baseUnit;
                }
                var Pa = function(g) {
                    d.createLayer("background");
                    cur_shape = d.addSvgElementFromJson({
                        element: "rect",
                        attr: {
                            x: -1,
                            y: -1,
                            width: Ea.w + 2,
                            height: Ea.h + 2,
                            stroke: "none",
                            id: "canvas_background",
                            opacity: 1,
                            fill: g || "#fff",
                            style: "pointer-events:none",
                        },
                    });
                    d.setCurrentLayer("Layer 1");
                    d.setCurrentLayerPosition("1");
                };
                document.getElementById("canvas_background") || Pa();
                document.getElementById("canvas_background").getAttribute("fill");
                var Wa = (c.setImageURL = function(g) {
                        g || (g = O);
                        d.setImageURL(g);
                        a("#image_url").val(g);
                    }),
                    Ia = function() {
                        var g = Z;
                        if (g != null && !g.parentNode) g = null;
                        if (U && U[0] != null && !U[0].parentNode) U = false;
                        var o = d.getCurrentDrawing().getCurrentLayerName(),
                            s = d.getMode(),
                            w = q.baseUnit !== "px" ? q.baseUnit : null,
                            G = s == "pathedit";
                        if (G) {
                            a(".context_panel").hide();
                            a("#path_node_panel").show();
                            a("#stroke_panel").hide();
                            o = v.getNodePoint();
                            a("#tool_add_subpath")
                                .removeClass("push_button_pressed")
                                .addClass("tool_button");
                            a("#tool_node_delete").toggleClass("disabled", !v.canDeleteNodes);
                            ib(
                                "#tool_openclose_path",
                                v.closed_subpath ? "open_path" : "close_path"
                            );
                            if (o) {
                                G = a("#seg_type");
                                if (w) {
                                    o.x = svgedit.units.convertUnit(o.x);
                                    o.y = svgedit.units.convertUnit(o.y);
                                }
                                a("#path_node_x").val(Math.round(o.x));
                                a("#path_node_y").val(Math.round(o.y));
                                if (o.type) {
                                    G.val(o.type).removeAttr("disabled");
                                    a("#seg_type_label").html(o.type == 4 ? "Straight" : "Curve");
                                } else G.val(4).attr("disabled", "disabled");
                            }
                            a("#tools_top").removeClass("multiselected");
                            a("#stroke_panel").hide();
                            a("#canvas_panel").hide();
                        } else {
                            var I = a("#cmenu_canvas li");
                            a(".context_panel").hide();
                            a(".menu_item", "#edit_menu").addClass("disabled");
                            a(".menu_item", "#object_menu").addClass("disabled");
                            if (U) {
                                U = U.filter(Boolean);
                                (g = d.elementsAreSame(U) ? U[0] : null) &&
                                a("#tools_top").addClass("multiselected");
                            }
                            if (!g && !U) {
                                a("#tools_top").removeClass("multiselected");
                                a("#stroke_panel").hide();
                                a("#canvas_panel").show();
                            }
                            if (g != null) {
                                a("#stroke_panel").show();
                                var M = g.nodeName,
                                    T = d.getRotationAngle(g);
                                a("#angle").val(Math.round(T));
                                T = d.getBlur(g);
                                a("#blur").val(T);
                                if (!G && s != "pathedit") {
                                    a("#selected_panel").show();
                                    a(".action_selected").removeClass("disabled");
                                    var X, S;
                                    if (["g", "polyline", "path"].indexOf(M) >= 0)
                                        if ((s = d.getStrokedBBox([g]))) {
                                            X = s.x;
                                            S = s.y;
                                        }
                                    if (w) {
                                        X = svgedit.units.convertUnit(X);
                                        S = svgedit.units.convertUnit(S);
                                    }
                                    a("#" + M + "_x").val(Math.round(X));
                                    a("#" + M + "_y").val(Math.round(S));
                                    if (M === "polyline") {
                                        a("#path_x").val(Math.round(X));
                                        a("#path_y").val(Math.round(S));
                                    }
                                    ["image", "text", "path", "g", "use"].indexOf(M) == -1 &&
                                        a(".action_path_convert_selected").removeClass("disabled");
                                    M === "path" &&
                                        a(".action_path_selected").removeClass("disabled");
                                }
                                w = null;
                                if (W === "a") {
                                    w = d.getHref(g);
                                    a("#g_panel").show();
                                }
                                if (g.parentNode.tagName === "a")
                                    if (!a(g).siblings().length) {
                                        a("#a_panel").show();
                                        w = d.getHref(g.parentNode);
                                    }
                                a("#tool_make_link, #tool_make_link").toggle(!w);
                                w && a("#link_url").val(w);
                                w = {
                                    g: [],
                                    a: [],
                                    rect: ["rx", "width", "height", "x", "y"],
                                    image: ["width", "height", "x", "y"],
                                    circle: ["cx", "cy", "r"],
                                    ellipse: ["cx", "cy", "rx", "ry"],
                                    line: ["x1", "y1", "x2", "y2"],
                                    text: ["x", "y"],
                                    use: [],
                                    path: [],
                                };
                                var W = g.tagName;
                                a(g).data("gsvg") && a("#g_panel").show();
                                if (W == "path" || W == "polyline") a("#path_panel").show();
                                if (w[W]) {
                                    w = w[W];
                                    a("#" + W + "_panel").show();
                                    W == "rect" ?
                                        a("#cornerRadiusLabel").show() :
                                        a("#cornerRadiusLabel").hide();
                                    a.each(w, function(ha, la) {
                                        var ea = g.getAttribute(la);
                                        if (q.baseUnit !== "px" && g[la])
                                            ea = svgedit.units.convertUnit(g[la].baseVal.value);
                                        var ta = document.getElementById(W + "_" + la);
                                        ta.value = Math.round(ea) || 0;
                                        ta.getAttribute("data-cursor") === "true" &&
                                            a.fn.dragInput.updateCursor(ta);
                                    });
                                    if (W == "text") {
                                        w = g.getAttribute("font-family");
                                        document.getElementById(
                                            "font_family_dropdown"
                                        ).selectedIndex = 3;
                                        a("#text_panel").css("display", "inline");
                                        a("#tool_italic").toggleClass("active", d.getItalic());
                                        a("#tool_bold").toggleClass("active", d.getBold());
                                        a("#font_family").val(w);
                                        a("#font_size").val(g.getAttribute("font-size"));
                                        a("#text").val(g.textContent);
                                        a("#preview_font")
                                            .text(w.split(",")[0].replace(/'/g, ""))
                                            .css("font-family", w);
                                        d.addedNew &&
                                            setTimeout(function() {
                                                a("#text").focus().select();
                                            }, 100);
                                    } else if (W == "image") Wa(d.getHref(g));
                                    else if (W === "g" || W === "use") {
                                        a("#container_panel").show();
                                        a(".action_group_selected").removeClass("disabled");
                                        d.getTitle();
                                    }
                                }
                                I[(W === "g" ? "en" : "dis") + "ableContextMenuItems"](
                                    "#ungroup"
                                );
                                I[(W === "g" || !U ? "dis" : "en") + "ableContextMenuItems"](
                                    "#group"
                                );
                            }
                            if (U) {
                                a("#multiselected_panel").show();
                                a(".action_multi_selected").removeClass("disabled");
                                I.enableContextMenuItems("#group").disableContextMenuItems(
                                    "#ungroup"
                                );
                            }
                            g ||
                                I.disableContextMenuItems(
                                    "#delete,#cut,#copy,#group,#ungroup,#move_front,#move_up,#move_down,#move_back"
                                );
                            K.getUndoStackSize() > 0 ?
                                a("#tool_undo").removeClass("disabled") :
                                a("#tool_undo").addClass("disabled");
                            K.getRedoStackSize() > 0 ?
                                a("#tool_redo").removeClass("disabled") :
                                a("#tool_redo").addClass("disabled");
                            d.addedNew = false;
                            if ((g && !G) || U) {
                                a("#selLayerNames").removeAttr("disabled").val(o);
                                H.enableContextMenuItems(
                                    "#delete,#cut,#copy,#move_front,#move_up,#move_down,#move_back"
                                );
                            }
                        }
                    };
                a("#text").on("focus", function() {});
                a("#text").on("blur", function() {});
                d.bind("selected", function(g, o) {
                    var s = d.getMode();
                    s === "select" && ma();
                    if (s === "pathedit") return Ia();
                    Z = o.length == 1 || o[1] == null ? o[0] : null;
                    o = o.filter(Boolean);
                    U = o.length >= 2 ? o : false;
                    if (d.elementsAreSame(U)) Z = U[0];
                    if (Z != null) {
                        a("#multiselected_panel").hide();
                        if (Z != null)
                            switch (Z.tagName) {
                                case "use":
                                    a(".context_panel").hide();
                                    a("#use_panel").show();
                                    break;
                                case "image":
                                    a(".context_panel").hide();
                                    a("#image_panel").show();
                                    break;
                                case "foreignObject":
                                    a(".context_panel").hide();
                                    break;
                                case "g":
                                case "a":
                                    s = null;
                                    for (
                                        var w = Z.getElementsByTagName("*"), G = 0, I = w.length; G < I; G++
                                    ) {
                                        var M = w[G].getAttribute("stroke-width");
                                        if (G === 0) s = M;
                                        else if (s !== M) s = null;
                                    }
                                    a("#stroke_width").val(s === null ? "0" : s);
                                    Ia();
                                    break;
                                default:
                                    a("#stroke_width").val(Z.getAttribute("stroke-width") || 0);
                                    s = Z.getAttribute("stroke-dasharray") || "none";
                                    a("option", "#stroke_style").removeAttr("selected");
                                    a('#stroke_style option[value="' + s + '"]').attr(
                                        "selected",
                                        "selected"
                                    );
                                    a("#stroke_style").trigger("change");
                                    a.fn.dragInput.updateCursor(a("#stroke_width")[0]);
                                    a.fn.dragInput.updateCursor(a("#blur")[0]);
                            }
                        if (Z != null) {
                            s = (Z.getAttribute("opacity") || 1) * 100;
                            a("#group_opacity").val(s);
                            a.fn.dragInput.updateCursor(a("#group_opacity")[0]);
                        }
                        U.length && a("#tools_top").addClass("multiselected");
                    } else if (U.length) {
                        a(".context_panel").hide();
                        a("#tools_top").removeClass("multiselected");
                        a("#multiselected_panel").show();
                    } else {
                        a(".context_panel").hide();
                        a("#canvas_panel").show();
                        a("#tools_top").removeClass("multiselected");
                    }
                    d.runExtensions("selectedChanged", {
                        elems: o,
                        selectedElement: Z,
                        multiselected: U,
                    });
                });
                d.bind("transition", function(g, o) {
                    var s = d.getMode(),
                        w = o[0];
                    if (w) {
                        U = o.length >= 2 && o[1] != null ? o : null;
                        if (!U)
                            switch (s) {
                                case "rotate":
                                    s = d.getRotationAngle(w);
                                    a("#angle").val(Math.round(s));
                                    rotateCursor(s);
                                    a("#tool_reorient").toggleClass("disabled", s == 0);
                            }
                        d.runExtensions("elementTransition", { elems: o });
                    }
                });
                d.bind("changed", function(g, o) {
                    var s = d.getMode();
                    s === "select" && ma();
                    for (var w = 0; w < o.length; ++w) {
                        var G = o[w];
                        if (G && G.tagName === "svg") D();
                        else if (G && Z && Z.parentNode == null) Z = G;
                    }
                    c.show_save_warning = true;
                    Ia();
                    if (Z && s === "select") {
                        c.paintBox.fill.update();
                        c.paintBox.stroke.update();
                    }
                    d.runExtensions("elementChanged", { elems: o });
                });
                d.bind("exported", function(g, o) {
                    var s = o.issues;
                    a("#export_canvas").length ||
                        a("<canvas>", { id: "export_canvas" }).hide().appendTo("body");
                    var w = a("#export_canvas")[0];
                    w.width = d.contentW;
                    w.height = d.contentH;
                    canvg(w, o.svg, {
                        renderCallback: function() {
                            var G = w.toDataURL("image/png");
                            V.location.href = G;
                            if (a.pref("export_notice_done") !== "all") {
                                G =
                                    'Select "Save As..." in your browser to save this image as a PNG file.';
                                if (s.length)
                                    G +=
                                    "\n\nAlso note the following issues: \n \u2022 " +
                                    s.join("\n \u2022 ");
                                a.pref("export_notice_done", "all");
                                V.alert(G);
                            }
                        },
                    });
                });
                d.bind("zoomed", ja);
                d.bind("contextset", function(g, o) {
                    var s = "";
                    if (o) {
                        var w = "";
                        s =
                            '<a href="#" data-root="y">' +
                            d.getCurrentDrawing().getCurrentLayerName() +
                            "</a>";
                        a(o)
                            .parentsUntil("#svgcontent > g")
                            .andSelf()
                            .each(function() {
                                if (this.id) {
                                    w += " > " + this.id;
                                    s +=
                                        this !== o ?
                                        ' > <a href="#">' + this.id + "</a>" :
                                        " > " + this.id;
                                }
                            });
                        ua = w;
                    } else ua = null;
                    a("#cur_context_panel").toggle(!!o).html(s);
                });
                d.bind("extension_added", function(g, o) {
                    function s() {
                        if (oa) {
                            clearTimeout(oa);
                            oa = null;
                        }
                        G ||
                            (oa = setTimeout(function() {
                                G = true;
                                Db(b.iconsize);
                            }, 50));
                    }
                    var w = false,
                        G = false,
                        I = true,
                        M = function() {
                            if (o.callback && !w && I) {
                                w = true;
                                o.callback();
                            }
                        },
                        T = [];
                    o.context_tools &&
                        a.each(o.context_tools, function(la, ea) {
                            var ta = ea.container_id ? ' id="' + ea.container_id + '"' : "",
                                Ba = a("#" + ea.panel);
                            Ba.length ||
                                (Ba = a("<div>", { id: ea.panel })
                                    .appendTo("#tools_top")
                                    .hide());
                            switch (ea.type) {
                                case "tool_button":
                                    var xa = '<div class="tool_button">' + ea.id + "</div>",
                                        Da = a(xa).appendTo(Ba);
                                    ea.events &&
                                        a.each(ea.events, function(Oa, mb) {
                                            a(Da).bind(Oa, mb);
                                        });
                                    break;
                                case "select":
                                    xa = "<label" + ta + '><select id="' + ea.id + '">';
                                    a.each(ea.options, function(Oa, mb) {
                                        xa +=
                                            '<option value="' +
                                            Oa +
                                            '"' +
                                            (Oa == ea.defval ? " selected" : "") +
                                            ">" +
                                            mb +
                                            "</option>";
                                    });
                                    xa += "</select></label>";
                                    var Za = a(xa).appendTo(Ba).find("select");
                                    a.each(ea.events, function(Oa, mb) {
                                        a(Za).bind(Oa, mb);
                                    });
                                    break;
                                case "button-select":
                                    xa =
                                        '<div id="' +
                                        ea.id +
                                        '" class="dropdown toolset" title="' +
                                        ea.title +
                                        '"><div id="cur_' +
                                        ea.id +
                                        '" class="icon_label"></div><button></button></div>';
                                    ta = a('<ul id="' + ea.id + '_opts"></ul>').appendTo(
                                        "#option_lists"
                                    );
                                    ea.colnum && ta.addClass("optcols" + ea.colnum);
                                    a(xa).appendTo(Ba).children();
                                    T.push({
                                        elem: "#" + ea.id,
                                        list: "#" + ea.id + "_opts",
                                        title: ea.title,
                                        callback: ea.events.change,
                                        cur: "#cur_" + ea.id,
                                    });
                                    break;
                                case "input":
                                    xa =
                                        "<label" +
                                        ta +
                                        '><span id="' +
                                        ea.id +
                                        '_label">' +
                                        ea.label +
                                        ':</span><input id="' +
                                        ea.id +
                                        '" title="' +
                                        ea.title +
                                        '" size="' +
                                        (ea.size || "4") +
                                        '" value="' +
                                        (ea.defval || "") +
                                        '" type="text"/></label>';
                                    var Ta = a(xa).appendTo(Ba).find("input");
                                    ea.spindata && Ta.SpinButton(ea.spindata);
                                    ea.events &&
                                        a.each(ea.events, function(Oa, mb) {
                                            Ta.bind(Oa, mb);
                                        });
                            }
                        });
                    if (o.buttons) {
                        var X = {},
                            S = {},
                            W = o.svgicons,
                            ha = {};
                        a.each(o.buttons, function(la, ea) {
                            for (var ta, Ba = ea.id, xa = la; a("#" + Ba).length;)
                                Ba = ea.id + "_" + ++xa;
                            if (W) {
                                X[Ba] = ea.icon;
                                xa = ea.svgicon ? ea.svgicon : ea.id;
                                if (ea.type == "app_menu") S["#" + Ba + " > div"] = xa;
                                else S["#" + Ba] = xa;
                            } else ta = ea.type == "menu" ? "" : a('<img src="' + ea.icon + '">');
                            var Da, Za;
                            switch (ea.type) {
                                case "mode_flyout":
                                case "mode":
                                    Da = "tool_button";
                                    if (ea.cls) Da += " " + ea.cls;
                                    Za = "#tools_left";
                                    break;
                                case "context":
                                    Da = "tool_button";
                                    Za = "#" + ea.panel;
                                    a(Za).length ||
                                        a("<div>", { id: ea.panel }).appendTo("#tools_top");
                                    break;
                                case "menu":
                                    Da = "menu_item tool_button";
                                    Za = "#" + (ea.after || ea.panel);
                                    break;
                                case "app_menu":
                                    Da = "";
                                    Za = ea.parent || "#main_menu ul";
                                    a(Za).length ||
                                        a("<div>", { id: ea.panel }).appendTo("#tools_top");
                            }
                            var Ta = a(ea.list || ea.type == "app_menu" ? "<li/>" : "<div/>")
                                .attr("id", Ba)
                                .attr("title", ea.title)
                                .addClass(Da);
                            if (!ea.includeWith && !ea.list) {
                                if ("position" in ea)
                                    a(Za).children().eq(ea.position).before(Ta);
                                else
                                    ea.type != "menu" || !ea.after ?
                                    Ta.appendTo(Za) :
                                    a(Za).after(Ta);
                                if (ea.type == "mode_flyout") {
                                    xa = a(Ta);
                                    Da = xa.parent();
                                    if (!xa.parent().hasClass("tools_flyout")) {
                                        var Oa = xa[0].id.replace("tool_", "tools_"),
                                            mb = xa
                                            .clone()
                                            .attr("id", Oa + "_show")
                                            .append(a("<div>", { class: "flyout_arrow_horiz" }));
                                        xa.before(mb);
                                        Da = qa(Oa, xa);
                                        Da.data("isLibrary", true);
                                        mb.data("isLibrary", true);
                                    }
                                    S["#" + Oa + "_show"] = ea.id;
                                    Ba = ha["#" + Da[0].id] = [{
                                            sel: "#" + Ba,
                                            fn: ea.events.click,
                                            icon: ea.id,
                                            isDefault: true,
                                        },
                                        vb,
                                    ];
                                } else if (ea.type == "app_menu" || ea.type == "menu")
                                    Ta.append(ea.title);
                            } else if (ea.list) {
                                Ta.addClass("push_button");
                                a("#" + ea.list + "_opts").append(Ta);
                                if (ea.isDefault) {
                                    a("#cur_" + ea.list).append(Ta.children().clone());
                                    xa = ea.svgicon ? ea.svgicon : ea.id;
                                    S["#cur_" + ea.list] = xa;
                                }
                            } else if (ea.includeWith) {
                                Za = ea.includeWith;
                                xa = a(Za.button);
                                Da = xa.parent();
                                if (!xa.parent().hasClass("tools_flyout")) {
                                    Oa = xa[0].id.replace("tool_", "tools_");
                                    mb = xa
                                        .clone()
                                        .attr("id", Oa + "_show")
                                        .append(a("<div>", { class: "flyout_arrow_horiz" }));
                                    xa.before(mb);
                                    Da = qa(Oa, xa);
                                }
                                var vb = z.getButtonData(Za.button);
                                if (Za.isDefault) S["#" + Oa + "_show"] = ea.id;
                                Ba = ha["#" + Da[0].id] = [{
                                        sel: "#" + Ba,
                                        fn: ea.events.click,
                                        icon: ea.id,
                                        key: ea.key,
                                        isDefault: ea.includeWith ? ea.includeWith.isDefault : 0,
                                    },
                                    vb,
                                ];
                                Oa = "position" in Za ? Za.position : "last";
                                vb = Da.children().length;
                                if (!isNaN(Oa) && Oa >= 0 && Oa < vb)
                                    Da.children().eq(Oa).before(Ta);
                                else {
                                    Da.append(Ta);
                                    Ba.reverse();
                                }
                            }
                            W || Ta.append(ta);
                            ea.list ||
                                a.each(ea.events, function(Eb, Jb) {
                                    if (Eb == "click")
                                        if (ea.type == "mode") {
                                            ea.includeWith ?
                                                Ta.bind(Eb, Jb) :
                                                Ta.bind(Eb, function() {
                                                    sa(Ta) && Jb();
                                                });
                                            if (ea.key) {
                                                a(document).bind("keydown", ea.key, Jb);
                                                ea.title &&
                                                    Ta.attr("title", ea.title + " [" + ea.key + "]");
                                            }
                                        } else Ta.bind(Eb, Jb);
                                    else Ta.bind(Eb, Jb);
                                });
                            da(ha);
                        });
                        a.each(T, function() {
                            pb(this.elem, this.list, this.callback, { seticon: true });
                        });
                        if (W) I = false;
                        a.svgIcons(W, {
                            w: 27,
                            h: 27,
                            id_match: false,
                            no_img: !A,
                            fallback: X,
                            placement: S,
                            callback: function() {
                                b.iconsize && b.iconsize != "m" && s();
                                I = true;
                                M();
                            },
                        });
                    }
                    M();
                });
                d.textActions.setInputElem(a("#text")[0]);
                var Ja =
                    '<div class="palette_item transparent" data-rgb="none"></div>                <div class="palette_item black" data-rgb="#000000"></div>                <div class="palette_item white" data-rgb="#ffffff"></div>';
                [
                    "#444444",
                    "#482816",
                    "#422C10",
                    "#3B2F0E",
                    "#32320F",
                    "#293414",
                    "#1F361B",
                    "#153723",
                    "#0C372C",
                    "#083734",
                    "#0E353B",
                    "#1A333F",
                    "#273141",
                    "#332D40",
                    "#3E2A3C",
                    "#462735",
                    "#4B252D",
                    "#4D2425",
                    "#4C261D",
                    "#666666",
                    "#845335",
                    "#7B572D",
                    "#6F5C2A",
                    "#62612C",
                    "#546433",
                    "#46673D",
                    "#396849",
                    "#306856",
                    "#2D6862",
                    "#33666C",
                    "#426373",
                    "#535F75",
                    "#645A73",
                    "#74556D",
                    "#805064",
                    "#884D58",
                    "#8B4D4B",
                    "#894F3F",
                    "#999999",
                    "#C48157",
                    "#B8874D",
                    "#A98E49",
                    "#97944B",
                    "#849854",
                    "#729C62",
                    "#619E73",
                    "#559E84",
                    "#529D94",
                    "#5B9BA2",
                    "#6D97AB",
                    "#8391AE",
                    "#9A8AAB",
                    "#AF84A3",
                    "#BF7E96",
                    "#C97A86",
                    "#CE7975",
                    "#CC7C65",
                    "#BBBBBB",
                    "#FFB27C",
                    "#FABA6F",
                    "#E6C36A",
                    "#CFCA6D",
                    "#B8D078",
                    "#A0D58A",
                    "#8CD79F",
                    "#7DD8B5",
                    "#7AD6CA",
                    "#84D3DB",
                    "#9ACEE6",
                    "#B6C7EA",
                    "#D3BEE7",
                    "#EDB6DC",
                    "#FFAFCC",
                    "#FFAAB8",
                    "#FFA9A2",
                    "#FFAC8D",
                    "#DDDDDD",
                    "#FFE7A2",
                    "#FFF093",
                    "#FFFA8D",
                    "#FFFF91",
                    "#EEFF9F",
                    "#D1FFB4",
                    "#B9FFCE",
                    "#A8FFE9",
                    "#A4FFFF",
                    "#B1FFFF",
                    "#CBFFFF",
                    "#EDFFFF",
                    "#FFF5FF",
                    "#FFEBFF",
                    "#FFE2FF",
                    "#FFDCEC",
                    "#FFDBD2",
                    "#FFDFB8",
                ].forEach(function(g) {
                    Ja +=
                        '<div class="palette_item" style="background-color: ' +
                        g +
                        ';" data-rgb="' +
                        g +
                        '"></div>';
                });
                a("#palette").append(Ja);
                var za = a("#tool_angle_indicator");
                a("#tool_reorient");
                rotateCursor = function(g) {
                    g = "rotate(" + g + "deg)";
                    za.css({
                        "-webkit-transform": g,
                        "-moz-transform": g,
                        "-o-transform": g,
                        "-ms-transform": g,
                        transform: g,
                    });
                };
                var wa = function(g) {
                    var o = g.value / 100;
                    if (o < 0.001) g.value = 0.1;
                    else {
                        g = d.getZoom();
                        var s = L;
                        ja(
                            window, {
                                width: 0,
                                height: 0,
                                x: (s[0].scrollLeft + s.width() / 2) / g,
                                y: (s[0].scrollTop + s.height() / 2) / g,
                                zoom: o,
                            },
                            true
                        );
                    }
                };
                a("#stroke_style").change(function() {
                    d.setStrokeAttr("stroke-dasharray", a(this).val());
                    a("#stroke_style_label").html(this.options[this.selectedIndex].text);
                    window.opera && a("<p/>").hide().appendTo("body").remove();
                });
                a("#seg_type").change(function() {
                    d.setSegType(a(this).val());
                    a("#seg_type_label").html(this.options[this.selectedIndex].text);
                });
                a("select").change(function() {
                    a(this).blur();
                });
                a("#font_family").change(function() {
                    d.setFontFamily(this.value);
                });
                a("#text").keyup(function() {
                    d.setTextContent(this.value);
                });
                changeAttribute = function(g) {
                    var o = g.getAttribute("data-attr"),
                        s = g.getAttribute("data-multiplier") || 1;
                    s = parseFloat(s);
                    s = g.value * s;
                    if (!svgedit.units.isValidUnit(o, s, Z)) {
                        a.alert("Invalid value given");
                        g.value = Z.getAttribute(o);
                        return false;
                    }
                    d.changeSelectedAttributeNoUndo(o, s);
                };
                picking = false;
                a(document).on("mouseup", function() {
                    picking = false;
                });
                a("#palette")
                    .on(
                        "mousemove mousedown touchstart touchmove",
                        ".palette_item",
                        function(g) {
                            g.preventDefault();
                            if (g.type == "mousedown") picking = true;
                            if (picking) {
                                var o = a("#tool_stroke").hasClass("active"),
                                    s = o ? "stroke" : "fill",
                                    w = a(this).attr("data-rgb"),
                                    G = null,
                                    I = true;
                                if (g.type == "mousedown") I = false;
                                if (w === "transparent" || w === "initial" || w === "#none") {
                                    w = "none";
                                    G = new a.jGraduate.Paint();
                                } else
                                    G = new a.jGraduate.Paint({
                                        alpha: 100,
                                        solidColor: w.substr(1),
                                    });
                                c.paintBox[s].setPaint(G);
                                if (o) {
                                    d.setColor("stroke", w, I);
                                    w != "none" &&
                                        d.getStrokeOpacity() != 1 &&
                                        d.setPaintOpacity("stroke", 1);
                                } else {
                                    d.setColor("fill", w, I);
                                    w != "none" &&
                                        d.getFillOpacity() != 1 &&
                                        d.setPaintOpacity("fill", 1);
                                }
                            }
                        }
                    )
                    .bind("contextmenu", function(g) {
                        g.preventDefault();
                    });
                a("#toggle_stroke_tools").toggle(
                    function() {
                        a(".stroke_tool").css("display", "table-cell");
                        a(this).addClass("expanded");
                        f();
                    },
                    function() {
                        a(".stroke_tool").css("display", "none");
                        a(this).removeClass("expanded");
                        f();
                    }
                );
                var sa = function(g, o) {
                    if (a(g).hasClass("disabled")) return false;
                    if (a(g).parent().hasClass("tools_flyout")) return true;
                    var s = s || "normal";
                    o || a(".tools_flyout").fadeOut(s);
                    a("#styleoverrides").text("");
                    a(".tool_button_current")
                        .removeClass("tool_button_current")
                        .addClass("tool_button");
                    a(g).addClass("tool_button_current").removeClass("tool_button");
                    return true;
                };
                (function() {
                    var g = null,
                        o = null,
                        s = L[0],
                        w = false,
                        G = false;
                    a("#svgcanvas")
                        .on("mousemove mouseup touchend", function(I) {
                            if (w !== false) {
                                s.scrollLeft -= I.clientX - g;
                                s.scrollTop -= I.clientY - o;
                                g = I.clientX;
                                o = I.clientY;
                                if (I.type === "mouseup" || I.type === "touchend") w = false;
                                return false;
                            }
                        })
                        .on("mousedown touchmove", function(I) {
                            if (
                                I.button === 1 ||
                                G === true ||
                                (I.originalEvent.touches && I.originalEvent.touches.length >= 2)
                            ) {
                                w = true;
                                g = I.clientX;
                                o = I.clientY;
                                return false;
                            }
                        });
                    a(window).mouseup(function() {
                        w = false;
                    });
                    a(document)
                        .bind("keydown", "space", function(I) {
                            I.preventDefault();
                            d.spaceKey = G = true;
                        })
                        .bind("keyup", "space", function(I) {
                            I.preventDefault();
                            d.spaceKey = G = false;
                        })
                        .bind("keydown", "alt", function() {
                            d.getMode() === "zoom" && L.addClass("out");
                        })
                        .bind("keyup", "alt", function() {
                            d.getMode() === "zoom" && L.removeClass("out");
                        });
                })();
                var va = a(".menu"),
                    tb = function(g) {
                        g.target.style.background = "#fff";
                        setTimeout(function() {
                            g.target.style.background = "#ddd";
                        }, 50);
                        setTimeout(function() {
                            g.target.style.background = "#fff";
                        }, 150);
                        setTimeout(function() {
                            g.target.style.background = "#ddd";
                        }, 200);
                        setTimeout(function() {
                            g.target.style.background = "";
                        }, 200);
                        setTimeout(function() {
                            a("#menu_bar").removeClass("active");
                        }, 220);
                        return false;
                    };
                a(".menu_item").on("mousedown touchstart", function(g) {
                    tb(g);
                });
                a("svg, body").on("mousedown  touchstart", function(g) {
                    if (!(g.target.nodeName && g.target.nodeName.toLowerCase() === "input"))
                        if (!a(g.target).hasClass("menu_title") &&
                            !a(g.target).parent().hasClass("menu_title")
                        )
                            !a(g.target).hasClass("disabled") &&
                            a(g.target).hasClass("menu_item") ?
                            tb(g) :
                            a("#menu_bar").removeClass("active");
                });
                a("#workarea").on("mousewheel", function(g, o, s, w) {
                    if (g.altKey || g.ctrlKey) {
                        g.preventDefault();
                        zoom = parseInt(a("#zoom").val());
                        a("#zoom")
                            .val(parseInt(zoom + w * (g.altKey ? 10 : 5)))
                            .change();
                    }
                });
                a(".menu_title")
                    .on("mousedown", function() {
                        a("#tools_shapelib").hide();
                        a("#menu_bar").toggleClass("active");
                        va.removeClass("open");
                        a(this).parent().addClass("open");
                    })
                    .on("mouseover", function() {
                        va.removeClass("open");
                        a(this).parent().addClass("open");
                    });
                c.addDropDown = function(g, o, s) {
                    if (a(g).length != 0) {
                        var w = a(g).find("button"),
                            G = a(g)
                            .find("ul")
                            .attr("id", a(g)[0].id + "-list");
                        s || a("#option_lists").append(G);
                        var I = false;
                        s && a(g).addClass("dropup");
                        G.find("li").bind("mouseup", o);
                        a(window).mouseup(function() {
                            if (!I) {
                                w.removeClass("down");
                                G.hide();
                            }
                            I = false;
                        });
                        w.bind("mousedown", function() {
                                if (w.hasClass("down")) {
                                    w.removeClass("down");
                                    G.hide();
                                } else {
                                    w.addClass("down");
                                    if (!s) {
                                        var M = a(g).offset();
                                        G.css({ top: M.top, left: M.left - 110 });
                                    }
                                    G.show();
                                    I = true;
                                }
                            })
                            .hover(function() {
                                I = true;
                            })
                            .mouseout(function() {
                                I = false;
                            });
                    }
                };
                var pb = function(g, o, s, w) {
                    var G = a(g);
                    o = a(o);
                    var I = false,
                        M = w.dropUp;
                    M && a(g).addClass("dropup");
                    o.find("li").bind("mouseup", function() {
                        if (w.seticon) {
                            ib("#cur_" + G[0].id, a(this).children());
                            a(this).addClass("current").siblings().removeClass("current");
                        }
                        s.apply(this, arguments);
                    });
                    a(window).mouseup(function() {
                        if (!I) {
                            G.removeClass("down");
                            o.hide();
                            o.css({ top: 0, left: 0 });
                        }
                        I = false;
                    });
                    o.height();
                    a(g)
                        .bind("mousedown", function() {
                            var T = a(g).offset();
                            if (M) {
                                T.top -= o.height();
                                T.left += 8;
                            } else T.top += a(g).height();
                            a(o).offset(T);
                            if (G.hasClass("down")) {
                                G.removeClass("down");
                                o.hide();
                                o.css({ top: 0, left: 0 });
                            } else {
                                G.addClass("down");
                                o.show();
                                I = true;
                                return false;
                            }
                        })
                        .hover(function() {
                            I = true;
                        })
                        .mouseout(function() {
                            I = false;
                        });
                    w.multiclick &&
                        o.mousedown(function() {
                            I = true;
                        });
                };
                a("#font_family_dropdown").change(function() {
                    var g = this.options[this.selectedIndex].value,
                        o = this.options[this.selectedIndex].text;
                    a("#preview_font").html(o).css("font-family", g);
                    a("#font_family").val(g).change();
                });
                a("div", "#position_opts").each(function() {
                    this.addEventListener("mouseup", function() {
                        var g = this.id.replace("tool_pos", "").charAt(0);
                        d.alignSelectedElements(g, "page");
                    });
                });
                (function() {
                    var g,
                        o = function() {
                            a(g).blur();
                        };
                    a("#svg_editor")
                        .find("button, select, input:not(#text)")
                        .focus(function() {
                            g = this;
                            N = "toolbars";
                            L.mousedown(o);
                        })
                        .blur(function() {
                            N = "canvas";
                            L.unbind("mousedown", o);
                            d.getMode() == "textedit" && a("#text").focus();
                        });
                })();
                var jb = function() {
                        sa("#tool_select") && d.setMode("select");
                    },
                    Va = function() {
                        sa("#tool_fhpath") && d.setMode("fhpath");
                    },
                    Ya = function() {
                        sa("#tool_line") && d.setMode("line");
                    },
                    Aa = function() {
                        sa("#tool_rect") && d.setMode("rect");
                    },
                    ra = function() {
                        sa("#tool_ellipse") && d.setMode("ellipse");
                    },
                    Fa = function() {
                        sa("#tool_image") && d.setMode("image");
                    },
                    Ra = function() {
                        sa("#tool_zoom") && d.setMode("zoom");
                    },
                    ya = function() {
                        if (sa("#tool_zoom")) {
                            xb();
                            ma();
                        }
                    },
                    eb = function() {
                        sa("#tool_text") && d.setMode("text");
                    },
                    nb = function() {
                        sa("#tool_path") && d.setMode("path");
                    },
                    $a = function() {
                        if (Z != null || U) d.deleteSelectedElements();
                        v.getNodePoint() && v.deletePathNode();
                    },
                    Sa = function() {
                        if (Z != null || U) {
                            Na(a("#edit_menu"));
                            d.cutSelectedElements();
                        }
                    },
                    ub = function() {
                        if (Z != null || U) {
                            Na(a("#edit_menu"));
                            d.copySelectedElements();
                        }
                    },
                    La = function() {
                        Na(a("#edit_menu"));
                        var g = d.getZoom(),
                            o = (L[0].scrollLeft + L.width() / 2) / g - d.contentW;
                        g = (L[0].scrollTop + L.height() / 2) / g - d.contentH;
                        d.pasteElements("point", o, g);
                    },
                    Ga = function() {
                        if (Z != null) {
                            Na(a("#object_menu"));
                            d.moveToTopSelectedElement();
                        }
                    },
                    qb = function() {
                        if (Z != null) {
                            Na(a("#object_menu"));
                            d.moveToBottomSelectedElement();
                        }
                    },
                    fb = function() {
                        if (Z != null) {
                            Na(a("#object_menu"));
                            d.moveUpDownSelected("Up");
                        }
                    },
                    rb = function() {
                        if (Z != null) {
                            Na(a("#object_menu"));
                            d.moveUpDownSelected("Down");
                        }
                    },
                    kb = function(g) {
                        if (Z != null) {
                            Na(a("#object_menu"));
                            d.moveUpDownSelected(g);
                        }
                    },
                    gb = function() {
                        if (Z != null) {
                            d.convertToPath();
                            var g = d.getSelectedElems();
                            d.selectorManager.requestSelector(g[0]).reset(g[0]);
                            d.selectorManager
                                .requestSelector(g[0])
                                .selectorRect.setAttribute("display", "none");
                            d.setMode("pathedit");
                            v.toEditMode(g[0]);
                            d.clearSelection();
                            Ia();
                        }
                    },
                    ob = function() {
                        Z != null && v.reorient();
                    },
                    wb = function() {
                        if (Z != null || U)
                            a.prompt("Enter the new hyperlink URL", "http://", function(g) {
                                g && d.makeHyperlink(g);
                            });
                    },
                    cb = function(g, o) {
                        if (Z != null || U) {
                            if (q.gridSnapping) {
                                var s = d.getZoom() * q.snappingStep;
                                g *= s;
                                o *= s;
                            }
                            a("input").blur();
                            d.moveSelectedElements(g, o);
                        }
                    },
                    lb = function() {},
                    ia = function() {
                        v.getNodePoint() && v.clonePathNode();
                    },
                    Y = function() {
                        v.getNodePoint() && v.deletePathNode();
                    },
                    ga = function() {
                        var g = a("#tool_add_subpath"),
                            o = !g.hasClass("push_button_pressed");
                        o
                            ?
                            g.addClass("push_button_pressed").removeClass("tool_button") :
                            g.removeClass("push_button_pressed").addClass("tool_button");
                        v.addSubPath(o);
                    },
                    Q = function() {
                        v.opencloseSubPath();
                    },
                    P = function() {
                        d.cycleElement(1);
                    },
                    ba = function() {
                        d.cycleElement(0);
                    },
                    Ca = function(g, o) {
                        if (!(Z == null || U)) {
                            g || (o *= -1);
                            var s = a("#angle").val() * 1 + o;
                            d.setRotationAngle(s);
                            Ia();
                        }
                    },
                    Qa = function() {
                        var g = q.dimensions;
                        a.confirm(
                            "<strong>Do you want to clear the drawing?</strong>\nThis will also erase your undo history",
                            function(o) {
                                if (o) {
                                    ma();
                                    d.deleteSelectedElements();
                                    d.clear();
                                    d.setResolution(g[0], g[1]);
                                    D(true);
                                    Pa();
                                    xb();
                                    Ia();
                                    ka();
                                    d.runExtensions("onNewDocument");
                                }
                            }
                        );
                    },
                    Ua = function() {
                        d.setBold(!d.getBold());
                        Ia();
                    },
                    hb = function() {
                        d.setItalic(!d.getItalic());
                        Ia();
                    },
                    Xa = function() {
                        k.pngsave ||
                            (V = window.open(
                                "data:text/html;charset=utf-8,<title>Loading image, please wait...</title><h1>" +
                                Ja +
                                "</h1>"
                            ));
                        window.canvg ?
                            d.rasterExport() :
                            a.getScript("canvg/rgbcolor.js", function() {
                                a.getScript("canvg/canvg.js", function() {
                                    d.rasterExport();
                                });
                            });
                    },
                    ab = function() {
                        d.open();
                    },
                    Ma = function() {},
                    Na = function(g) {
                        var o = g.prev();
                        o.css({ background: "white", color: "black" });
                        setTimeout(function() {
                            o.removeAttr("style");
                        }, 200);
                    },
                    sb = function() {
                        if (K.getUndoStackSize() > 0) {
                            Na(a("#edit_menu"));
                            K.undo();
                        }
                    },
                    Fb = function() {
                        if (K.getRedoStackSize() > 0) {
                            Na(a("#edit_menu"));
                            K.redo();
                        }
                    },
                    zb = function() {
                        if (U) {
                            Na(a("#object_menu"));
                            d.groupSelectedElements();
                        } else if (Z) {
                            Na(a("#object_menu"));
                            d.ungroupSelectedElement();
                        }
                    },
                    bb = function() {
                        Na(a("#edit_menu"));
                        d.cloneSelectedElements(20, 20);
                    },
                    Ha = function() {
                        var g = this.id.replace("tool_align", "").charAt(0);
                        d.alignSelectedElements(g, a("#align_relative_to").val());
                    },
                    Kb = function() {
                        var g = document.querySelector("#tool_stroke rect");
                        a("#tool_stroke").toggleClass("active");
                        a("#tool_fill").toggleClass("active");
                        var o = document.querySelector("#tool_fill rect"),
                            s = o.getAttribute("fill"),
                            w = g.getAttribute("fill");
                        g = parseFloat(g.getAttribute("stroke-opacity"));
                        if (isNaN(g)) g = 100;
                        o = parseFloat(o.getAttribute("fill-opacity"));
                        if (isNaN(o)) o = 100;
                        w = Ka(w, g, "stroke");
                        s = Ka(s, o, "fill");
                        c.paintBox.fill.setPaint(w, true);
                        c.paintBox.stroke.setPaint(s, true);
                    },
                    xb = function(g) {
                        var o = d.getResolution();
                        g = g ? o.zoom * g : 1;
                        a("#zoom").val(g * 100);
                        d.setZoom(g);
                        Bb();
                        D(true);
                    },
                    Hb = function() {
                        Na(a("#view_menu"));
                        !a("#tool_wireframe").hasClass("push_button_pressed") ?
                            a("#tool_wireframe").addClass("push_button_pressed") :
                            a("#tool_wireframe").removeClass("push_button_pressed");
                        L.toggleClass("wireframe");
                        if (!m) {
                            var g = a("#wireframe_rules");
                            g.length ?
                                g.empty() :
                                a('<style id="wireframe_rules"></style>').appendTo("head");
                            Bb();
                        }
                    },
                    Ib = function() {
                        Na(a("#view_menu"));
                        var g = !a("#tool_snap").hasClass("push_button_pressed");
                        g
                            ?
                            a("#tool_snap").addClass("push_button_pressed") :
                            a("#tool_snap").removeClass("push_button_pressed");
                        q.gridSnapping = g;
                    },
                    Lb = function() {
                        window.self != window.top && top.exit_fullscreen();
                    },
                    Cb = function() {
                        Na(a("#view_menu"));
                        if (a("#tool_rulers").hasClass("push_button_pressed")) {
                            a("#tool_rulers").removeClass("push_button_pressed");
                            a("#show_rulers").attr("checked", false);
                            q.showRulers = false;
                        } else {
                            a("#tool_rulers").addClass("push_button_pressed");
                            a("#show_rulers").attr("checked", true);
                            q.showRulers = true;
                        }
                        a("#rulers").toggle(!!q.showRulers);
                    },
                    Bb = function() {
                        if (!m) {
                            var g =
                                "#workarea.wireframe #svgcontent * { stroke-width: " +
                                1 / d.getZoom() +
                                "px; }";
                            a("#wireframe_rules").text(L.hasClass("wireframe") ? g : "");
                        }
                    },
                    Nb = function(g, o) {
                        if (!fa) {
                            Na(a("#view_menu"));
                            fa = true;
                            a("#save_output_btns").toggle(!!o);
                            a("#tool_source_back").toggle(!o);
                            var s = (ca = d.getSvgString());
                            a("#svg_source_textarea").val(s);
                            a("#svg_source_editor").fadeIn();
                            a("#svg_source_textarea").focus().select();
                        }
                    },
                    yb = function() {
                        if (fa) {
                            if (d.setSvgString(a("#svg_source_textarea").val())) {
                                d.clearSelection();
                                Ab();
                                xb();
                                ka();
                            } else
                                a.confirm(
                                    "There were parsing errors in your SVG source.\nRevert back to original SVG source?",
                                    function(g) {
                                        if (!g) return false;
                                        d.clearSelection();
                                        Ab();
                                        xb();
                                        ka();
                                    }
                                );
                            ma();
                        }
                    },
                    ib = (c.setIcon = function(g, o) {
                        var s = typeof o === "string" ? a.getSvgIcon(o, true) : o.clone();
                        s
                            ?
                            a(g).find("img").replaceWith(s) :
                            console.log("NOTE: Icon image missing: " + o);
                    }),
                    Gb;
                Gb = (function() {
                    var g = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                        o = document.getElementsByTagName("script")[0],
                        s;
                    for (s in o.style)
                        if (g.test(s)) return s.match(g)[0];
                    if ("WebkitOpacity" in o.style) return "Webkit";
                    if ("KhtmlOpacity" in o.style) return "Khtml";
                    return "";
                })();
                var Mb = function(g, o) {
                        Gb.toLowerCase();
                        var s = ["top", "left", "bottom", "right"];
                        g.each(function() {
                            for (
                                var w = a(this),
                                    G = w.outerWidth() * (o - 1),
                                    I = w.outerHeight() * (o - 1),
                                    M = 0; M < 4; M++
                            ) {
                                var T = s[M],
                                    X = w.data("orig_margin-" + T);
                                if (X == null) {
                                    X = parseInt(w.css("margin-" + T));
                                    w.data("orig_margin-" + T, X);
                                }
                                X = X * o;
                                if (T === "right") X += G;
                                else if (T === "bottom") X += I;
                                w.css("margin-" + T, X);
                            }
                        });
                    },
                    Db = (c.setIconSize = function(g, o) {
                        if (!(g == b.size && !o)) {
                            var s = a(
                                    "#tools_top .toolset, #editor_panel > *, #history_panel > *,        #main_button, #tools_left > *, #path_node_panel > *, #multiselected_panel > *,        #g_panel > *, #tool_font_size > *, .tools_flyout"
                                ),
                                w = 1;
                            w =
                                typeof g == "number" ?
                                g : { s: 0.75, m: 1, l: 1.25, xl: 1.5 }[g];
                            c.tool_scale = R = w;
                            pa();
                            var G = s.parents(":hidden");
                            G.css("visibility", "hidden").show();
                            Mb(s, w);
                            G.css("visibility", "visible").hide();
                            s = a("#tool_size_rules");
                            if (s.length) s.empty();
                            else
                                s = a('<style id="tool_size_rules"></style>').appendTo("head");
                            if (g != "m") {
                                var I = "";
                                a.each(cssResizeRules, function(M, T) {
                                    M = "#svg_editor " + M.replace(/,/g, ", #svg_editor");
                                    I += M + "{";
                                    a.each(T, function(X, S) {
                                        if (typeof S === "number") var W = S * w + "px";
                                        else if (S[g] || S.all) W = S[g] || S.all;
                                        I += X + ":" + W + ";";
                                    });
                                    I += "}";
                                });
                                G = "-" + Gb.toLowerCase() + "-";
                                I +=
                                    "#tools_top .toolset, #editor_panel > *, #history_panel > *,        #main_button, #tools_left > *, #path_node_panel > *, #multiselected_panel > *,        #g_panel > *, #tool_font_size > *, .tools_flyout{" +
                                    G +
                                    "transform: scale(" +
                                    w +
                                    ");} #svg_editor div.toolset .toolset {" +
                                    G +
                                    "transform: scale(1); margin: 1px !important;} #svg_editor .ui-slider {" +
                                    G +
                                    "transform: scale(" +
                                    1 / w +
                                    ");}";
                                s.text(I);
                            }
                            pa();
                        }
                    }),
                    db = function() {
                        a("#dialog_box").hide();
                        if (fa) {
                            if (fa)
                                ca !== a("#svg_source_textarea").val() ?
                                a.confirm("Ignore changes made to SVG source?", function(
                                    g
                                ) {
                                    g && Ab();
                                }) :
                                Ab();
                            f();
                        } else ua && d.leaveContext();
                    },
                    Ab = function() {
                        a("#svg_source_editor").hide();
                        fa = false;
                        a("#svg_source_textarea").blur();
                    };
                a(window).width();
                a(window).height();
                var f = a.noop;
                a(window).resize(function() {
                    D();
                });
                (function() {
                    L.scroll(function() {
                        if (a("#ruler_x").length != 0)
                            a("#ruler_x")[0].scrollLeft = L[0].scrollLeft;
                        if (a("#ruler_y").length != 0)
                            a("#ruler_y")[0].scrollTop = L[0].scrollTop;
                    });
                })();
                a("#url_notice").click(function() {
                    a.alert(this.title);
                });
                a("#change_image_url").click(function() {
                    var g = d.getHref(Z);
                    g = g.indexOf("data:") === 0 ? "" : g;
                    a.prompt("Enter the new image URL", g, function(o) {
                        o && Wa(o);
                    });
                });
                var h = function(g) {
                    var o = g[0].id == "stroke_color" ? "stroke" : "fill",
                        s = g[0].id == "canvas_color";
                    if (s) o = "canvas";
                    var w = c.paintBox[o].paint;
                    g =
                        o == "stroke" ?
                        "Pick a Stroke Paint and Opacity" :
                        "Pick a Fill Paint and Opacity";
                    s = s ? { right: 175, top: 50 } : { left: 50, bottom: 50 };
                    a("#color_picker")
                        .draggable({
                            cancel: ".jGraduate_tabs, .jGraduate_colPick, .jGraduate_gradPick, .jPicker",
                            containment: "window",
                        })
                        .removeAttr("style")
                        .css(s)
                        .jGraduate({
                                paint: w,
                                window: { pickerTitle: g },
                                images: { clientPath: q.jGraduatePath },
                                newstop: "inverse",
                            },
                            function(G) {
                                w = new a.jGraduate.Paint(G);
                                c.paintBox[o].setPaint(w);
                                d.setPaint(o, w);
                                a("#color_picker").hide();
                            },
                            function() {
                                a("#color_picker").hide();
                            }
                        );
                };
                p = function(g, o) {
                    var s = document.getElementById("canvas_background"),
                        w = { color: "fff", opacity: 1 };
                    if (o == "stroke") w = q.initStroke;
                    if (o == "fill") w = q.initFill;
                    if (o == "canvas" && s)
                        if (
                            (s = s
                                .getAttribute("fill")
                                .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))
                        )
                            w = {
                                color:
                                    ("0" + parseInt(s[1], 10).toString(16)).slice(-2) +
                                    ("0" + parseInt(s[2], 10).toString(16)).slice(-2) +
                                    ("0" + parseInt(s[3], 10).toString(16)).slice(-2),
                                opacity: 1,
                            };
                    s = new DOMParser().parseFromString(
                        '<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%"          fill="#' +
                        w.color +
                        '" opacity="' +
                        w.opacity +
                        '"/>          <defs><linearGradient id="gradbox_"/></defs></svg>',
                        "text/xml"
                    ).documentElement;
                    s = a(g)[0].appendChild(document.importNode(s, true));
                    o === "canvas" ?
                        s.setAttribute("width", 60.5) :
                        s.setAttribute("width", "100%");
                    this.rect = s.firstChild;
                    this.defs = s.getElementsByTagName("defs")[0];
                    this.grad = this.defs.firstChild;
                    this.paint = new a.jGraduate.Paint({ solidColor: w.color });
                    this.type = o;
                    this.setPaint = function(G, I) {
                        this.paint = G;
                        var M = "none",
                            T = G.type,
                            X = G.alpha / 100;
                        switch (T) {
                            case "solidColor":
                                M = G[T] == "none" || G[T] == "one" ? "none" : "#" + G[T];
                                break;
                            case "linearGradient":
                            case "radialGradient":
                                this.defs.removeChild(this.grad);
                                this.grad = this.defs.appendChild(G[T]);
                                M = "url(#" + (this.grad.id = "gradbox_" + this.type) + ")";
                        }
                        this.rect.setAttribute("fill", M);
                        this.rect.setAttribute("opacity", X);
                        if (this.type == "canvas")
                            if ((T = document.getElementById("canvas_background"))) {
                                Ea = d.getResolution();
                                T.setAttribute("x", -1);
                                T.setAttribute("y", -1);
                                T.setAttribute("width", Ea.w + 2);
                                T.setAttribute("height", Ea.h + 2);
                                M.indexOf("url") == -1 && T.setAttribute("fill", M);
                            } else Pa(M);
                        if (I) {
                            d.setColor(this.type, M, true);
                            d.setPaintOpacity(this.type, X, true);
                        }
                    };
                    this.update = function(G) {
                        if (Z) {
                            var I = this.type;
                            switch (Z.tagName) {
                                case "use":
                                case "image":
                                case "foreignObject":
                                    return;
                                case "g":
                                case "a":
                                    for (
                                        var M = null,
                                            T = Z.getElementsByTagName("*"),
                                            X = 0,
                                            S = T.length; X < S; X++
                                    ) {
                                        var W = T[X].getAttribute(I);
                                        if (X === 0) M = W;
                                        else if (M !== W) {
                                            M = null;
                                            break;
                                        }
                                    }
                                    if (M === null) {
                                        T = null;
                                        return;
                                    }
                                    T = M;
                                    M = 1;
                                    break;
                                default:
                                    M = parseFloat(Z.getAttribute(I + "-opacity"));
                                    if (isNaN(M)) M = 1;
                                    T = I === "fill" ? "black" : "none";
                                    T = Z.getAttribute(I) || T;
                            }
                            if (G) {
                                d.setColor(I, T, true);
                                d.setPaintOpacity(I, M, true);
                            }
                            M *= 100;
                            this.setPaint(Ka(T, M, I));
                        }
                    };
                    this.prep = function() {
                        switch (this.paint.type) {
                            case "linearGradient":
                            case "radialGradient":
                                var G = new a.jGraduate.Paint({ copy: this.paint });
                                d.setPaint(o, G);
                        }
                    };
                };
                c.paintBox.fill = new p("#fill_color", "fill");
                c.paintBox.stroke = new p("#stroke_color", "stroke");
                c.paintBox.canvas = new p("#canvas_color", "canvas");
                a("#stroke_width").val(q.initStroke.width);
                a("#group_opacity").val(q.initOpacity * 100);
                p = c.paintBox.fill.rect.cloneNode(false);
                p.setAttribute("style", "vector-effect:non-scaling-stroke");
                var m = p.style.vectorEffect === "non-scaling-stroke";
                p.removeAttribute("style");
                p = c.paintBox.fill.rect.ownerDocument.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "feGaussianBlur"
                );
                typeof p.stdDeviationX === "undefined" && a("#tool_blur").hide();
                a(p).remove();
                setTimeout(function() {
                    d.embedImage("images/placeholder.svg", function(g) {
                        if (!g) {
                            a("#image_save_opts [value=embed]").attr("disabled", "disabled");
                            a("#image_save_opts input").val(["ref"]);
                            b.img_save = "ref";
                            a("#image_opt_embed")
                                .css("color", "#666")
                                .attr("title", "Feature not supported");
                        }
                    });
                }, 1e3);
                a("#tool_fill").click(function() {
                    if (a("#tool_fill").hasClass("active")) h(a("#fill_color"));
                    else {
                        a("#tool_fill").addClass("active");
                        a("#tool_stroke").removeClass("active");
                    }
                });
                a("#tool_stroke").on("click", function() {
                    if (a("#tool_stroke").hasClass("active")) h(a("#stroke_color"));
                    else {
                        a("#tool_stroke").addClass("active");
                        a("#tool_fill").removeClass("active");
                    }
                });
                a("#tool_canvas").on("click touchstart", function() {
                    h(a("#canvas_color"));
                });
                a("#tool_stroke").on("touchstart", function() {
                    a("#tool_stroke").addClass("active");
                    a("#tool_fill").removeClass("active");
                    h(a("#stroke_color"));
                });
                a("#tool_fill").on("touchstart", function() {
                    a("#tool_fill").addClass("active");
                    a("#tool_stroke").removeClass("active");
                    h(a("#fill_color"));
                });
                a("#zoom_select").on("change", function() {
                    var g = this.options[this.selectedIndex].text;
                    g = g.split("%")[0];
                    a("#zoom").val(g).trigger("change");
                });
                a(".push_button")
                    .mousedown(function() {
                        a(this).hasClass("disabled") ||
                            a(this)
                            .addClass("push_button_pressed")
                            .removeClass("push_button");
                    })
                    .mouseout(function() {
                        a(this).removeClass("push_button_pressed").addClass("push_button");
                    })
                    .mouseup(function() {
                        a(this).removeClass("push_button_pressed").addClass("push_button");
                    });
                a(window).bind("load resize", function() {
                    L.css("line-height", L.height() + "px");
                });
                var B = function() {
                    var g = a("#canvas_width"),
                        o = a("#canvas_height"),
                        s = g.val(),
                        w = o.val();
                    if (s != "fit" && !svgedit.units.isValidUnit("width", s)) {
                        a.alert("Invalid value given");
                        g.parent().addClass("error");
                        return false;
                    }
                    g.parent().removeClass("error");
                    if (w != "fit" && !svgedit.units.isValidUnit("height", w)) {
                        a.alert("Invalid value given");
                        o.parent().addClass("error");
                        return false;
                    }
                    o.parent().removeClass("error");
                    if (!d.setResolution(s, w)) {
                        a.alert("No content to fit to");
                        s = d.getResolution();
                        g.val(s.w);
                        o.val(s.h);
                        return false;
                    }
                    D();
                };
                a("#resolution").change(function() {
                    var g = a("#canvas_width")[0],
                        o = a("#canvas_height")[0];
                    if (this.selectedIndex)
                        if (this.value == "content") {
                            g.value = "fit";
                            o.value = "fit";
                            B();
                            var s = d.getResolution();
                            g.value = s.w;
                            o.value = s.h;
                        } else {
                            var w = this.value.split("x");
                            w[0] = parseInt(w[0]);
                            w[1] = parseInt(w[1]);
                            var G = w[0] - g.value,
                                I = w[1] - o.value,
                                M = Date.now(),
                                T = function() {
                                    var X = (Date.now() - M) / 1e3;
                                    X = Math.pow(X - 1, 3) + 1;
                                    g.value = (w[0] - G + X * G).toFixed(0);
                                    o.value = (w[1] - I + X * I).toFixed(0);
                                    B();
                                    if (X >= 1) {
                                        X = d.getResolution();
                                        a("#canvas_width").val(X.w.toFixed());
                                        a("#canvas_height").val(X.h.toFixed());
                                        a("#resolution_label").html(
                                            "<div class='pull'>" +
                                            X.w +
                                            "<span>\u00d7</span></br>" +
                                            X.h +
                                            "</div>"
                                        );
                                    } else requestAnimationFrame(T);
                                };
                            T();
                        }
                    else {
                        a("#resolution_label").html("Custom");
                        g.removeAttribute("readonly");
                        g.focus();
                        g.select();
                        if (g.value == "fit") {
                            g.value = 100;
                            o.value = 100;
                        }
                    }
                });
                a("#zoom").change(function() {
                    wa(this);
                });
                a("input,select").attr("autocomplete", "off");
                var z = (function() {
                    var g = [
                            { sel: "#tool_select", fn: jb, evt: "click", key: ["V", true] },
                            { sel: "#tool_fhpath", fn: Va, evt: "click", key: ["Q", true] },
                            { sel: "#tool_line", fn: Ya, evt: "click", key: ["L", true] },
                            {
                                sel: "#tool_rect",
                                fn: Aa,
                                evt: "click",
                                key: ["R", true],
                                icon: "rect",
                            },
                            {
                                sel: "#tool_ellipse",
                                fn: ra,
                                evt: "mouseup",
                                key: ["C", true],
                                icon: "ellipse",
                            },
                            { sel: "#tool_path", fn: nb, evt: "click", key: ["P", true] },
                            { sel: "#tool_text", fn: eb, evt: "click", key: ["T", true] },
                            { sel: "#tool_image", fn: Fa, evt: "mouseup" },
                            { sel: "#tool_zoom", fn: Ra, evt: "mouseup", key: ["Z", true] },
                            {
                                sel: "#tool_clear",
                                fn: Qa,
                                evt: "mouseup",
                                key: [C + "N", true],
                            },
                            {
                                sel: "#tool_save",
                                fn: function() {
                                    if (fa) yb();
                                    else {
                                        Na(a("#file_menu"));
                                        d.save({ images: b.img_save, round_digits: 6 });
                                    }
                                },
                                evt: "mouseup",
                                key: [C + "S", true],
                            },
                            { sel: "#tool_export", fn: Xa, evt: "mouseup" },
                            { sel: "#tool_open", fn: ab, evt: "mouseup" },
                            { sel: "#tool_import", fn: Ma, evt: "mouseup" },
                            {
                                sel: "#tool_source",
                                fn: Nb,
                                evt: "click",
                                key: [C + "U", true],
                            },
                            { sel: "#tool_wireframe", fn: Hb, evt: "click" },
                            { sel: "#tool_snap", fn: Ib, evt: "click" },
                            { sel: "#tool_rulers", fn: Cb, evt: "click" },
                            {
                                sel: "#tool_source_cancel,#svg_source_overlay,#tool_docprops_cancel,#tool_prefs_cancel",
                                fn: db,
                                evt: "click",
                                key: ["esc", false, false],
                                hidekey: true,
                            },
                            { sel: "#tool_source_save", fn: yb, evt: "click" },
                            {
                                sel: "#tool_delete,#tool_delete_multi",
                                fn: $a,
                                evt: "click",
                                key: ["del/backspace", true],
                            },
                            { sel: "#tool_reorient", fn: ob, evt: "click" },
                            { sel: "#tool_node_link", fn: lb, evt: "change" },
                            { sel: "#tool_node_clone", fn: ia, evt: "click" },
                            { sel: "#tool_node_delete", fn: Y, evt: "click" },
                            { sel: "#tool_openclose_path", fn: Q, evt: "click" },
                            { sel: "#tool_add_subpath", fn: ga, evt: "click" },
                            {
                                sel: "#tool_move_top",
                                fn: Ga,
                                evt: "click",
                                key: C + "shift+up",
                            },
                            {
                                sel: "#tool_move_bottom",
                                fn: qb,
                                evt: "click",
                                key: C + "shift+down",
                            },
                            {
                                sel: "#tool_move_up",
                                fn: fb,
                                evt: "click",
                                key: [C + "up", true],
                            },
                            {
                                sel: "#tool_move_down",
                                fn: rb,
                                evt: "click",
                                key: [C + "down", true],
                            },
                            { sel: "#tool_topath", fn: gb, evt: "click" },
                            {
                                sel: "#tool_make_link,#tool_make_link_multi",
                                fn: wb,
                                evt: "click",
                            },
                            {
                                sel: "#tool_clone,#tool_clone_multi",
                                fn: bb,
                                evt: "click",
                                key: [C + "D", true],
                            },
                            {
                                sel: "#tool_group",
                                fn: zb,
                                evt: "click",
                                key: [C + "G", true],
                            },
                            {
                                sel: "#tool_ungroup",
                                fn: zb,
                                evt: "click",
                                key: C + "shift+G",
                            },
                            { sel: "#tool_unlink_use", fn: zb, evt: "click" },
                            { sel: "[id^=tool_align]", fn: Ha, evt: "click" },
                            { sel: "#tool_undo", fn: sb, evt: "click", key: C + "z" },
                            { sel: "#tool_redo", fn: Fb, evt: "click", key: ["y", true] },
                            { sel: "#tool_cut", fn: Sa, evt: "click", key: [C + "x", true] },
                            { sel: "#tool_copy", fn: ub, evt: "click", key: C + "c" },
                            { sel: "#tool_paste", fn: La, evt: "click", key: C + "v" },
                            { sel: "#tool_switch", fn: Kb, evt: "click", key: ["x", true] },
                            {
                                sel: "#tool_bold",
                                fn: Ua,
                                evt: "mousedown",
                                key: [C + "B", true],
                            },
                            {
                                sel: "#tool_italic",
                                fn: hb,
                                evt: "mousedown",
                                key: [C + "I", true],
                            },
                            { sel: "#copy_save_done", fn: db, evt: "click" },
                            {
                                key: "ctrl+left",
                                fn: function() {
                                    Ca(0, 1);
                                },
                            },
                            {
                                key: "ctrl+right",
                                fn: function() {
                                    Ca(1, 1);
                                },
                            },
                            {
                                key: "ctrl+shift+left",
                                fn: function() {
                                    Ca(0, 5);
                                },
                            },
                            {
                                key: "ctrl+shift+right",
                                fn: function() {
                                    Ca(1, 5);
                                },
                            },
                            { key: "shift+O", fn: ba },
                            { key: "shift+P", fn: P },
                            {
                                key: [C + "+", true],
                                fn: function() {
                                    xb(2);
                                },
                            },
                            {
                                key: [C + "-", true],
                                fn: function() {
                                    xb(0.5);
                                },
                            },
                            {
                                key: ["up", true],
                                fn: function() {
                                    cb(0, -1);
                                },
                            },
                            {
                                key: ["down", true],
                                fn: function() {
                                    cb(0, 1);
                                },
                            },
                            {
                                key: ["left", true],
                                fn: function() {
                                    cb(-1, 0);
                                },
                            },
                            {
                                key: ["right", true],
                                fn: function() {
                                    cb(1, 0);
                                },
                            },
                            {
                                key: "shift+up",
                                fn: function() {
                                    cb(0, -10);
                                },
                            },
                            {
                                key: "shift+down",
                                fn: function() {
                                    cb(0, 10);
                                },
                            },
                            {
                                key: "shift+left",
                                fn: function() {
                                    cb(-10, 0);
                                },
                            },
                            {
                                key: "shift+right",
                                fn: function() {
                                    cb(10, 0);
                                },
                            },
                            {
                                key: ["alt+up", true],
                                fn: function() {
                                    d.cloneSelectedElements(0, -1);
                                },
                            },
                            {
                                key: ["alt+down", true],
                                fn: function() {
                                    d.cloneSelectedElements(0, 1);
                                },
                            },
                            {
                                key: ["alt+left", true],
                                fn: function() {
                                    d.cloneSelectedElements(-1, 0);
                                },
                            },
                            {
                                key: ["alt+right", true],
                                fn: function() {
                                    d.cloneSelectedElements(1, 0);
                                },
                            },
                            {
                                key: ["alt+shift+up", true],
                                fn: function() {
                                    d.cloneSelectedElements(0, -10);
                                },
                            },
                            {
                                key: ["alt+shift+down", true],
                                fn: function() {
                                    d.cloneSelectedElements(0, 10);
                                },
                            },
                            {
                                key: ["alt+shift+left", true],
                                fn: function() {
                                    d.cloneSelectedElements(-10, 0);
                                },
                            },
                            {
                                key: ["alt+shift+right", true],
                                fn: function() {
                                    d.cloneSelectedElements(10, 0);
                                },
                            },
                            {
                                key: C + "A",
                                fn: function() {
                                    d.selectAllInCurrentLayer();
                                },
                            },
                            {
                                key: "I",
                                fn: function() {
                                    var s = a(".tool_button_current");
                                    if (s.length && s[0].id !== "tool_eyedropper") {
                                        s.removeClass("tool_button_current").addClass(
                                            "tool_button"
                                        );
                                        a("#tool_eyedropper")
                                            .addClass("tool_button_current")
                                            .removeClass("tool_button");
                                    }
                                    d.setMode("eyedropper");
                                },
                            },
                            { key: C + "shift+z", fn: Fb },
                            { key: "esc", fn: Lb },
                        ],
                        o = {
                            "4/Shift+4": "#tools_rect_show",
                            "5/Shift+5": "#tools_ellipse_show",
                        };
                    return {
                        setAll: function() {
                            var s = {};
                            a.each(g, function(w, G) {
                                if (G.sel) {
                                    var I = a(G.sel);
                                    if (I.length == 0) return true;
                                    if (G.evt) {
                                        if (svgedit.browser.isTouch() && G.evt === "click")
                                            G.evt = "mousedown";
                                        I[G.evt](G.fn);
                                    }
                                    if (G.parent && a(G.parent + "_show").length != 0) {
                                        var M = a(G.parent);
                                        M.length || (M = qa(G.parent.substr(1)));
                                        M.append(I);
                                        a.isArray(s[G.parent]) || (s[G.parent] = []);
                                        s[G.parent].push(G);
                                    }
                                }
                                if (G.key) {
                                    var T = G.fn,
                                        X = false;
                                    if (a.isArray(G.key)) {
                                        M = G.key[0];
                                        if (G.key.length > 1) X = G.key[1];
                                    } else M = G.key;
                                    M += "";
                                    svgedit.browser.isMac &&
                                        M.indexOf("+") != -1 &&
                                        M.split("+")[0] == "ctrl" &&
                                        M.replace("ctrl", "cmd");
                                    a.each(M.split("/"), function(W, ha) {
                                        a(document).bind("keydown", ha, function(la) {
                                            T();
                                            X && la.preventDefault();
                                            return false;
                                        });
                                    });
                                    if (G.sel && !G.hidekey && I.attr("title")) {
                                        var S = I.attr("title").split("[")[0] + " (" + M + ")";
                                        o[M] = G.sel;
                                        I.parents("#main_menu").length || I.attr("title", S);
                                    }
                                }
                            });
                            da(s);
                            a(window)
                                .bind("keydown", "tab", function(w) {
                                    if (N === "canvas") {
                                        w.preventDefault();
                                        P();
                                    }
                                })
                                .bind("keydown", "shift+tab", function(w) {
                                    if (N === "canvas") {
                                        w.preventDefault();
                                        ba();
                                    }
                                });
                            a("#tool_zoom").dblclick(ya);
                        },
                        setTitles: function() {
                            a.each(o, function(s, w) {
                                var G = a(w).parents("#main_menu").length;
                                a(w).each(function() {
                                    var I = G ?
                                        a(this).text().split(" [")[0] :
                                        this.title.split(" [")[0],
                                        M = "";
                                    a.each(s.split("/"), function(T, X) {
                                        var S = X.split("+"),
                                            W = "";
                                        if (S.length > 1) {
                                            W = S[0] + "+";
                                            X = S[1];
                                        }
                                        M += (T ? "/" : "") + W + X;
                                    });
                                    if (G) this.lastChild.textContent = I + " [" + M + "]";
                                    else this.title = I + " [" + M + "]";
                                });
                            });
                        },
                        getButtonData: function(s) {
                            var w;
                            a.each(g, function(G, I) {
                                if (I.sel === s) w = I;
                            });
                            return w;
                        },
                    };
                })();
                z.setAll();
                c.ready(function() {
                    var g = q.initTool,
                        o = a("#tools_left, #svg_editor .tools_flyout"),
                        s = o.find("#tool_" + g);
                    g = o.find("#" + g);
                    (s.length ? s : g.length ? g : a("#tool_select")).click().mouseup();
                    q.wireframe && a("#tool_wireframe").click();
                    q.showlayers && toggleSidePanel();
                    a("#rulers").toggle(!!q.showRulers);
                });
                a("#canvas_height").dragInput({
                    min: 10,
                    max: null,
                    step: 10,
                    callback: B,
                    cursor: false,
                    dragAdjust: 0.1,
                });
                a("#canvas_width").dragInput({
                    min: 10,
                    max: null,
                    step: 10,
                    callback: B,
                    cursor: false,
                    dragAdjust: 0.1,
                });
                a("#rect_width").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#rect_height").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#ellipse_cx").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#ellipse_cy").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#ellipse_rx").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#ellipse_ry").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#image_height").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#circle_cx").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#circle_cy").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#circle_r").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#image_height").dragInput({
                    min: 0,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#selected_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#selected_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#path_node_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#path_node_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#image_width").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#line_x1").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#line_x2").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#line_y1").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#line_y2").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#path_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#path_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#rect_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#rect_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#g_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#g_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#image_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#text_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#text_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#image_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                a("#rect_rx").dragInput({
                    min: 0,
                    max: 100,
                    step: 1,
                    callback: changeAttribute,
                    cursor: true,
                });
                a("#stroke_width").dragInput({
                    min: 0,
                    max: 99,
                    step: 1,
                    callback: function(g) {
                        var o = g.value;
                        if (o == 0 && Z && ["line", "polyline"].indexOf(Z.nodeName) >= 0)
                            o = g.value = 1;
                        d.setStrokeWidth(o);
                    },
                    cursor: true,
                    smallStep: 0.1,
                    start: 1.5,
                });
                a("#angle").dragInput({
                    min: -180,
                    max: 180,
                    step: 1,
                    callback: function(g) {
                        d.setRotationAngle(g.value, true);
                        rotateCursor(g.value);
                        a("#tool_reorient").toggleClass("disabled", g.value == 0);
                    },
                    cursor: false,
                    dragAdjust: 0.5,
                });
                a("#font_size").dragInput({
                    min: 1,
                    max: 250,
                    step: 1,
                    callback: function(g) {
                        d.setFontSize(g.value);
                    },
                    cursor: true,
                    stepfunc: function(g, o) {
                        var s = g.value - 0,
                            w = s + o,
                            G = w >= s;
                        if (o === 0) return s;
                        return s >= 24 ?
                            G ?
                            Math.round(s * 1.1) :
                            Math.round(s / 1.1) :
                            s <= 1 ?
                            G ?
                            s * 2 :
                            s / 2 :
                            w;
                    },
                    dragAdjust: 0.15,
                });
                a("#group_opacity").dragInput({
                    min: 0,
                    max: 100,
                    step: 5,
                    callback: changeAttribute,
                    cursor: true,
                    start: 100,
                });
                a("#blur").dragInput({
                    min: 0,
                    max: 10,
                    step: 0.1,
                    callback: function(g, o) {
                        val = g.value;
                        a("#blur").val(val);
                        o ? d.setBlur(val, true) : d.setBlurNoUndo(val);
                    },
                    cursor: true,
                    start: 0,
                });
                a("#zoom").val(d.getZoom() * 100);
                a("#workarea").contextMenu({ menu: "cmenu_canvas", inSpeed: 0 },
                    function(g) {
                        switch (g) {
                            case "delete":
                                $a();
                                break;
                            case "cut":
                                Sa();
                                break;
                            case "copy":
                                ub();
                                break;
                            case "paste":
                                d.pasteElements();
                                break;
                            case "paste_in_place":
                                d.pasteElements("in_place");
                                break;
                            case "group":
                                d.groupSelectedElements();
                                break;
                            case "ungroup":
                                d.ungroupSelectedElement();
                                break;
                            case "move_front":
                                Ga();
                                break;
                            case "move_up":
                                kb("Up");
                                break;
                            case "move_down":
                                kb("Down");
                                break;
                            case "move_back":
                                qb();
                                break;
                            default:
                                svgedit.contextmenu &&
                                    svgedit.contextmenu.hasCustomHandler(g) &&
                                    svgedit.contextmenu.getCustomHandler(g).call();
                        }
                    }
                );
                a(".contextMenu li").mousedown(function(g) {
                    g.preventDefault();
                });
                a("#cmenu_canvas li").disableContextMenu();
                H.enableContextMenuItems("#delete,#cut,#copy");
                window.onbeforeunload = function() {
                    if (K.getUndoStackSize() === 0) c.show_save_warning = false;
                    if (!q.no_save_warning && c.show_save_warning)
                        return "There are unsaved changes.";
                };
                c.openPrep = function(g) {
                    a("#main_menu").hide();
                    K.getUndoStackSize() === 0 ?
                        g(true) :
                        a.confirm(
                            "Do you want to open a new file?\nThis will also erase your undo history",
                            g
                        );
                };
                if (window.FileReader) {
                    p = function(g) {
                        g.stopPropagation();
                        g.preventDefault();
                        a("#workarea").removeAttr("style");
                        a("#main_menu").hide();
                        var o = null;
                        if (
                            (o = g.type == "drop" ? g.dataTransfer.files[0] : this.files[0])
                        )
                            if (o.type.indexOf("image") != -1)
                                if (o.type.indexOf("svg") != -1) {
                                    g = new FileReader();
                                    g.onloadend = function(s) {
                                        d.importSvgString(s.target.result, true);
                                        d.ungroupSelectedElement();
                                        d.ungroupSelectedElement();
                                        d.groupSelectedElements();
                                        d.alignSelectedElements("m", "page");
                                        d.alignSelectedElements("c", "page");
                                    };
                                    g.readAsText(o);
                                } else {
                                    g = new FileReader();
                                    g.onloadend = function(s) {
                                        insertNewImage = function(M, T) {
                                            var X = d.addSvgElementFromJson({
                                                element: "image",
                                                attr: {
                                                    x: 0,
                                                    y: 0,
                                                    width: M,
                                                    height: T,
                                                    id: d.getNextId(),
                                                    style: "pointer-events:inherit",
                                                },
                                            });
                                            d.setHref(X, s.target.result);
                                            d.selectOnly([X]);
                                            d.alignSelectedElements("m", "page");
                                            d.alignSelectedElements("c", "page");
                                            Ia();
                                        };
                                        var w = 100,
                                            G = 100,
                                            I = new Image();
                                        I.src = s.target.result;
                                        document.body.appendChild(I);
                                        I.onload = function() {
                                            w = I.offsetWidth;
                                            G = I.offsetHeight;
                                            insertNewImage(w, G);
                                            document.body.removeChild(I);
                                        };
                                    };
                                    g.readAsDataURL(o);
                                }
                    };
                    L = a("#workarea");
                    L[0].addEventListener(
                        "dragenter",
                        function(g) {
                            g.stopPropagation();
                            g.preventDefault();
                            L.css({
                                "-webkit-transform": "scale3d(1.1,1.1,1)",
                                "-moz-transform": "scale3d(1.1,1.1,1)",
                                "-o-transform": "scale(1.1)",
                                "-ms-transform": "scale3d(1.1,1.1,1)",
                                transform: "scale3d(1.1,1.1,1)",
                            });
                        },
                        false
                    );
                    L[0].addEventListener(
                        "dragover",
                        function(g) {
                            g.stopPropagation();
                            g.preventDefault();
                        },
                        false
                    );
                    L[0].addEventListener(
                        "dragleave",
                        function(g) {
                            L.removeAttr("style");
                            g.stopPropagation();
                            g.preventDefault();
                        },
                        false
                    );
                    L[0].addEventListener("drop", p, false);
                    var F = a('<input type="file">').change(function() {
                        var g = this;
                        c.openPrep(function(o) {
                            if (o) {
                                d.clear();
                                if (g.files.length == 1) {
                                    o = new FileReader();
                                    o.onloadend = function(s) {
                                        n(s.target.result);
                                        D();
                                    };
                                    o.readAsText(g.files[0]);
                                }
                            }
                        });
                    });
                    a("#tool_open").show().prepend(F);
                    p = a('<input type="file">').change(p);
                    a("#tool_import").show().prepend(p);
                }
                var D = (c.updateCanvas = function(g, o) {
                        var s = L.width(),
                            w = L.height(),
                            G = s,
                            I = w,
                            M = d.getZoom(),
                            T = L,
                            X = a("#svgcanvas"),
                            S = { x: T[0].scrollLeft + G / 2, y: T[0].scrollTop + I / 2 },
                            W = q.canvas_expansion;
                        s = Math.max(G, d.contentW * M * W);
                        w = Math.max(I, d.contentH * M * W);
                        s == G && w == I ?
                            L.css("overflow", "hidden") :
                            L.css("overflow", "scroll");
                        W = X.height() / 2;
                        var ha = X.width() / 2;
                        X.width(s).height(w);
                        var la = w / 2,
                            ea = s / 2,
                            ta = d.updateCanvas(s, w),
                            Ba = ea / ha;
                        s = s / 2 - G / 2;
                        w = w / 2 - I / 2;
                        if (o) {
                            o.x += ta.x;
                            o.y += ta.y;
                        } else o = { x: ea + (S.x - ha) * Ba, y: la + (S.y - W) * Ba };
                        if (g)
                            if (d.contentW > T.width()) {
                                L[0].scrollLeft = ta.x - 10;
                                L[0].scrollTop = ta.y - 10;
                            } else {
                                T[0].scrollLeft = s;
                                T[0].scrollTop = w;
                            }
                        else {
                            T[0].scrollLeft = o.x - G / 2;
                            T[0].scrollTop = o.y - I / 2;
                        }
                        if (q.showRulers) {
                            G = X;
                            M = M;
                            document.getElementById("workarea");
                            document.getElementById("title_show");
                            M || (M = d.getZoom());
                            G || (G = a("#svgcanvas"));
                            I = d.getContentElem();
                            T = svgedit.units.getTypeMap()[q.baseUnit];
                            for (X = 0; X < 2; X++) {
                                ha = (S = X === 0) ? "x" : "y";
                                Ba = S ? "width" : "height";
                                W = I.getAttribute(ha) - 0;
                                ha = a("#ruler_" + ha + " canvas:first");
                                $hcanv = ha.clone();
                                ha.replaceWith($hcanv);
                                s = $hcanv[0];
                                la = ha = G[Ba]() * 2;
                                s.parentNode.style[Ba] = la + "px";
                                ea = 0;
                                var xa;
                                ta = s.getContext("2d");
                                ta.fillStyle = "rgb(200,0,0)";
                                ta.fillRect(0, 0, s.width, s.height);
                                $hcanv.siblings().remove();
                                if (ha >= 3e4) {
                                    var Da = parseInt(ha / 3e4) + 1;
                                    xa = Array(Da);
                                    xa[0] = ta;
                                    for (w = 1; w < Da; w++) {
                                        s[Ba] = 3e4;
                                        var Za = s.cloneNode(true);
                                        s.parentNode.appendChild(Za);
                                        xa[w] = Za.getContext("2d");
                                    }
                                    Za[Ba] = ha % 3e4;
                                    ha = 3e4;
                                }
                                s[Ba] = ha;
                                Ba = T * M;
                                var Ta = 50 / Ba;
                                s = 1;
                                for (w = 0; w < u.length; w++) {
                                    s = Da = u[w];
                                    if (Ta <= Da) break;
                                }
                                Ta = s * Ba;
                                ta.font = "normal 9px 'Lucida Grande', sans-serif";
                                ta.fillStyle = "#777";
                                for (
                                    var Oa = ((W / Ba) % s) * Ba, mb = Oa - Ta; Oa < la; Oa += Ta
                                ) {
                                    mb += Ta;
                                    w = Math.round(Oa) + 0.5;
                                    if (S) {
                                        ta.moveTo(w, 15);
                                        ta.lineTo(w, 0);
                                    } else {
                                        ta.moveTo(15, w);
                                        ta.lineTo(0, w);
                                    }
                                    Da = (mb - W) / Ba;
                                    if (s >= 1) w = Math.round(Da);
                                    else {
                                        w = (s + "").split(".")[1].length;
                                        w = Da.toFixed(w) - 0;
                                    }
                                    if (w !== 0 && w !== 1e3 && w % 1e3 === 0) w = w / 1e3 + "K";
                                    if (S) {
                                        ta.fillText(w, Oa + 2, 8);
                                        ta.fillStyle = "#777";
                                    } else {
                                        Da = (w + "").split("");
                                        for (w = 0; w < Da.length; w++) {
                                            ta.fillText(Da[w], 1, Oa + 9 + w * 9);
                                            ta.fillStyle = "#777";
                                        }
                                    }
                                    Da = Ta / 10;
                                    for (w = 1; w < 10; w++) {
                                        var vb = Math.round(Oa + Da * w) + 0.5;
                                        if (xa && vb > ha) {
                                            ea++;
                                            ta.stroke();
                                            if (ea >= xa.length) {
                                                w = 10;
                                                Oa = la;
                                                continue;
                                            }
                                            ta = xa[ea];
                                            Oa -= 3e4;
                                            vb = Math.round(Oa + Da * w) + 0.5;
                                        }
                                        var Eb = w % 2 ? 12 : 10;
                                        if (S) {
                                            ta.moveTo(vb, 15);
                                            ta.lineTo(vb, Eb);
                                        } else {
                                            ta.moveTo(15, vb);
                                            ta.lineTo(Eb, vb);
                                        }
                                    }
                                }
                                ta.strokeStyle = "#666";
                                ta.stroke();
                            }
                            L.scroll();
                        }
                    }),
                    u = [];
                for (p = 0.1; p < 1e5; p *= 10) {
                    u.push(1 * p);
                    u.push(2 * p);
                    u.push(5 * p);
                }
                D(true);
                try {
                    var E = function(g) {
                        if (window.JSON && JSON.stringify) return JSON.stringify(g);
                        var o = arguments.callee;
                        if (typeof g == "boolean" || typeof g == "number") return g + "";
                        else if (typeof g == "string")
                            return (
                                '"' +
                                g.replace(
                                    /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                                    function(G) {
                                        return (
                                            "\\u" + ("0000" + G.charCodeAt(0).toString(16)).slice(-4)
                                        );
                                    }
                                ) +
                                '"'
                            );
                        else if (g.length) {
                            for (var s = 0; s < g.length; s++) g[s] = o(g[s]);
                            return "[" + g.join(",") + "]";
                        } else {
                            s = [];
                            for (var w in g) s.push(o(w) + ":" + o(g[w]));
                            return "{" + s.join(",") + "}";
                        }
                    };
                    window.addEventListener(
                        "message",
                        function(g) {
                            var o = parseInt(g.data.substr(0, g.data.indexOf(";")));
                            try {
                                g.source.postMessage("SVGe" + o + ";" + E(eval(g.data)), "*");
                            } catch (s) {
                                g.source.postMessage("SVGe" + o + ";error:" + s.message, "*");
                            }
                        },
                        false
                    );
                } catch (J) {
                    window.embed_error = J;
                }
                a(function() {
                    window.svgCanvas = d;
                    d.ready = methodDraw.ready;
                });
                c.setLang = function(g, o) {
                    a.pref("lang", g);
                    a("#lang_select").val(g);
                    if (o) {
                        d.runExtensions("langChanged", g);
                        na();
                        a.each({
                                "#stroke_color": "#tool_stroke .icon_label, #tool_stroke .color_block",
                                "#fill_color": "#tool_fill label, #tool_fill .color_block",
                                "#linejoin_miter": "#cur_linejoin",
                                "#linecap_butt": "#cur_linecap",
                            },
                            function(s, w) {
                                a(w).attr("title", a(s)[0].title);
                            }
                        );
                        a("#multiselected_panel div[id^=tool_align]").each(function() {
                            a("#tool_pos" + this.id.substr(10))[0].title = this.title;
                        });
                    }
                };
            };
            var e = [];
            c.ready = function(p) {
                l ? p() : e.push(p);
            };
            c.runCallbacks = function() {
                a.each(e, function() {
                    this();
                });
                l = true;
            };
            c.loadFromString = function(p) {
                c.ready(function() {
                    n(p);
                });
            };
            c.loadFromURL = function(p, A) {
                A || (A = {});
                var C = A.cache,
                    v = A.callback;
                c.ready(function() {
                    a.ajax({
                        url: p,
                        dataType: "text",
                        cache: !!C,
                        success: function(K) {
                            n(K, v);
                        },
                        error: function(K, O, L) {
                            K.status != 404 && K.responseText ?
                                n(K.responseText, v) :
                                a.alert("Unable to load from URL: \n" + L + "", v);
                        },
                    });
                });
            };
            c.loadFromDataURI = function(p) {
                c.ready(function() {
                    var A = p.substring(26);
                    n(svgedit.utilities.decode64(A));
                });
            };
            c.addExtension = function() {
                var p = arguments;
                a(function() {
                    d && d.addExtension.apply(this, p);
                });
            };
            return c;
        })(jQuery);
    $(methodDraw.init);
})();
$.fn.dragInput = function(a) {
    return this.each(function() {
        this.repeating = false;
        this.dragCfg = {
            min: a && !isNaN(parseFloat(a.min)) ? Number(a.min) : null,
            max: a && !isNaN(parseFloat(a.max)) ? Number(a.max) : null,
            step: a && Number(a.step) ? a.step : 1,
            stepfunc: a && a.stepfunc ? a.stepfunc : false,
            dragAdjust: a && a.dragAdjust ? a.dragAdjust : 1,
            height: 70,
            cursor: a && a.cursor ? Boolean(a.cursor) : false,
            start: a && a.start ? Number(a.start) : 0,
            _btn_width: 20,
            _direction: null,
            _delay: null,
            _repeat: null,
            callback: a && a.callback ? a.callback : null,
        };
        this.dragCfg.smallStep =
            a && a.smallStep ? a.smallStep : this.dragCfg.step / 2;
        var n = this.dragCfg.dragAdjust,
            d = $(this).parent(),
            c = $(this),
            l = this.dragCfg.height,
            q = this.dragCfg.min,
            b = this.dragCfg.max,
            k = this.dragCfg.step,
            e = b - q > 0 ? (b - q) / k : 200,
            p = (e / l) * k,
            A = 0,
            C = this.getAttribute("data-attr"),
            v = methodDraw.canvas,
            K = svgedit.browser.isTouch(),
            O = true,
            L =
            e && this.dragCfg.cursor ?
            $("<div class='draginput_cursor' />").appendTo(d) :
            false;
        c.attr("readonly", "readonly");
        L &&
            !isNaN(this.dragCfg.start) &&
            L.css("top", (this.dragCfg.start * -1) / p + l);
        this.adjustValue = function(H, V) {
            var R;
            H = parseFloat(H);
            R = isNaN(this.value) ?
                this.dragCfg.reset :
                $.isFunction(this.dragCfg.stepfunc) ?
                this.dragCfg.stepfunc(this, H) :
                Number((Number(this.value) + Number(H)).toFixed(5));
            if (b !== null) R = Math.min(R, b);
            if (q !== null) R = Math.max(R, q);
            L && this.updateCursor(R);
            this.value = R;
            d.attr("data-value", R);
            $.isFunction(this.dragCfg.callback) && this.dragCfg.callback(this, V);
        };
        d.toggleClass("draginput", d.is("label"));
        this.move = function(H, V, R) {
            if (K) H = H.originalEvent.touches[0];
            if (A === 0) A = V;
            V = (H.pageY - A) * -1;
            A = H.pageY;
            R = V * p * n;
            this.adjustValue(R.toFixed(k < 1 ? 1 : 0));
        };
        this.stop = function() {
            var H = v.getSelectedElems();
            $("body").removeClass("dragging");
            d.removeClass("active");
            O = true;
            $(window).unbind(
                "mousemove.draginput touchmove.draginput mouseup.draginput touchend.draginput"
            );
            A = 0;
            if (H[0]) {
                H = v.undoMgr.finishUndoableChange();
                H.isEmpty() || v.undoMgr.addCommandToHistory(H);
            }
            this.adjustValue(0, O);
        };
        this.updateCursor = function() {
            var H = (parseFloat(this.value) * -1) / p + l;
            L.css("top", H);
        };
        this.launch = function(H) {
            var V = v.getSelectedElems();
            if (K) H = H.originalEvent.touches[0];
            var R = H.pageY,
                N = this.value,
                ca = this;
            v.undoMgr.beginUndoableChange(C, V);
            $("body").addClass("dragging");
            d.addClass("active");
            $(window).bind("mousemove.draginput touchmove.draginput", function(ma) {
                ca.move(ma, R, parseFloat(N));
            });
            $(window).bind("mouseup.draginput touchend.draginput", function() {
                ca.stop();
            });
        };
        $(this)
            .attr("readonly", "readonly")
            .attr("data-scale", p)
            .attr("data-domain", l)
            .attr("data-cursor", L != false)
            .bind("mousedown touchstart", function(H) {
                this.blur();
                this.launch(H);
            })
            .bind("dblclick taphold", function() {
                this.removeAttribute("readonly", "readonly");
                this.focus();
                this.select();
            })
            .keydown(function(H) {
                switch (H.keyCode) {
                    case 13:
                        this.adjustValue(0);
                        this.blur();
                }
            })
            .focus(function() {
                this.getAttribute("readonly") === "readonly" && this.blur();
            })
            .blur(function() {
                this.setAttribute("readonly", "readonly");
            })
            .bind("mousewheel", function(H, V, R, N) {
                V = v.getSelectedElems();
                O && v.undoMgr.beginUndoableChange(C, V);
                O = false;
                clearTimeout(window.undoTimeout);
                window.undoTimeout = setTimeout(function() {
                    ca.stop();
                }, 200);
                var ca = this;
                if (N > 0) this.adjustValue(this.dragCfg.step);
                else N < 0 && this.adjustValue(-this.dragCfg.step);
                H.preventDefault();
            });
    });
};
$.fn.dragInput.updateCursor = function(a) {
    var n = parseFloat(a.value),
        d = parseFloat(a.getAttribute("data-scale")),
        c = parseFloat(a.getAttribute("data-domain"));
    n = (n * -1) / d + c + "px";
    a = a.parentNode.lastChild;
    if (a.className == "draginput_cursor") a.style.top = n;
};
svgedit = svgedit || {};
(function() {
    var a = this;
    if (!svgedit.contextmenu) svgedit.contextmenu = {};
    a.contextMenuExtensions = {};
    methodDraw.ready(function() {
        for (menuItem in contextMenuExtensions) {
            var n = contextMenuExtensions[menuItem];
            Object.keys(a.contextMenuExtensions).length == 0 &&
                $("#cmenu_canvas").append("<li class='separator'>");
            var d = n.shortcut || "";
            $("#cmenu_canvas").append(
                "<li class='disabled'><a href='#" +
                n.id +
                "'>" +
                n.label +
                "<span class='shortcut'>" +
                d +
                "</span></a></li>"
            );
        }
    });
    svgedit.contextmenu.resetCustomMenus = function() {
        a.contextMenuExtensions = {};
    };
    svgedit.contextmenu.add = function(n) {
        if (n && n.id && n.label && n.action && typeof n.action == "function")
            if (n.id in a.contextMenuExtensions)
                console.error(
                    'Cannot add extension "' +
                    n.id +
                    '", an extension by that name already exists"'
                );
            else {
                console.log(
                    "Registed contextmenu item: {id:" + n.id + ", label:" + n.label + "}"
                );
                a.contextMenuExtensions[n.id] = n;
            }
        else
            console.error(
                "Menu items must be defined and have at least properties: id, label, action, where action must be a function"
            );
    };
    svgedit.contextmenu.hasCustomHandler = function(n) {
        return a.contextMenuExtensions[n] && true;
    };
    svgedit.contextmenu.getCustomHandler = function(n) {
        return a.contextMenuExtensions[n].action;
    };
})();
(function(a, n) {
    function d(l) {
        return !a(l)
            .parents()
            .andSelf()
            .filter(function() {
                return (
                    a.curCSS(this, "visibility") === "hidden" ||
                    a.expr.filters.hidden(this)
                );
            }).length;
    }

    function c(l, q) {
        var b = l.nodeName.toLowerCase();
        if ("area" === b) {
            b = l.parentNode;
            var k = b.name;
            if (!l.href || !k || b.nodeName.toLowerCase() !== "map") return false;
            b = a("img[usemap=#" + k + "]")[0];
            return !!b && d(b);
        }
        return (
            (/input|select|textarea|button|object/.test(b) ?
                !l.disabled :
                "a" == b ?
                l.href || q :
                q) && d(l)
        );
    }
    a.ui = a.ui || {};
    a.ui.version ||
        (a.extend(a.ui, {
                version: "1.8.17",
                keyCode: {
                    ALT: 18,
                    BACKSPACE: 8,
                    CAPS_LOCK: 20,
                    COMMA: 188,
                    COMMAND: 91,
                    COMMAND_LEFT: 91,
                    COMMAND_RIGHT: 93,
                    CONTROL: 17,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    INSERT: 45,
                    LEFT: 37,
                    MENU: 93,
                    NUMPAD_ADD: 107,
                    NUMPAD_DECIMAL: 110,
                    NUMPAD_DIVIDE: 111,
                    NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106,
                    NUMPAD_SUBTRACT: 109,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SHIFT: 16,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38,
                    WINDOWS: 91,
                },
            }),
            a.fn.extend({
                propAttr: a.fn.prop || a.fn.attr,
                _focus: a.fn.focus,
                focus: function(l, q) {
                    return typeof l == "number" ?
                        this.each(function() {
                            var b = this;
                            setTimeout(function() {
                                a(b).focus();
                                q && q.call(b);
                            }, l);
                        }) :
                        this._focus.apply(this, arguments);
                },
                scrollParent: function() {
                    var l;
                    (a.browser.msie && /(static|relative)/.test(this.css("position"))) ||
                    /absolute/.test(this.css("position")) ?
                        (l = this.parents()
                            .filter(function() {
                                return (
                                    /(relative|absolute|fixed)/.test(
                                        a.curCSS(this, "position", 1)
                                    ) &&
                                    /(auto|scroll)/.test(
                                        a.curCSS(this, "overflow", 1) +
                                        a.curCSS(this, "overflow-y", 1) +
                                        a.curCSS(this, "overflow-x", 1)
                                    )
                                );
                            })
                            .eq(0)) :
                        (l = this.parents()
                            .filter(function() {
                                return /(auto|scroll)/.test(
                                    a.curCSS(this, "overflow", 1) +
                                    a.curCSS(this, "overflow-y", 1) +
                                    a.curCSS(this, "overflow-x", 1)
                                );
                            })
                            .eq(0));
                    return /fixed/.test(this.css("position")) || !l.length ?
                        a(document) :
                        l;
                },
                zIndex: function(l) {
                    if (l !== n) return this.css("zIndex", l);
                    if (this.length) {
                        l = a(this[0]);
                        for (var q; l.length && l[0] !== document;) {
                            q = l.css("position");
                            if (q === "absolute" || q === "relative" || q === "fixed") {
                                q = parseInt(l.css("zIndex"), 10);
                                if (!isNaN(q) && q !== 0) return q;
                            }
                            l = l.parent();
                        }
                    }
                    return 0;
                },
                disableSelection: function() {
                    return this.bind(
                        (a.support.selectstart ? "selectstart" : "mousedown") +
                        ".ui-disableSelection",
                        function(l) {
                            l.preventDefault();
                        }
                    );
                },
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection");
                },
            }),
            a.each(["Width", "Height"], function(l, q) {
                function b(A, C, v, K) {
                    a.each(k, function() {
                        C -= parseFloat(a.curCSS(A, "padding" + this, true)) || 0;
                        v &&
                            (C -=
                                parseFloat(a.curCSS(A, "border" + this + "Width", true)) || 0);
                        K && (C -= parseFloat(a.curCSS(A, "margin" + this, true)) || 0);
                    });
                    return C;
                }
                var k = q === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                    e = q.toLowerCase(),
                    p = {
                        innerWidth: a.fn.innerWidth,
                        innerHeight: a.fn.innerHeight,
                        outerWidth: a.fn.outerWidth,
                        outerHeight: a.fn.outerHeight,
                    };
                a.fn["inner" + q] = function(A) {
                    if (A === n) return p["inner" + q].call(this);
                    return this.each(function() {
                        a(this).css(e, b(this, A) + "px");
                    });
                };
                a.fn["outer" + q] = function(A, C) {
                    if (typeof A != "number") return p["outer" + q].call(this, A);
                    return this.each(function() {
                        a(this).css(e, b(this, A, true, C) + "px");
                    });
                };
            }),
            a.extend(a.expr[":"], {
                data: function(l, q, b) {
                    return !!a.data(l, b[3]);
                },
                focusable: function(l) {
                    return c(l, !isNaN(a.attr(l, "tabindex")));
                },
                tabbable: function(l) {
                    var q = a.attr(l, "tabindex"),
                        b = isNaN(q);
                    return (b || q >= 0) && c(l, !b);
                },
            }),
            a(function() {
                var l = document.body,
                    q = l.appendChild((q = document.createElement("div")));
                a.extend(q.style, {
                    minHeight: "100px",
                    height: "auto",
                    padding: 0,
                    borderWidth: 0,
                });
                a.support.minHeight = q.offsetHeight === 100;
                a.support.selectstart = "onselectstart" in q;
                l.removeChild(q).style.display = "none";
            }),
            a.extend(a.ui, {
                plugin: {
                    add: function(l, q, b) {
                        l = a.ui[l].prototype;
                        for (var k in b) {
                            l.plugins[k] = l.plugins[k] || [];
                            l.plugins[k].push([q, b[k]]);
                        }
                    },
                    call: function(l, q, b) {
                        if ((q = l.plugins[q]) && l.element[0].parentNode)
                            for (var k = 0; k < q.length; k++)
                                l.options[q[k][0]] && q[k][1].apply(l.element, b);
                    },
                },
                contains: function(l, q) {
                    return document.compareDocumentPosition ?
                        l.compareDocumentPosition(q) & 16 :
                        l !== q && l.contains(q);
                },
                hasScroll: function(l, q) {
                    if (a(l).css("overflow") === "hidden") return false;
                    var b = q && q === "left" ? "scrollLeft" : "scrollTop",
                        k = false;
                    if (l[b] > 0) return true;
                    l[b] = 1;
                    k = l[b] > 0;
                    l[b] = 0;
                    return k;
                },
                isOverAxis: function(l, q, b) {
                    return l > q && l < q + b;
                },
                isOver: function(l, q, b, k, e, p) {
                    return a.ui.isOverAxis(l, b, e) && a.ui.isOverAxis(q, k, p);
                },
            }));
})(jQuery);
(function(a, n) {
    if (a.cleanData) {
        var d = a.cleanData;
        a.cleanData = function(l) {
            for (var q = 0, b;
                (b = l[q]) != null; q++)
                try {
                    a(b).triggerHandler("remove");
                } catch (k) {}
            d(l);
        };
    } else {
        var c = a.fn.remove;
        a.fn.remove = function(l, q) {
            return this.each(function() {
                q ||
                    ((!l || a.filter(l, [this]).length) &&
                        a("*", this)
                        .add([this])
                        .each(function() {
                            try {
                                a(this).triggerHandler("remove");
                            } catch (b) {}
                        }));
                return c.call(a(this), l, q);
            });
        };
    }
    a.widget = function(l, q, b) {
        var k = l.split(".")[0],
            e;
        l = l.split(".")[1];
        e = k + "-" + l;
        b || ((b = q), (q = a.Widget));
        a.expr[":"][e] = function(p) {
            return !!a.data(p, l);
        };
        a[k] = a[k] || {};
        a[k][l] = function(p, A) {
            arguments.length && this._createWidget(p, A);
        };
        q = new q();
        q.options = a.extend(true, {}, q.options);
        a[k][l].prototype = a.extend(
            true,
            q, {
                namespace: k,
                widgetName: l,
                widgetEventPrefix: a[k][l].prototype.widgetEventPrefix || l,
                widgetBaseClass: e,
            },
            b
        );
        a.widget.bridge(l, a[k][l]);
    };
    a.widget.bridge = function(l, q) {
        a.fn[l] = function(b) {
            var k = typeof b == "string",
                e = Array.prototype.slice.call(arguments, 1),
                p = this;
            b = !k && e.length ? a.extend.apply(null, [true, b].concat(e)) : b;
            if (k && b.charAt(0) === "_") return p;
            k
                ?
                this.each(function() {
                    var A = a.data(this, l),
                        C = A && a.isFunction(A[b]) ? A[b].apply(A, e) : A;
                    if (C !== A && C !== n) {
                        p = C;
                        return false;
                    }
                }) :
                this.each(function() {
                    var A = a.data(this, l);
                    A ? A.option(b || {})._init() : a.data(this, l, new q(b, this));
                });
            return p;
        };
    };
    a.Widget = function(l, q) {
        arguments.length && this._createWidget(l, q);
    };
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: { disabled: false },
        _createWidget: function(l, q) {
            a.data(q, this.widgetName, this);
            this.element = a(q);
            this.options = a.extend(
                true, {},
                this.options,
                this._getCreateOptions(),
                l
            );
            var b = this;
            this.element.bind("remove." + this.widgetName, function() {
                b.destroy();
            });
            this._create();
            this._trigger("create");
            this._init();
        },
        _getCreateOptions: function() {
            return a.metadata && a.metadata.get(this.element[0])[this.widgetName];
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget()
                .unbind("." + this.widgetName)
                .removeAttr("aria-disabled")
                .removeClass(this.widgetBaseClass + "-disabled ui-state-disabled");
        },
        widget: function() {
            return this.element;
        },
        option: function(l, q) {
            var b = l;
            if (arguments.length === 0) return a.extend({}, this.options);
            if (typeof l == "string") {
                if (q === n) return this.options[l];
                b = {};
                b[l] = q;
            }
            this._setOptions(b);
            return this;
        },
        _setOptions: function(l) {
            var q = this;
            a.each(l, function(b, k) {
                q._setOption(b, k);
            });
            return this;
        },
        _setOption: function(l, q) {
            this.options[l] = q;
            l === "disabled" &&
                this.widget()[q ? "addClass" : "removeClass"](
                    this.widgetBaseClass + "-disabled ui-state-disabled"
                )
                .attr("aria-disabled", q);
            return this;
        },
        enable: function() {
            return this._setOption("disabled", false);
        },
        disable: function() {
            return this._setOption("disabled", true);
        },
        _trigger: function(l, q, b) {
            var k,
                e = this.options[l];
            b = b || {};
            q = a.Event(q);
            q.type = (l === this.widgetEventPrefix ?
                l :
                this.widgetEventPrefix + l
            ).toLowerCase();
            q.target = this.element[0];
            if ((l = q.originalEvent))
                for (k in l) k in q || (q[k] = l[k]);
            this.element.trigger(q, b);
            return !(
                (a.isFunction(e) && e.call(this.element[0], q, b) === false) ||
                q.isDefaultPrevented()
            );
        },
    };
})(jQuery);
(function(a) {
    var n = false;
    a(document).mouseup(function() {
        n = false;
    });
    a.widget("ui.mouse", {
        options: { cancel: ":input,option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var d = this;
            this.element
                .bind("mousedown." + this.widgetName, function(c) {
                    return d._mouseDown(c);
                })
                .bind("click." + this.widgetName, function(c) {
                    if (true === a.data(c.target, d.widgetName + ".preventClickEvent")) {
                        a.removeData(c.target, d.widgetName + ".preventClickEvent");
                        c.stopImmediatePropagation();
                        return false;
                    }
                });
            this.started = false;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
        },
        _mouseDown: function(d) {
            if (!n) {
                this._mouseStarted && this._mouseUp(d);
                this._mouseDownEvent = d;
                var c = this,
                    l = d.which == 1,
                    q =
                    typeof this.options.cancel == "string" && d.target.nodeName ?
                    a(d.target).closest(this.options.cancel).length :
                    false;
                if (!l || q || !this._mouseCapture(d)) return true;
                (this.mouseDelayMet = !this.options.delay) ||
                (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = true;
                }, this.options.delay));
                if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
                    this._mouseStarted = this._mouseStart(d) !== false;
                    if (!this._mouseStarted) {
                        d.preventDefault();
                        return true;
                    }
                }
                true === a.data(d.target, this.widgetName + ".preventClickEvent") &&
                    a.removeData(d.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(b) {
                    return c._mouseMove(b);
                };
                this._mouseUpDelegate = function(b) {
                    return c._mouseUp(b);
                };
                a(document)
                    .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                d.preventDefault();
                return (n = true);
            }
        },
        _mouseMove: function(d) {
            if (a.browser.msie && !(document.documentMode >= 9) && !d.button)
                return this._mouseUp(d);
            if (this._mouseStarted) {
                this._mouseDrag(d);
                return d.preventDefault();
            }
            this._mouseDistanceMet(d) &&
                this._mouseDelayMet(d) &&
                ((this._mouseStarted =
                        this._mouseStart(this._mouseDownEvent, d) !== false),
                    this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d));
            return !this._mouseStarted;
        },
        _mouseUp: function(d) {
            a(document)
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted &&
                ((this._mouseStarted = false),
                    d.target == this._mouseDownEvent.target &&
                    a.data(d.target, this.widgetName + ".preventClickEvent", true),
                    this._mouseStop(d));
            return false;
        },
        _mouseDistanceMet: function(d) {
            return (
                Math.max(
                    Math.abs(this._mouseDownEvent.pageX - d.pageX),
                    Math.abs(this._mouseDownEvent.pageY - d.pageY)
                ) >= this.options.distance
            );
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true;
        },
    });
})(jQuery);
(function(a) {
    a.widget("ui.draggable", a.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,
        },
        _create: function() {
            this.options.helper == "original" &&
                !/^(?:r|a|f)/.test(this.element.css("position")) &&
                (this.element[0].style.position = "relative");
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._mouseInit();
        },
        destroy: function() {
            if (this.element.data("draggable")) {
                this.element
                    .removeData("draggable")
                    .unbind(".draggable")
                    .removeClass(
                        "ui-draggable ui-draggable-dragging ui-draggable-disabled"
                    );
                this._mouseDestroy();
                return this;
            }
        },
        _mouseCapture: function(n) {
            var d = this.options;
            if (this.helper || d.disabled || a(n.target).is(".ui-resizable-handle"))
                return false;
            this.handle = this._getHandle(n);
            if (!this.handle) return false;
            d.iframeFix &&
                a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function() {
                    a(
                            '<div class="ui-draggable-iframeFix" style="background: #fff;"></div>'
                        )
                        .css({
                            width: this.offsetWidth + "px",
                            height: this.offsetHeight + "px",
                            position: "absolute",
                            opacity: "0.001",
                            zIndex: 1e3,
                        })
                        .css(a(this).offset())
                        .appendTo("body");
                });
            return true;
        },
        _mouseStart: function(n) {
            var d = this.options;
            this.helper = this._createHelper(n);
            this._cacheHelperProportions();
            a.ui.ddmanager && (a.ui.ddmanager.current = this);
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left,
            };
            a.extend(this.offset, {
                click: {
                    left: n.pageX - this.offset.left,
                    top: n.pageY - this.offset.top,
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset(),
            });
            this.originalPosition = this.position = this._generatePosition(n);
            this.originalPageX = n.pageX;
            this.originalPageY = n.pageY;
            d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt);
            d.containment && this._setContainment();
            if (this._trigger("start", n) === false) {
                this._clear();
                return false;
            }
            this._cacheHelperProportions();
            a.ui.ddmanager &&
                !d.dropBehaviour &&
                a.ui.ddmanager.prepareOffsets(this, n);
            this.helper.addClass("ui-draggable-dragging");
            this._mouseDrag(n, true);
            a.ui.ddmanager && a.ui.ddmanager.dragStart(this, n);
            return true;
        },
        _mouseDrag: function(n, d) {
            this.position = this._generatePosition(n);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!d) {
                var c = this._uiHash();
                if (this._trigger("drag", n, c) === false) {
                    this._mouseUp({});
                    return false;
                }
                this.position = c.position;
            }
            if (!this.options.axis || this.options.axis != "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x")
                this.helper[0].style.top = this.position.top + "px";
            a.ui.ddmanager && a.ui.ddmanager.drag(this, n);
            return false;
        },
        _mouseStop: function(n) {
            var d = false;
            a.ui.ddmanager &&
                !this.options.dropBehaviour &&
                (d = a.ui.ddmanager.drop(this, n));
            this.dropped && ((d = this.dropped), (this.dropped = false));
            if (
                (!this.element[0] || !this.element[0].parentNode) &&
                this.options.helper == "original"
            )
                return false;
            if (
                (this.options.revert == "invalid" && !d) ||
                (this.options.revert == "valid" && d) ||
                this.options.revert === true ||
                (a.isFunction(this.options.revert) &&
                    this.options.revert.call(this.element, d))
            ) {
                var c = this;
                a(this.helper).animate(
                    this.originalPosition,
                    parseInt(this.options.revertDuration, 10),
                    function() {
                        c._trigger("stop", n) !== false && c._clear();
                    }
                );
            } else this._trigger("stop", n) !== false && this._clear();
            return false;
        },
        _mouseUp: function(n) {
            this.options.iframeFix === true &&
                a("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this);
                });
            a.ui.ddmanager && a.ui.ddmanager.dragStop(this, n);
            return a.ui.mouse.prototype._mouseUp.call(this, n);
        },
        cancel: function() {
            this.helper.is(".ui-draggable-dragging") ?
                this._mouseUp({}) :
                this._clear();
            return this;
        },
        _getHandle: function(n) {
            var d = !this.options.handle || !a(this.options.handle, this.element).length ?
                true :
                false;
            a(this.options.handle, this.element)
                .find("*")
                .andSelf()
                .each(function() {
                    this == n.target && (d = true);
                });
            return d;
        },
        _createHelper: function(n) {
            var d = this.options;
            n = a.isFunction(d.helper) ?
                a(d.helper.apply(this.element[0], [n])) :
                d.helper == "clone" ?
                this.element.clone().removeAttr("id") :
                this.element;
            n.parents("body").length ||
                n.appendTo(
                    d.appendTo == "parent" ? this.element[0].parentNode : d.appendTo
                );
            n[0] != this.element[0] &&
                !/(fixed|absolute)/.test(n.css("position")) &&
                n.css("position", "absolute");
            return n;
        },
        _adjustOffsetFromHelper: function(n) {
            typeof n == "string" && (n = n.split(" "));
            a.isArray(n) && (n = { left: +n[0], top: +n[1] || 0 });
            "left" in n && (this.offset.click.left = n.left + this.margins.left);
            "right" in n &&
                (this.offset.click.left =
                    this.helperProportions.width - n.right + this.margins.left);
            "top" in n && (this.offset.click.top = n.top + this.margins.top);
            "bottom" in n &&
                (this.offset.click.top =
                    this.helperProportions.height - n.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var n = this.offsetParent.offset();
            this.cssPosition == "absolute" &&
                this.scrollParent[0] != document &&
                a.ui.contains(this.scrollParent[0], this.offsetParent[0]) &&
                ((n.left += this.scrollParent.scrollLeft()),
                    (n.top += this.scrollParent.scrollTop()));
            if (
                this.offsetParent[0] == document.body ||
                (this.offsetParent[0].tagName &&
                    this.offsetParent[0].tagName.toLowerCase() == "html" &&
                    a.browser.msie)
            )
                n = { top: 0, left: 0 };
            return {
                top: n.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: n.left +
                    (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var n = this.element.position();
                return {
                    top: n.top -
                        (parseInt(this.helper.css("top"), 10) || 0) +
                        this.scrollParent.scrollTop(),
                    left: n.left -
                        (parseInt(this.helper.css("left"), 10) || 0) +
                        this.scrollParent.scrollLeft(),
                };
            }
            return { top: 0, left: 0 };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight(),
            };
        },
        _setContainment: function() {
            var n = this.options;
            n.containment == "parent" && (n.containment = this.helper[0].parentNode);
            if (n.containment == "document" || n.containment == "window")
                this.containment = [
                    n.containment == "document" ?
                    0 :
                    a(window).scrollLeft() -
                    this.offset.relative.left -
                    this.offset.parent.left,
                    n.containment == "document" ?
                    0 :
                    a(window).scrollTop() -
                    this.offset.relative.top -
                    this.offset.parent.top,
                    (n.containment == "document" ? 0 : a(window).scrollLeft()) +
                    a(n.containment == "document" ? document : window).width() -
                    this.helperProportions.width -
                    this.margins.left,
                    (n.containment == "document" ? 0 : a(window).scrollTop()) +
                    (a(n.containment == "document" ? document : window).height() ||
                        document.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ];
            if (!/^(document|window|parent)$/.test(n.containment) &&
                n.containment.constructor != Array
            ) {
                n = a(n.containment);
                var d = n[0];
                if (d) {
                    n.offset();
                    var c = a(d).css("overflow") != "hidden";
                    this.containment = [
                        (parseInt(a(d).css("borderLeftWidth"), 10) || 0) +
                        (parseInt(a(d).css("paddingLeft"), 10) || 0),
                        (parseInt(a(d).css("borderTopWidth"), 10) || 0) +
                        (parseInt(a(d).css("paddingTop"), 10) || 0),
                        (c ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) -
                        (parseInt(a(d).css("borderLeftWidth"), 10) || 0) -
                        (parseInt(a(d).css("paddingRight"), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left -
                        this.margins.right,
                        (c ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) -
                        (parseInt(a(d).css("borderTopWidth"), 10) || 0) -
                        (parseInt(a(d).css("paddingBottom"), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top -
                        this.margins.bottom,
                    ];
                    this.relative_container = n;
                }
            } else
                n.containment.constructor == Array &&
                (this.containment = n.containment);
        },
        _convertPositionTo: function(n, d) {
            d || (d = this.position);
            var c = n == "absolute" ? 1 : -1,
                l =
                this.cssPosition == "absolute" &&
                (this.scrollParent[0] == document ||
                    !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ?
                this.offsetParent :
                this.scrollParent,
                q = /(html|body)/i.test(l[0].tagName);
            return {
                top: d.top +
                    this.offset.relative.top * c +
                    this.offset.parent.top * c -
                    (a.browser.safari &&
                        a.browser.version < 526 &&
                        this.cssPosition == "fixed" ?
                        0 :
                        (this.cssPosition == "fixed" ?
                            -this.scrollParent.scrollTop() :
                            q ?
                            0 :
                            l.scrollTop()) * c),
                left: d.left +
                    this.offset.relative.left * c +
                    this.offset.parent.left * c -
                    (a.browser.safari &&
                        a.browser.version < 526 &&
                        this.cssPosition == "fixed" ?
                        0 :
                        (this.cssPosition == "fixed" ?
                            -this.scrollParent.scrollLeft() :
                            q ?
                            0 :
                            l.scrollLeft()) * c),
            };
        },
        _generatePosition: function(n) {
            var d = this.options,
                c =
                this.cssPosition == "absolute" &&
                (this.scrollParent[0] == document ||
                    !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ?
                this.offsetParent :
                this.scrollParent,
                l = /(html|body)/i.test(c[0].tagName),
                q = n.pageX,
                b = n.pageY;
            if (this.originalPosition) {
                var k;
                if (this.containment) {
                    if (this.relative_container) {
                        k = this.relative_container.offset();
                        k = [
                            this.containment[0] + k.left,
                            this.containment[1] + k.top,
                            this.containment[2] + k.left,
                            this.containment[3] + k.top,
                        ];
                    } else k = this.containment;
                    n.pageX - this.offset.click.left < k[0] &&
                        (q = k[0] + this.offset.click.left);
                    n.pageY - this.offset.click.top < k[1] &&
                        (b = k[1] + this.offset.click.top);
                    n.pageX - this.offset.click.left > k[2] &&
                        (q = k[2] + this.offset.click.left);
                    n.pageY - this.offset.click.top > k[3] &&
                        (b = k[3] + this.offset.click.top);
                }
                if (d.grid) {
                    b = d.grid[1] ?
                        this.originalPageY +
                        Math.round((b - this.originalPageY) / d.grid[1]) * d.grid[1] :
                        this.originalPageY;
                    b = k ?
                        b - this.offset.click.top < k[1] ||
                        b - this.offset.click.top > k[3] ?
                        b - this.offset.click.top < k[1] ?
                        b + d.grid[1] :
                        b - d.grid[1] :
                        b :
                        b;
                    q = d.grid[0] ?
                        this.originalPageX +
                        Math.round((q - this.originalPageX) / d.grid[0]) * d.grid[0] :
                        this.originalPageX;
                    q = k ?
                        q - this.offset.click.left < k[0] ||
                        q - this.offset.click.left > k[2] ?
                        q - this.offset.click.left < k[0] ?
                        q + d.grid[0] :
                        q - d.grid[0] :
                        q :
                        q;
                }
            }
            return {
                top: b -
                    this.offset.click.top -
                    this.offset.relative.top -
                    this.offset.parent.top +
                    (a.browser.safari &&
                        a.browser.version < 526 &&
                        this.cssPosition == "fixed" ?
                        0 :
                        this.cssPosition == "fixed" ?
                        -this.scrollParent.scrollTop() :
                        l ?
                        0 :
                        c.scrollTop()),
                left: q -
                    this.offset.click.left -
                    this.offset.relative.left -
                    this.offset.parent.left +
                    (a.browser.safari &&
                        a.browser.version < 526 &&
                        this.cssPosition == "fixed" ?
                        0 :
                        this.cssPosition == "fixed" ?
                        -this.scrollParent.scrollLeft() :
                        l ?
                        0 :
                        c.scrollLeft()),
            };
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] != this.element[0] &&
                !this.cancelHelperRemoval &&
                this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = false;
        },
        _trigger: function(n, d, c) {
            c = c || this._uiHash();
            a.ui.plugin.call(this, n, [d, c]);
            n == "drag" && (this.positionAbs = this._convertPositionTo("absolute"));
            return a.Widget.prototype._trigger.call(this, n, d, c);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs,
            };
        },
    });
    a.extend(a.ui.draggable, { version: "1.8.17" });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(n, d) {
            var c = a(this).data("draggable"),
                l = c.options,
                q = a.extend({}, d, { item: c.element });
            c.sortables = [];
            a(l.connectToSortable).each(function() {
                var b = a.data(this, "sortable");
                b &&
                    !b.options.disabled &&
                    (c.sortables.push({ instance: b, shouldRevert: b.options.revert }),
                        b.refreshPositions(),
                        b._trigger("activate", n, q));
            });
        },
        stop: function(n, d) {
            var c = a(this).data("draggable"),
                l = a.extend({}, d, { item: c.element });
            a.each(c.sortables, function() {
                this.instance.isOver ?
                    ((this.instance.isOver = 0),
                        (c.cancelHelperRemoval = true),
                        (this.instance.cancelHelperRemoval = false),
                        this.shouldRevert && (this.instance.options.revert = true),
                        this.instance._mouseStop(n),
                        (this.instance.options.helper = this.instance.options._helper),
                        c.options.helper == "original" &&
                        this.instance.currentItem.css({ top: "auto", left: "auto" })) :
                    ((this.instance.cancelHelperRemoval = false),
                        this.instance._trigger("deactivate", n, l));
            });
        },
        drag: function(n, d) {
            var c = a(this).data("draggable"),
                l = this;
            a.each(c.sortables, function() {
                this.instance.positionAbs = c.positionAbs;
                this.instance.helperProportions = c.helperProportions;
                this.instance.offset.click = c.offset.click;
                this.instance._intersectsWith(this.instance.containerCache) ?
                    (this.instance.isOver ||
                        ((this.instance.isOver = 1),
                            (this.instance.currentItem = a(l)
                                .clone()
                                .removeAttr("id")
                                .appendTo(this.instance.element)
                                .data("sortable-item", true)),
                            (this.instance.options._helper = this.instance.options.helper),
                            (this.instance.options.helper = function() {
                                return d.helper[0];
                            }),
                            (n.target = this.instance.currentItem[0]),
                            this.instance._mouseCapture(n, true),
                            this.instance._mouseStart(n, true, true),
                            (this.instance.offset.click.top = c.offset.click.top),
                            (this.instance.offset.click.left = c.offset.click.left),
                            (this.instance.offset.parent.left -=
                                c.offset.parent.left - this.instance.offset.parent.left),
                            (this.instance.offset.parent.top -=
                                c.offset.parent.top - this.instance.offset.parent.top),
                            c._trigger("toSortable", n),
                            (c.dropped = this.instance.element),
                            (c.currentItem = c.element),
                            (this.instance.fromOutside = c)),
                        this.instance.currentItem && this.instance._mouseDrag(n)) :
                    this.instance.isOver &&
                    ((this.instance.isOver = 0),
                        (this.instance.cancelHelperRemoval = true),
                        (this.instance.options.revert = false),
                        this.instance._trigger(
                            "out",
                            n,
                            this.instance._uiHash(this.instance)
                        ),
                        this.instance._mouseStop(n, true),
                        (this.instance.options.helper = this.instance.options._helper),
                        this.instance.currentItem.remove(),
                        this.instance.placeholder && this.instance.placeholder.remove(),
                        c._trigger("fromSortable", n),
                        (c.dropped = false));
            });
        },
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var n = a("body"),
                d = a(this).data("draggable").options;
            n.css("cursor") && (d._cursor = n.css("cursor"));
            n.css("cursor", d.cursor);
        },
        stop: function() {
            var n = a(this).data("draggable").options;
            n._cursor && a("body").css("cursor", n._cursor);
        },
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(n, d) {
            var c = a(d.helper),
                l = a(this).data("draggable").options;
            c.css("opacity") && (l._opacity = c.css("opacity"));
            c.css("opacity", l.opacity);
        },
        stop: function(n, d) {
            var c = a(this).data("draggable").options;
            c._opacity && a(d.helper).css("opacity", c._opacity);
        },
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var n = a(this).data("draggable");
            n.scrollParent[0] != document &&
                n.scrollParent[0].tagName != "HTML" &&
                (n.overflowOffset = n.scrollParent.offset());
        },
        drag: function(n) {
            var d = a(this).data("draggable"),
                c = d.options,
                l = false;
            if (
                d.scrollParent[0] != document &&
                d.scrollParent[0].tagName != "HTML"
            ) {
                if (!c.axis || c.axis != "x")
                    d.overflowOffset.top + d.scrollParent[0].offsetHeight - n.pageY <
                    c.scrollSensitivity ?
                    (d.scrollParent[0].scrollTop = l =
                        d.scrollParent[0].scrollTop + c.scrollSpeed) :
                    n.pageY - d.overflowOffset.top < c.scrollSensitivity &&
                    (d.scrollParent[0].scrollTop = l =
                        d.scrollParent[0].scrollTop - c.scrollSpeed);
                if (!c.axis || c.axis != "y")
                    d.overflowOffset.left + d.scrollParent[0].offsetWidth - n.pageX <
                    c.scrollSensitivity ?
                    (d.scrollParent[0].scrollLeft = l =
                        d.scrollParent[0].scrollLeft + c.scrollSpeed) :
                    n.pageX - d.overflowOffset.left < c.scrollSensitivity &&
                    (d.scrollParent[0].scrollLeft = l =
                        d.scrollParent[0].scrollLeft - c.scrollSpeed);
            } else {
                if (!c.axis || c.axis != "x")
                    n.pageY - a(document).scrollTop() < c.scrollSensitivity ?
                    (l = a(document).scrollTop(
                        a(document).scrollTop() - c.scrollSpeed
                    )) :
                    a(window).height() - (n.pageY - a(document).scrollTop()) <
                    c.scrollSensitivity &&
                    (l = a(document).scrollTop(
                        a(document).scrollTop() + c.scrollSpeed
                    ));
                if (!c.axis || c.axis != "y")
                    n.pageX - a(document).scrollLeft() < c.scrollSensitivity ?
                    (l = a(document).scrollLeft(
                        a(document).scrollLeft() - c.scrollSpeed
                    )) :
                    a(window).width() - (n.pageX - a(document).scrollLeft()) <
                    c.scrollSensitivity &&
                    (l = a(document).scrollLeft(
                        a(document).scrollLeft() + c.scrollSpeed
                    ));
            }
            l !== false &&
                a.ui.ddmanager &&
                !c.dropBehaviour &&
                a.ui.ddmanager.prepareOffsets(d, n);
        },
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var n = a(this).data("draggable"),
                d = n.options;
            n.snapElements = [];
            a(
                d.snap.constructor != String ?
                d.snap.items || ":data(draggable)" :
                d.snap
            ).each(function() {
                var c = a(this),
                    l = c.offset();
                this != n.element[0] &&
                    n.snapElements.push({
                        item: this,
                        width: c.outerWidth(),
                        height: c.outerHeight(),
                        top: l.top,
                        left: l.left,
                    });
            });
        },
        drag: function(n, d) {
            for (
                var c = a(this).data("draggable"),
                    l = c.options,
                    q = l.snapTolerance,
                    b = d.offset.left,
                    k = b + c.helperProportions.width,
                    e = d.offset.top,
                    p = e + c.helperProportions.height,
                    A = c.snapElements.length - 1; A >= 0; A--
            ) {
                var C = c.snapElements[A].left,
                    v = C + c.snapElements[A].width,
                    K = c.snapElements[A].top,
                    O = K + c.snapElements[A].height;
                if (
                    (C - q < b && b < v + q && K - q < e && e < O + q) ||
                    (C - q < b && b < v + q && K - q < p && p < O + q) ||
                    (C - q < k && k < v + q && K - q < e && e < O + q) ||
                    (C - q < k && k < v + q && K - q < p && p < O + q)
                ) {
                    if (l.snapMode != "inner") {
                        var L = Math.abs(K - p) <= q,
                            H = Math.abs(O - e) <= q,
                            V = Math.abs(C - k) <= q,
                            R = Math.abs(v - b) <= q;
                        L &&
                            (d.position.top =
                                c._convertPositionTo("relative", {
                                    top: K - c.helperProportions.height,
                                    left: 0,
                                }).top - c.margins.top);
                        H &&
                            (d.position.top =
                                c._convertPositionTo("relative", { top: O, left: 0 }).top -
                                c.margins.top);
                        V &&
                            (d.position.left =
                                c._convertPositionTo("relative", {
                                    top: 0,
                                    left: C - c.helperProportions.width,
                                }).left - c.margins.left);
                        R &&
                            (d.position.left =
                                c._convertPositionTo("relative", { top: 0, left: v }).left -
                                c.margins.left);
                    }
                    var N = L || H || V || R;
                    if (l.snapMode != "outer") {
                        L = Math.abs(K - e) <= q;
                        H = Math.abs(O - p) <= q;
                        V = Math.abs(C - b) <= q;
                        R = Math.abs(v - k) <= q;
                        L &&
                            (d.position.top =
                                c._convertPositionTo("relative", { top: K, left: 0 }).top -
                                c.margins.top);
                        H &&
                            (d.position.top =
                                c._convertPositionTo("relative", {
                                    top: O - c.helperProportions.height,
                                    left: 0,
                                }).top - c.margins.top);
                        V &&
                            (d.position.left =
                                c._convertPositionTo("relative", { top: 0, left: C }).left -
                                c.margins.left);
                        R &&
                            (d.position.left =
                                c._convertPositionTo("relative", {
                                    top: 0,
                                    left: v - c.helperProportions.width,
                                }).left - c.margins.left);
                    }!c.snapElements[A].snapping &&
                        (L || H || V || R || N) &&
                        c.options.snap.snap &&
                        c.options.snap.snap.call(
                            c.element,
                            n,
                            a.extend(c._uiHash(), { snapItem: c.snapElements[A].item })
                        );
                    c.snapElements[A].snapping = L || H || V || R || N;
                } else {
                    c.snapElements[A].snapping &&
                        c.options.snap.release &&
                        c.options.snap.release.call(
                            c.element,
                            n,
                            a.extend(c._uiHash(), { snapItem: c.snapElements[A].item })
                        );
                    c.snapElements[A].snapping = false;
                }
            }
        },
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var n = a(this).data("draggable").options;
            n = a.makeArray(a(n.stack)).sort(function(c, l) {
                return (
                    (parseInt(a(c).css("zIndex"), 10) || 0) -
                    (parseInt(a(l).css("zIndex"), 10) || 0)
                );
            });
            if (n.length) {
                var d = parseInt(n[0].style.zIndex) || 0;
                a(n).each(function(c) {
                    this.style.zIndex = d + c;
                });
                this[0].style.zIndex = d + n.length;
            }
        },
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(n, d) {
            var c = a(d.helper),
                l = a(this).data("draggable").options;
            c.css("zIndex") && (l._zIndex = c.css("zIndex"));
            c.css("zIndex", l.zIndex);
        },
        stop: function(n, d) {
            var c = a(this).data("draggable").options;
            c._zIndex && a(d.helper).css("zIndex", c._zIndex);
        },
    });
})(jQuery);
(function(a) {
    a.widget("ui.slider", a.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,
        },
        _create: function() {
            var n = this,
                d = this.options,
                c = this.element
                .find(".ui-slider-handle")
                .addClass("ui-state-default ui-corner-all"),
                l = (d.values && d.values.length) || 1,
                q = [];
            this._mouseSliding = this._keySliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass(
                "ui-slider ui-slider-" +
                this.orientation +
                " ui-widget ui-widget-content ui-corner-all" +
                (d.disabled ? " ui-slider-disabled ui-disabled" : "")
            );
            this.range = a([]);
            d.range &&
                (d.range === true &&
                    (d.values || (d.values = [this._valueMin(), this._valueMin()]),
                        d.values.length &&
                        d.values.length !== 2 &&
                        (d.values = [d.values[0], d.values[0]])),
                    (this.range = a("<div></div>")
                        .appendTo(this.element)
                        .addClass(
                            "ui-slider-range ui-widget-header" +
                            (d.range === "min" || d.range === "max" ?
                                " ui-slider-range-" + d.range :
                                "")
                        )));
            for (var b = c.length; b < l; b += 1)
                q.push(
                    "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>"
                );
            this.handles = c.add(a(q.join("")).appendTo(n.element));
            this.handle = this.handles.eq(0);
            this.handles
                .add(this.range)
                .filter("a")
                .click(function(k) {
                    k.preventDefault();
                })
                .hover(
                    function() {
                        d.disabled || a(this).addClass("ui-state-hover");
                    },
                    function() {
                        a(this).removeClass("ui-state-hover");
                    }
                )
                .focus(function() {
                    d.disabled ?
                        a(this).blur() :
                        (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),
                            a(this).addClass("ui-state-focus"));
                })
                .blur(function() {
                    a(this).removeClass("ui-state-focus");
                });
            this.handles.each(function(k) {
                a(this).data("index.ui-slider-handle", k);
            });
            this.handles
                .keydown(function(k) {
                    var e = true,
                        p = a(this).data("index.ui-slider-handle"),
                        A,
                        C,
                        v;
                    if (!n.options.disabled) {
                        switch (k.keyCode) {
                            case a.ui.keyCode.HOME:
                            case a.ui.keyCode.END:
                            case a.ui.keyCode.PAGE_UP:
                            case a.ui.keyCode.PAGE_DOWN:
                            case a.ui.keyCode.UP:
                            case a.ui.keyCode.RIGHT:
                            case a.ui.keyCode.DOWN:
                            case a.ui.keyCode.LEFT:
                                e = false;
                                if (!n._keySliding) {
                                    n._keySliding = true;
                                    a(this).addClass("ui-state-active");
                                    A = n._start(k, p);
                                    if (A === false) return;
                                }
                        }
                        A = n.options.step;
                        n.options.values && n.options.values.length ?
                            (C = v = n.values(p)) :
                            (C = v = n.value());
                        switch (k.keyCode) {
                            case a.ui.keyCode.HOME:
                                v = n._valueMin();
                                break;
                            case a.ui.keyCode.END:
                                v = n._valueMax();
                                break;
                            case a.ui.keyCode.PAGE_UP:
                                v = n._trimAlignValue(C + (n._valueMax() - n._valueMin()) / 5);
                                break;
                            case a.ui.keyCode.PAGE_DOWN:
                                v = n._trimAlignValue(C - (n._valueMax() - n._valueMin()) / 5);
                                break;
                            case a.ui.keyCode.UP:
                            case a.ui.keyCode.RIGHT:
                                if (C === n._valueMax()) return;
                                v = n._trimAlignValue(C + A);
                                break;
                            case a.ui.keyCode.DOWN:
                            case a.ui.keyCode.LEFT:
                                if (C === n._valueMin()) return;
                                v = n._trimAlignValue(C - A);
                        }
                        n._slide(k, p, v);
                        return e;
                    }
                })
                .keyup(function(k) {
                    var e = a(this).data("index.ui-slider-handle");
                    n._keySliding &&
                        ((n._keySliding = false),
                            n._stop(k, e),
                            n._change(k, e),
                            a(this).removeClass("ui-state-active"));
                });
            this._refreshValue();
            this._animateOff = false;
        },
        destroy: function() {
            this.handles.remove();
            this.range.remove();
            this.element
                .removeClass(
                    "ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"
                )
                .removeData("slider")
                .unbind(".slider");
            this._mouseDestroy();
            return this;
        },
        _mouseCapture: function(n) {
            var d = this.options,
                c,
                l,
                q,
                b,
                k;
            if (d.disabled) return false;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
            };
            this.elementOffset = this.element.offset();
            c = this._normValueFromMouse({ x: n.pageX, y: n.pageY });
            l = this._valueMax() - this._valueMin() + 1;
            b = this;
            this.handles.each(function(e) {
                var p = Math.abs(c - b.values(e));
                l > p && ((l = p), (q = a(this)), (k = e));
            });
            d.range === true &&
                this.values(1) === d.min &&
                ((k += 1), (q = a(this.handles[k])));
            if (this._start(n, k) === false) return false;
            this._mouseSliding = true;
            b._handleIndex = k;
            q.addClass("ui-state-active").focus();
            d = q.offset();
            this._clickOffset = !a(n.target)
                .parents()
                .andSelf()
                .is(".ui-slider-handle") ? { left: 0, top: 0 } : {
                    left: n.pageX - d.left - q.width() / 2,
                    top: n.pageY -
                        d.top -
                        q.height() / 2 -
                        (parseInt(q.css("borderTopWidth"), 10) || 0) -
                        (parseInt(q.css("borderBottomWidth"), 10) || 0) +
                        (parseInt(q.css("marginTop"), 10) || 0),
                };
            this.handles.hasClass("ui-state-hover") || this._slide(n, k, c);
            return (this._animateOff = true);
        },
        _mouseStart: function() {
            return true;
        },
        _mouseDrag: function(n) {
            var d = this._normValueFromMouse({ x: n.pageX, y: n.pageY });
            this._slide(n, this._handleIndex, d);
            return false;
        },
        _mouseStop: function(n) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(n, this._handleIndex);
            this._change(n, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return (this._animateOff = false);
        },
        _detectOrientation: function() {
            this.orientation =
                this.options.orientation === "vertical" ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(n) {
            var d, c;
            this.orientation === "horizontal" ?
                ((d = this.elementSize.width),
                    (c =
                        n.x -
                        this.elementOffset.left -
                        (this._clickOffset ? this._clickOffset.left : 0))) :
                ((d = this.elementSize.height),
                    (c =
                        n.y -
                        this.elementOffset.top -
                        (this._clickOffset ? this._clickOffset.top : 0)));
            n = c / d;
            n > 1 && (n = 1);
            n < 0 && (n = 0);
            this.orientation === "vertical" && (n = 1 - n);
            d = this._valueMax() - this._valueMin();
            return this._trimAlignValue(this._valueMin() + n * d);
        },
        _start: function(n, d) {
            var c = { handle: this.handles[d], value: this.value() };
            this.options.values &&
                this.options.values.length &&
                ((c.value = this.values(d)), (c.values = this.values()));
            return this._trigger("start", n, c);
        },
        _slide: function(n, d, c) {
            var l, q, b;
            this.options.values && this.options.values.length ?
                ((l = this.values(d ? 0 : 1)),
                    this.options.values.length === 2 &&
                    this.options.range === true &&
                    ((d === 0 && c > l) || (d === 1 && c < l)) &&
                    (c = l),
                    c !== this.values(d) &&
                    ((q = this.values()),
                        (q[d] = c),
                        (b = this._trigger("slide", n, {
                            handle: this.handles[d],
                            value: c,
                            values: q,
                        })),
                        this.values(d ? 0 : 1),
                        b !== false && this.values(d, c, true))) :
                c !== this.value() &&
                ((b = this._trigger("slide", n, {
                        handle: this.handles[d],
                        value: c,
                    })),
                    b !== false && this.value(c));
        },
        _stop: function(n, d) {
            var c = { handle: this.handles[d], value: this.value() };
            this.options.values &&
                this.options.values.length &&
                ((c.value = this.values(d)), (c.values = this.values()));
            this._trigger("stop", n, c);
        },
        _change: function(n, d) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = { handle: this.handles[d], value: this.value() };
                this.options.values &&
                    this.options.values.length &&
                    ((c.value = this.values(d)), (c.values = this.values()));
                this._trigger("change", n, c);
            }
        },
        value: function(n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n);
                this._refreshValue();
                this._change(null, 0);
            } else return this._value();
        },
        values: function(n, d) {
            var c, l, q;
            if (arguments.length > 1) {
                this.options.values[n] = this._trimAlignValue(d);
                this._refreshValue();
                this._change(null, n);
            } else {
                if (!arguments.length) return this._values();
                if (!a.isArray(arguments[0]))
                    return this.options.values && this.options.values.length ?
                        this._values(n) :
                        this.value();
                c = this.options.values;
                l = arguments[0];
                for (q = 0; q < c.length; q += 1) {
                    c[q] = this._trimAlignValue(l[q]);
                    this._change(null, q);
                }
                this._refreshValue();
            }
        },
        _setOption: function(n, d) {
            var c,
                l = 0;
            a.isArray(this.options.values) && (l = this.options.values.length);
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (n) {
                case "disabled":
                    d
                        ?
                        (this.handles.filter(".ui-state-focus").blur(),
                            this.handles.removeClass("ui-state-hover"),
                            this.handles.propAttr("disabled", true),
                            this.element.addClass("ui-disabled")) :
                        (this.handles.propAttr("disabled", false),
                            this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation();
                    this.element
                        .removeClass("ui-slider-horizontal ui-slider-vertical")
                        .addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for (c = 0; c < l; c += 1) this._change(null, c);
                    this._animateOff = false;
            }
        },
        _value: function() {
            var n = this.options.value;
            return (n = this._trimAlignValue(n));
        },
        _values: function(n) {
            var d, c;
            if (arguments.length) {
                d = this.options.values[n];
                return (d = this._trimAlignValue(d));
            }
            d = this.options.values.slice();
            for (c = 0; c < d.length; c += 1) d[c] = this._trimAlignValue(d[c]);
            return d;
        },
        _trimAlignValue: function(n) {
            if (n <= this._valueMin()) return this._valueMin();
            if (n >= this._valueMax()) return this._valueMax();
            var d = this.options.step > 0 ? this.options.step : 1,
                c = (n - this._valueMin()) % d;
            n = n - c;
            Math.abs(c) * 2 >= d && (n += c > 0 ? d : -d);
            return parseFloat(n.toFixed(5));
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.options.max;
        },
        _refreshValue: function() {
            var n = this.options.range,
                d = this.options,
                c = this,
                l = this._animateOff ? false : d.animate,
                q,
                b = {},
                k,
                e,
                p,
                A;
            this.options.values && this.options.values.length ?
                this.handles.each(function(C) {
                    q =
                        ((c.values(C) - c._valueMin()) /
                            (c._valueMax() - c._valueMin())) *
                        100;
                    b[c.orientation === "horizontal" ? "left" : "bottom"] = q + "%";
                    a(this).stop(1, 1)[l ? "animate" : "css"](b, d.animate);
                    c.options.range === true &&
                        (c.orientation === "horizontal" ?
                            (C === 0 &&
                                c.range
                                .stop(1, 1)[l ? "animate" : "css"]({ left: q + "%" }, d.animate),
                                C === 1 &&
                                c.range[l ? "animate" : "css"]({ width: q - k + "%" }, { queue: false, duration: d.animate })) :
                            (C === 0 &&
                                c.range
                                .stop(1, 1)[l ? "animate" : "css"]({ bottom: q + "%" }, d.animate),
                                C === 1 &&
                                c.range[l ? "animate" : "css"]({ height: q - k + "%" }, { queue: false, duration: d.animate })));
                    k = q;
                }) :
                ((e = this.value()),
                    (p = this._valueMin()),
                    (A = this._valueMax()),
                    (q = A !== p ? ((e - p) / (A - p)) * 100 : 0),
                    (b[c.orientation === "horizontal" ? "left" : "bottom"] = q + "%"),
                    this.handle.stop(1, 1)[l ? "animate" : "css"](b, d.animate),
                    n === "min" &&
                    this.orientation === "horizontal" &&
                    this.range
                    .stop(1, 1)[l ? "animate" : "css"]({ width: q + "%" }, d.animate),
                    n === "max" &&
                    this.orientation === "horizontal" &&
                    this.range[l ? "animate" : "css"]({ width: 100 - q + "%" }, { queue: false, duration: d.animate }),
                    n === "min" &&
                    this.orientation === "vertical" &&
                    this.range
                    .stop(1, 1)[l ? "animate" : "css"]({ height: q + "%" }, d.animate),
                    n === "max" &&
                    this.orientation === "vertical" &&
                    this.range[l ? "animate" : "css"]({ height: 100 - q + "%" }, { queue: false, duration: d.animate }));
        },
    });
    a.extend(a.ui.slider, { version: "1.8.17" });
})(jQuery);
(function(a) {
    Math.precision = function(b, k) {
        if (k === undefined) k = 0;
        return Math.round(b * Math.pow(10, k)) / Math.pow(10, k);
    };
    var n = function(b, k) {
            var e = this,
                p = b.find("img:first"),
                A = 0,
                C = 100,
                v = 100,
                K = 0,
                O = 100,
                L = 100,
                H = 0,
                V = 0,
                R,
                N,
                ca = [],
                ma = function(aa) {
                    for (var da = 0; da < ca.length; da++) ca[da].call(e, e, aa);
                },
                Z = function(aa) {
                    var da = b.offset();
                    R = { l: da.left | 0, t: da.top | 0 };
                    clearTimeout(N);
                    N = setTimeout(function() {
                        ua.call(e, aa);
                    }, 0);
                    a(document).bind("mousemove", U).bind("mouseup", fa);
                    aa.preventDefault();
                },
                U = function(aa) {
                    clearTimeout(N);
                    N = setTimeout(function() {
                        ua.call(e, aa);
                    }, 0);
                    aa.stopPropagation();
                    aa.preventDefault();
                    return false;
                },
                fa = function(aa) {
                    a(document).unbind("mouseup", fa).unbind("mousemove", U);
                    aa.stopPropagation();
                    aa.preventDefault();
                    return false;
                },
                ua = function(aa) {
                    var da = aa.pageX - R.l;
                    aa = aa.pageY - R.t;
                    var qa = b.w,
                        pa = b.h;
                    if (da < 0) da = 0;
                    else if (da > qa) da = qa;
                    if (aa < 0) aa = 0;
                    else if (aa > pa) aa = pa;
                    ja.call(e, "xy", { x: (da / qa) * v + A, y: (aa / pa) * L + K });
                },
                ja = function(aa, da, qa) {
                    if (da === undefined) {
                        if (aa === undefined || aa == null) aa = "xy";
                        switch (aa.toLowerCase()) {
                            case "x":
                                return H;
                            case "y":
                                return V;
                            default:
                                return { x: H, y: V };
                        }
                    }
                    if (!(qa != null && qa == e)) {
                        var pa = false,
                            na,
                            oa;
                        if (aa == null) aa = "xy";
                        switch (aa.toLowerCase()) {
                            case "x":
                                na = (da && ((da.x && da.x | 0) || da | 0)) || 0;
                                break;
                            case "y":
                                oa = (da && ((da.y && da.y | 0) || da | 0)) || 0;
                                break;
                            default:
                                na = (da && da.x && da.x | 0) || 0;
                                oa = (da && da.y && da.y | 0) || 0;
                        }
                        if (na != null) {
                            if (na < A) na = A;
                            else if (na > C) na = C;
                            if (H != na) {
                                H = na;
                                pa = true;
                            }
                        }
                        if (oa != null) {
                            if (oa < K) oa = K;
                            else if (oa > O) oa = O;
                            if (V != oa) {
                                V = oa;
                                pa = true;
                            }
                        }
                        pa && ma.call(e, qa || e);
                    }
                },
                ka = function(aa) {
                    a.isFunction(aa) && ca.push(aa);
                };
            a.extend(true, e, {
                val: ja,
                range: function(aa, da) {
                    if (da === undefined) {
                        if (aa === undefined || aa == null) aa = "all";
                        switch (aa.toLowerCase()) {
                            case "minx":
                                return A;
                            case "maxx":
                                return C;
                            case "rangex":
                                return { minX: A, maxX: C, rangeX: v };
                            case "miny":
                                return K;
                            case "maxy":
                                return O;
                            case "rangey":
                                return { minY: K, maxY: O, rangeY: L };
                            default:
                                return {
                                    minX: A,
                                    maxX: C,
                                    rangeX: v,
                                    minY: K,
                                    maxY: O,
                                    rangeY: L,
                                };
                        }
                    }
                    var qa, pa, na, oa;
                    if (aa == null) aa = "all";
                    switch (aa.toLowerCase()) {
                        case "minx":
                            qa = (da && ((da.minX && da.minX | 0) || da | 0)) || 0;
                            break;
                        case "maxx":
                            pa = (da && ((da.maxX && da.maxX | 0) || da | 0)) || 0;
                            break;
                        case "rangex":
                            qa = (da && da.minX && da.minX | 0) || 0;
                            pa = (da && da.maxX && da.maxX | 0) || 0;
                            break;
                        case "miny":
                            na = (da && ((da.minY && da.minY | 0) || da | 0)) || 0;
                            break;
                        case "maxy":
                            oa = (da && ((da.maxY && da.maxY | 0) || da | 0)) || 0;
                            break;
                        case "rangey":
                            na = (da && da.minY && da.minY | 0) || 0;
                            oa = (da && da.maxY && da.maxY | 0) || 0;
                            break;
                        default:
                            qa = (da && da.minX && da.minX | 0) || 0;
                            pa = (da && da.maxX && da.maxX | 0) || 0;
                            na = (da && da.minY && da.minY | 0) || 0;
                            oa = (da && da.maxY && da.maxY | 0) || 0;
                    }
                    if (qa != null && A != qa) {
                        A = qa;
                        v = C - A;
                    }
                    if (pa != null && C != pa) {
                        C = pa;
                        v = C - A;
                    }
                    if (na != null && K != na) {
                        K = na;
                        L = O - K;
                    }
                    if (oa != null && O != oa) {
                        O = oa;
                        L = O - K;
                    }
                },
                bind: ka,
                unbind: function(aa) {
                    if (a.isFunction(aa))
                        for (var da;
                            (da = a.inArray(aa, ca)) != -1;) ca.splice(da, 1);
                },
                destroy: function() {
                    a(document).unbind("mouseup", fa).unbind("mousemove", U);
                    b.unbind("mousedown", Z);
                    ca = p = b = null;
                },
            });
            p.src = k.arrow && k.arrow.image;
            p.w = (k.arrow && k.arrow.width) || p.width();
            p.h = (k.arrow && k.arrow.height) || p.height();
            b.w = (k.map && k.map.width) || b.width();
            b.h = (k.map && k.map.height) || b.height();
            b.bind("mousedown", Z);
            ka.call(e, function() {
                var aa = 0,
                    da = 0,
                    qa = b.w,
                    pa = b.h,
                    na = p.w,
                    oa = p.h;
                setTimeout(function() {
                    if (v > 0) aa = H == C ? qa : ((H / v) * qa) | 0;
                    if (L > 0) da = V == O ? pa : ((V / L) * pa) | 0;
                    if (na >= qa) aa = (qa >> 1) - (na >> 1);
                    else aa -= na >> 1;
                    if (oa >= pa) da = (pa >> 1) - (oa >> 1);
                    else da -= oa >> 1;
                    p.css({ left: aa + "px", top: da + "px" });
                }, 0);
            });
        },
        d = function(b, k, e, p) {
            var A = this;
            b = b.find("td.Text input");
            var C = b.eq(3),
                v = b.eq(4),
                K = b.eq(5),
                O = b.length > 7 ? b.eq(6) : null,
                L = b.eq(0),
                H = b.eq(1),
                V = b.eq(2),
                R = b.eq(b.length > 7 ? 7 : 6),
                N = b.length > 7 ? b.eq(8) : null,
                ca = function(ja) {
                    if (!(
                            ja.target.value == "" &&
                            ja.target != R.get(0) &&
                            ((e != null && ja.target != e.get(0)) || e == null)
                        )) {
                        if (!U(ja)) return ja;
                        switch (ja.target) {
                            case C.get(0):
                                switch (ja.keyCode) {
                                    case 38:
                                        C.val(fa.call(A, (C.val() << 0) + 1, 0, 255));
                                        k.val("r", C.val(), ja.target);
                                        return false;
                                    case 40:
                                        C.val(fa.call(A, (C.val() << 0) - 1, 0, 255));
                                        k.val("r", C.val(), ja.target);
                                        return false;
                                }
                                break;
                            case v.get(0):
                                switch (ja.keyCode) {
                                    case 38:
                                        v.val(fa.call(A, (v.val() << 0) + 1, 0, 255));
                                        k.val("g", v.val(), ja.target);
                                        return false;
                                    case 40:
                                        v.val(fa.call(A, (v.val() << 0) - 1, 0, 255));
                                        k.val("g", v.val(), ja.target);
                                        return false;
                                }
                                break;
                            case K.get(0):
                                switch (ja.keyCode) {
                                    case 38:
                                        K.val(fa.call(A, (K.val() << 0) + 1, 0, 255));
                                        k.val("b", K.val(), ja.target);
                                        return false;
                                    case 40:
                                        K.val(fa.call(A, (K.val() << 0) - 1, 0, 255));
                                        k.val("b", K.val(), ja.target);
                                        return false;
                                }
                                break;
                            case O && O.get(0):
                                switch (ja.keyCode) {
                                    case 38:
                                        O.val(fa.call(A, parseFloat(O.val()) + 1, 0, 100));
                                        k.val(
                                            "a",
                                            Math.precision((O.val() * 255) / 100, p),
                                            ja.target
                                        );
                                        return false;
                                    case 40:
                                        O.val(fa.call(A, parseFloat(O.val()) - 1, 0, 100));
                                        k.val(
                                            "a",
                                            Math.precision((O.val() * 255) / 100, p),
                                            ja.target
                                        );
                                        return false;
                                }
                                break;
                            case L.get(0):
                                switch (ja.keyCode) {
                                    case 38:
                                        L.val(fa.call(A, (L.val() << 0) + 1, 0, 360));
                                        k.val("h", L.val(), ja.target);
                                        return false;
                                    case 40:
                                        L.val(fa.call(A, (L.val() << 0) - 1, 0, 360));
                                        k.val("h", L.val(), ja.target);
                                        return false;
                                }
                                break;
                            case H.get(0):
                                switch (ja.keyCode) {
                                    case 38:
                                        H.val(fa.call(A, (H.val() << 0) + 1, 0, 100));
                                        k.val("s", H.val(), ja.target);
                                        return false;
                                    case 40:
                                        H.val(fa.call(A, (H.val() << 0) - 1, 0, 100));
                                        k.val("s", H.val(), ja.target);
                                        return false;
                                }
                                break;
                            case V.get(0):
                                switch (ja.keyCode) {
                                    case 38:
                                        V.val(fa.call(A, (V.val() << 0) + 1, 0, 100));
                                        k.val("v", V.val(), ja.target);
                                        return false;
                                    case 40:
                                        V.val(fa.call(A, (V.val() << 0) - 1, 0, 100));
                                        k.val("v", V.val(), ja.target);
                                        return false;
                                }
                        }
                    }
                },
                ma = function(ja) {
                    if (!(
                            ja.target.value == "" &&
                            ja.target != R.get(0) &&
                            ((e != null && ja.target != e.get(0)) || e == null)
                        )) {
                        if (!U(ja)) return ja;
                        switch (ja.target) {
                            case C.get(0):
                                C.val(fa.call(A, C.val(), 0, 255));
                                k.val("r", C.val(), ja.target);
                                break;
                            case v.get(0):
                                v.val(fa.call(A, v.val(), 0, 255));
                                k.val("g", v.val(), ja.target);
                                break;
                            case K.get(0):
                                K.val(fa.call(A, K.val(), 0, 255));
                                k.val("b", K.val(), ja.target);
                                break;
                            case O && O.get(0):
                                O.val(fa.call(A, O.val(), 0, 100));
                                k.val("a", Math.precision((O.val() * 255) / 100, p), ja.target);
                                break;
                            case L.get(0):
                                L.val(fa.call(A, L.val(), 0, 360));
                                k.val("h", L.val(), ja.target);
                                break;
                            case H.get(0):
                                H.val(fa.call(A, H.val(), 0, 100));
                                k.val("s", H.val(), ja.target);
                                break;
                            case V.get(0):
                                V.val(fa.call(A, V.val(), 0, 100));
                                k.val("v", V.val(), ja.target);
                                break;
                            case R.get(0):
                                R.val(
                                    R.val()
                                    .replace(/[^a-fA-F0-9]/g, "")
                                    .toLowerCase()
                                    .substring(0, 6)
                                );
                                e && e.val(R.val());
                                k.val("hex", R.val() != "" ? R.val() : null, ja.target);
                                break;
                            case e && e.get(0):
                                e.val(
                                    e
                                    .val()
                                    .replace(/[^a-fA-F0-9]/g, "")
                                    .toLowerCase()
                                    .substring(0, 6)
                                );
                                R.val(e.val());
                                k.val("hex", e.val() != "" ? e.val() : null, ja.target);
                                break;
                            case N && N.get(0):
                                N.val(
                                    N.val()
                                    .replace(/[^a-fA-F0-9]/g, "")
                                    .toLowerCase()
                                    .substring(0, 2)
                                );
                                k.val(
                                    "a",
                                    N.val() != null ? parseInt(N.val(), 16) : null,
                                    ja.target
                                );
                        }
                    }
                },
                Z = function(ja) {
                    if (k.val() != null)
                        switch (ja.target) {
                            case C.get(0):
                                C.val(k.val("r"));
                                break;
                            case v.get(0):
                                v.val(k.val("g"));
                                break;
                            case K.get(0):
                                K.val(k.val("b"));
                                break;
                            case O && O.get(0):
                                O.val(Math.precision((k.val("a") * 100) / 255, p));
                                break;
                            case L.get(0):
                                L.val(k.val("h"));
                                break;
                            case H.get(0):
                                H.val(k.val("s"));
                                break;
                            case V.get(0):
                                V.val(k.val("v"));
                                break;
                            case R.get(0):
                            case e && e.get(0):
                                R.val(k.val("hex"));
                                e && e.val(k.val("hex"));
                                break;
                            case N && N.get(0):
                                N.val(k.val("ahex").substring(6));
                        }
                },
                U = function(ja) {
                    switch (ja.keyCode) {
                        case 9:
                        case 16:
                        case 29:
                        case 37:
                        case 39:
                            return false;
                        case "c".charCodeAt():
                        case "v".charCodeAt():
                            if (ja.ctrlKey) return false;
                    }
                    return true;
                },
                fa = function(ja, ka, aa) {
                    if (ja == "" || isNaN(ja)) return ka;
                    if (ja > aa) return aa;
                    if (ja < ka) return ka;
                    return ja;
                },
                ua = function(ja, ka) {
                    var aa = ja.val("all");
                    if (ka != C.get(0)) C.val(aa != null ? aa.r : "");
                    if (ka != v.get(0)) v.val(aa != null ? aa.g : "");
                    if (ka != K.get(0)) K.val(aa != null ? aa.b : "");
                    if (O && ka != O.get(0))
                        O.val(aa != null ? Math.precision((aa.a * 100) / 255, p) : "");
                    if (ka != L.get(0)) L.val(aa != null ? aa.h : "");
                    if (ka != H.get(0)) H.val(aa != null ? aa.s : "");
                    if (ka != V.get(0)) V.val(aa != null ? aa.v : "");
                    if (ka != R.get(0) && ((e && ka != e.get(0)) || !e))
                        R.val(aa != null ? aa.hex : "");
                    if (e && ka != e.get(0) && ka != R.get(0))
                        e.val(aa != null ? aa.hex : "");
                    if (N && ka != N.get(0))
                        N.val(aa != null ? aa.ahex.substring(6) : "");
                };
            a.extend(true, A, {
                destroy: function() {
                    C.add(v)
                        .add(K)
                        .add(O)
                        .add(L)
                        .add(H)
                        .add(V)
                        .add(R)
                        .add(e)
                        .add(N)
                        .unbind("keyup", ma)
                        .unbind("blur", Z);
                    C.add(v).add(K).add(O).add(L).add(H).add(V).unbind("keydown", ca);
                    k.unbind(ua);
                    N = R = V = H = L = O = K = v = C = null;
                },
            });
            C.add(v)
                .add(K)
                .add(O)
                .add(L)
                .add(H)
                .add(V)
                .add(R)
                .add(e)
                .add(N)
                .bind("keyup", ma)
                .bind("blur", Z);
            C.add(v).add(K).add(O).add(L).add(H).add(V).bind("keydown", ca);
            k.bind(ua);
        };
    a.jPicker = {
        List: [],
        Color: function(b) {
            var k = this,
                e,
                p,
                A,
                C,
                v,
                K,
                O,
                L = [],
                H = function(R) {
                    for (var N = 0; N < L.length; N++) L[N].call(k, k, R);
                },
                V = function(R, N, ca) {
                    if (N === undefined) {
                        if (R === undefined || R == null || R == "") R = "all";
                        if (e == null) return null;
                        switch (R.toLowerCase()) {
                            case "ahex":
                                return q.rgbaToHex({ r: e, g: p, b: A, a: C });
                            case "hex":
                                return V("ahex").substring(0, 6);
                            case "all":
                                return {
                                    r: e,
                                    g: p,
                                    b: A,
                                    a: C,
                                    h: v,
                                    s: K,
                                    v: O,
                                    hex: V.call(k, "hex"),
                                    ahex: V.call(k, "ahex"),
                                };
                            default:
                                N = {};
                                for (var ma = 0; ma < R.length; ma++)
                                    switch (R.charAt(ma)) {
                                        case "r":
                                            if (R.length == 1) N = e;
                                            else N.r = e;
                                            break;
                                        case "g":
                                            if (R.length == 1) N = p;
                                            else N.g = p;
                                            break;
                                        case "b":
                                            if (R.length == 1) N = A;
                                            else N.b = A;
                                            break;
                                        case "a":
                                            if (R.length == 1) N = C;
                                            else N.a = C;
                                            break;
                                        case "h":
                                            if (R.length == 1) N = v;
                                            else N.h = v;
                                            break;
                                        case "s":
                                            if (R.length == 1) N = K;
                                            else N.s = K;
                                            break;
                                        case "v":
                                            if (R.length == 1) N = O;
                                            else N.v = O;
                                    }
                                return N == {} ? V.call(k, "all") : N;
                        }
                    }
                    if (!(ca != null && ca == k)) {
                        var Z = false;
                        if (R == null) R = "";
                        if (N == null) {
                            if (e != null) {
                                e = null;
                                Z = true;
                            }
                            if (p != null) {
                                p = null;
                                Z = true;
                            }
                            if (A != null) {
                                A = null;
                                Z = true;
                            }
                            if (C != null) {
                                C = null;
                                Z = true;
                            }
                            if (v != null) {
                                v = null;
                                Z = true;
                            }
                            if (K != null) {
                                K = null;
                                Z = true;
                            }
                            if (O != null) {
                                O = null;
                                Z = true;
                            }
                            Z && H.call(k, ca || k);
                        } else
                            switch (R.toLowerCase()) {
                                case "ahex":
                                case "hex":
                                    N = q.hexToRgba((N && (N.ahex || N.hex)) || N || "00000000");
                                    V.call(
                                        k,
                                        "rgba", {
                                            r: N.r,
                                            g: N.g,
                                            b: N.b,
                                            a: R == "ahex" ? N.a : C != null ? C : 255,
                                        },
                                        ca
                                    );
                                    break;
                                default:
                                    if (N && (N.ahex != null || N.hex != null)) {
                                        V.call(k, "ahex", N.ahex || N.hex || "00000000", ca);
                                        break;
                                    }
                                    var U = {},
                                        fa = false,
                                        ua = false;
                                    if (N.r !== undefined && !R.indexOf("r") == -1) R += "r";
                                    if (N.g !== undefined && !R.indexOf("g") == -1) R += "g";
                                    if (N.b !== undefined && !R.indexOf("b") == -1) R += "b";
                                    if (N.a !== undefined && !R.indexOf("a") == -1) R += "a";
                                    if (N.h !== undefined && !R.indexOf("h") == -1) R += "h";
                                    if (N.s !== undefined && !R.indexOf("s") == -1) R += "s";
                                    if (N.v !== undefined && !R.indexOf("v") == -1) R += "v";
                                    for (ma = 0; ma < R.length; ma++)
                                        switch (R.charAt(ma)) {
                                            case "r":
                                                if (ua) continue;
                                                fa = true;
                                                U.r = (N && N.r && N.r | 0) || (N && N | 0) || 0;
                                                if (U.r < 0) U.r = 0;
                                                else if (U.r > 255) U.r = 255;
                                                if (e != U.r) {
                                                    e = U.r;
                                                    Z = true;
                                                }
                                                break;
                                            case "g":
                                                if (ua) continue;
                                                fa = true;
                                                U.g = (N && N.g && N.g | 0) || (N && N | 0) || 0;
                                                if (U.g < 0) U.g = 0;
                                                else if (U.g > 255) U.g = 255;
                                                if (p != U.g) {
                                                    p = U.g;
                                                    Z = true;
                                                }
                                                break;
                                            case "b":
                                                if (ua) continue;
                                                fa = true;
                                                U.b = (N && N.b && N.b | 0) || (N && N | 0) || 0;
                                                if (U.b < 0) U.b = 0;
                                                else if (U.b > 255) U.b = 255;
                                                if (A != U.b) {
                                                    A = U.b;
                                                    Z = true;
                                                }
                                                break;
                                            case "a":
                                                U.a =
                                                    N && N.a != null ? N.a | 0 : N != null ? N | 0 : 255;
                                                if (U.a < 0) U.a = 0;
                                                else if (U.a > 255) U.a = 255;
                                                if (C != U.a) {
                                                    C = U.a;
                                                    Z = true;
                                                }
                                                break;
                                            case "h":
                                                if (fa) continue;
                                                ua = true;
                                                U.h = (N && N.h && N.h | 0) || (N && N | 0) || 0;
                                                if (U.h < 0) U.h = 0;
                                                else if (U.h > 360) U.h = 360;
                                                if (v != U.h) {
                                                    v = U.h;
                                                    Z = true;
                                                }
                                                break;
                                            case "s":
                                                if (fa) continue;
                                                ua = true;
                                                U.s =
                                                    N && N.s != null ? N.s | 0 : N != null ? N | 0 : 100;
                                                if (U.s < 0) U.s = 0;
                                                else if (U.s > 100) U.s = 100;
                                                if (K != U.s) {
                                                    K = U.s;
                                                    Z = true;
                                                }
                                                break;
                                            case "v":
                                                if (fa) continue;
                                                ua = true;
                                                U.v =
                                                    N && N.v != null ? N.v | 0 : N != null ? N | 0 : 100;
                                                if (U.v < 0) U.v = 0;
                                                else if (U.v > 100) U.v = 100;
                                                if (O != U.v) {
                                                    O = U.v;
                                                    Z = true;
                                                }
                                        }
                                    if (Z) {
                                        if (fa) {
                                            e = e || 0;
                                            p = p || 0;
                                            A = A || 0;
                                            N = q.rgbToHsv({ r: e, g: p, b: A });
                                            v = N.h;
                                            K = N.s;
                                            O = N.v;
                                        } else if (ua) {
                                            v = v || 0;
                                            K = K != null ? K : 100;
                                            O = O != null ? O : 100;
                                            N = q.hsvToRgb({ h: v, s: K, v: O });
                                            e = N.r;
                                            p = N.g;
                                            A = N.b;
                                        }
                                        C = C != null ? C : 255;
                                        H.call(k, ca || k);
                                    }
                            }
                    }
                };
            a.extend(true, k, {
                val: V,
                bind: function(R) {
                    a.isFunction(R) && L.push(R);
                },
                unbind: function(R) {
                    if (a.isFunction(R))
                        for (var N;
                            (N = a.inArray(R, L)) != -1;) L.splice(N, 1);
                },
                destroy: function() {
                    L = null;
                },
            });
            if (b)
                if (b.ahex != null) V("ahex", b);
                else if (b.hex != null)
                V(
                    (b.a != null ? "a" : "") + "hex",
                    b.a != null ? { ahex: b.hex + q.intToHex(b.a) } : b
                );
            else if (b.r != null && b.g != null && b.b != null)
                V("rgb" + (b.a != null ? "a" : ""), b);
            else if (b.h != null && b.s != null && b.v != null)
                V("hsv" + (b.a != null ? "a" : ""), b);
        },
        ColorMethods: {
            hexToRgba: function(b) {
                b = this.validateHex(b);
                if (b == "") return { r: null, g: null, b: null, a: null };
                var k = "00",
                    e = "00",
                    p = "00",
                    A = "255";
                if (b.length == 6) b += "ff";
                if (b.length > 6) {
                    k = b.substring(0, 2);
                    e = b.substring(2, 4);
                    p = b.substring(4, 6);
                    A = b.substring(6, b.length);
                } else {
                    if (b.length > 4) {
                        k = b.substring(4, b.length);
                        b = b.substring(0, 4);
                    }
                    if (b.length > 2) {
                        e = b.substring(2, b.length);
                        b = b.substring(0, 2);
                    }
                    if (b.length > 0) p = b.substring(0, b.length);
                }
                return {
                    r: this.hexToInt(k),
                    g: this.hexToInt(e),
                    b: this.hexToInt(p),
                    a: this.hexToInt(A),
                };
            },
            validateHex: function(b) {
                if (typeof b == "object") return "";
                b = b.toLowerCase().replace(/[^a-f0-9]/g, "");
                if (b.length > 8) b = b.substring(0, 8);
                return b;
            },
            rgbaToHex: function(b) {
                return (
                    this.intToHex(b.r) +
                    this.intToHex(b.g) +
                    this.intToHex(b.b) +
                    this.intToHex(b.a)
                );
            },
            intToHex: function(b) {
                b = (b | 0).toString(16);
                if (b.length == 1) b = "0" + b;
                return b.toLowerCase();
            },
            hexToInt: function(b) {
                return parseInt(b, 16);
            },
            rgbToHsv: function(b) {
                var k = b.r / 255,
                    e = b.g / 255;
                b = b.b / 255;
                var p = { h: 0, s: 0, v: 0 },
                    A = 0,
                    C = 0;
                if (k >= e && k >= b) {
                    C = k;
                    A = e > b ? b : e;
                } else if (e >= b && e >= k) {
                    C = e;
                    A = k > b ? b : k;
                } else {
                    C = b;
                    A = e > k ? k : e;
                }
                p.v = C;
                p.s = C ? (C - A) / C : 0;
                if (p.s) {
                    A = C - A;
                    p.h =
                        k == C ? (e - b) / A : e == C ? 2 + (b - k) / A : 4 + (k - e) / A;
                    p.h = parseInt(p.h * 60);
                    if (p.h < 0) p.h += 360;
                } else p.h = 0;
                p.s = (p.s * 100) | 0;
                p.v = (p.v * 100) | 0;
                return p;
            },
            hsvToRgb: function(b) {
                var k = { r: 0, g: 0, b: 0, a: 100 },
                    e = b.h,
                    p = b.s;
                b = b.v;
                if (p == 0)
                    k.r = b == 0 ? (k.g = k.b = 0) : (k.g = k.b = ((b * 255) / 100) | 0);
                else {
                    if (e == 360) e = 0;
                    e /= 60;
                    p /= 100;
                    b /= 100;
                    var A = e | 0,
                        C = e - A;
                    e = b * (1 - p);
                    var v = b * (1 - p * C);
                    p = b * (1 - p * (1 - C));
                    switch (A) {
                        case 0:
                            k.r = b;
                            k.g = p;
                            k.b = e;
                            break;
                        case 1:
                            k.r = v;
                            k.g = b;
                            k.b = e;
                            break;
                        case 2:
                            k.r = e;
                            k.g = b;
                            k.b = p;
                            break;
                        case 3:
                            k.r = e;
                            k.g = v;
                            k.b = b;
                            break;
                        case 4:
                            k.r = p;
                            k.g = e;
                            k.b = b;
                            break;
                        case 5:
                            k.r = b;
                            k.g = e;
                            k.b = v;
                    }
                    k.r = (k.r * 255) | 0;
                    k.g = (k.g * 255) | 0;
                    k.b = (k.b * 255) | 0;
                }
                return k;
            },
        },
    };
    var c = a.jPicker.Color,
        l = a.jPicker.List,
        q = a.jPicker.ColorMethods;
    a.fn.jPicker = function(b) {
        var k = arguments;
        return this.each(function() {
            var e = this,
                p = a.extend(true, {}, a.fn.jPicker.defaults, b);
            if (a(e).get(0).nodeName.toLowerCase() == "input") {
                a.extend(true, p, {
                    window: { bindToInput: true, expandable: true, input: a(e) },
                });
                if (a(e).val() == "") {
                    p.color.active = new c({ hex: null });
                    p.color.current = new c({ hex: null });
                } else if (q.validateHex(a(e).val())) {
                    p.color.active = new c({
                        hex: a(e).val(),
                        a: p.color.active.val("a"),
                    });
                    p.color.current = new c({
                        hex: a(e).val(),
                        a: p.color.active.val("a"),
                    });
                }
            }
            if (p.window.expandable)
                a(e).after(
                    '<span class="jPicker"><span class="Icon"><span class="Color">&nbsp;</span><span class="Alpha">&nbsp;</span><span class="Image" title="Click To Open Color Picker">&nbsp;</span><span class="Container">&nbsp;</span></span></span>'
                );
            else p.window.liveUpdate = false;
            var A =
                parseFloat(navigator.appVersion.split("MSIE")[1]) < 7 &&
                document.body.filters,
                C = null,
                v = null,
                K = null,
                O = null,
                L = null,
                H = null,
                V = null,
                R = null,
                N = null,
                ca = null,
                ma = null,
                Z = null,
                U = null,
                fa = null,
                ua = null,
                ja = null,
                ka = null,
                aa = null,
                da = null,
                qa = null,
                pa = null,
                na = null,
                oa = null,
                Ka = null,
                Ea = null,
                Pa = null,
                Wa = null,
                Ia = null,
                Ja = function(Q) {
                    var P = ga.active,
                        ba = P.val("hex"),
                        Ca,
                        Qa;
                    p.color.mode = Q;
                    switch (Q) {
                        case "h":
                            setTimeout(function() {
                                Va.call(e, v, "transparent");
                                Aa.call(e, O, 0);
                                ra.call(e, O, 100);
                                Aa.call(e, L, 260);
                                ra.call(e, L, 100);
                                Va.call(e, K, "transparent");
                                Aa.call(e, V, 0);
                                ra.call(e, V, 100);
                                Aa.call(e, R, 260);
                                ra.call(e, R, 100);
                                Aa.call(e, N, 260);
                                ra.call(e, N, 100);
                                Aa.call(e, ca, 260);
                                ra.call(e, ca, 100);
                                Aa.call(e, Z, 260);
                                ra.call(e, Z, 100);
                            }, 0);
                            U.range("all", { minX: 0, maxX: 100, minY: 0, maxY: 100 });
                            fa.range("rangeY", { minY: 0, maxY: 360 });
                            if (P.val("ahex") == null) break;
                            U.val("xy", { x: P.val("s"), y: 100 - P.val("v") }, U);
                            fa.val("y", 360 - P.val("h"), fa);
                            break;
                        case "s":
                            setTimeout(function() {
                                Va.call(e, v, "transparent");
                                Aa.call(e, O, -260);
                                Aa.call(e, L, -520);
                                Aa.call(e, V, -260);
                                Aa.call(e, R, -520);
                                Aa.call(e, Z, 260);
                                ra.call(e, Z, 100);
                            }, 0);
                            U.range("all", { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                            fa.range("rangeY", { minY: 0, maxY: 100 });
                            if (P.val("ahex") == null) break;
                            U.val("xy", { x: P.val("h"), y: 100 - P.val("v") }, U);
                            fa.val("y", 100 - P.val("s"), fa);
                            break;
                        case "v":
                            setTimeout(function() {
                                Va.call(e, v, "000000");
                                Aa.call(e, O, -780);
                                Aa.call(e, L, 260);
                                Va.call(e, K, ba);
                                Aa.call(e, V, -520);
                                Aa.call(e, R, 260);
                                ra.call(e, R, 100);
                                Aa.call(e, Z, 260);
                                ra.call(e, Z, 100);
                            }, 0);
                            U.range("all", { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                            fa.range("rangeY", { minY: 0, maxY: 100 });
                            if (P.val("ahex") == null) break;
                            U.val("xy", { x: P.val("h"), y: 100 - P.val("s") }, U);
                            fa.val("y", 100 - P.val("v"), fa);
                            break;
                        case "r":
                            Ca = -1040;
                            Qa = -780;
                            U.range("all", { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                            fa.range("rangeY", { minY: 0, maxY: 255 });
                            if (P.val("ahex") == null) break;
                            U.val("xy", { x: P.val("b"), y: 255 - P.val("g") }, U);
                            fa.val("y", 255 - P.val("r"), fa);
                            break;
                        case "g":
                            Ca = -1560;
                            Qa = -1820;
                            U.range("all", { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                            fa.range("rangeY", { minY: 0, maxY: 255 });
                            if (P.val("ahex") == null) break;
                            U.val("xy", { x: P.val("b"), y: 255 - P.val("r") }, U);
                            fa.val("y", 255 - P.val("g"), fa);
                            break;
                        case "b":
                            Ca = -2080;
                            Qa = -2860;
                            U.range("all", { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                            fa.range("rangeY", { minY: 0, maxY: 255 });
                            if (P.val("ahex") == null) break;
                            U.val("xy", { x: P.val("r"), y: 255 - P.val("g") }, U);
                            fa.val("y", 255 - P.val("b"), fa);
                            break;
                        case "a":
                            setTimeout(function() {
                                Va.call(e, v, "transparent");
                                Aa.call(e, O, -260);
                                Aa.call(e, L, -520);
                                Aa.call(e, V, 260);
                                Aa.call(e, R, 260);
                                ra.call(e, R, 100);
                                Aa.call(e, Z, 0);
                                ra.call(e, Z, 100);
                            }, 0);
                            U.range("all", { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                            fa.range("rangeY", { minY: 0, maxY: 255 });
                            if (P.val("ahex") == null) break;
                            U.val("xy", { x: P.val("h"), y: 100 - P.val("v") }, U);
                            fa.val("y", 255 - P.val("a"), fa);
                            break;
                        default:
                            throw "Invalid Mode";
                    }
                    switch (Q) {
                        case "s":
                        case "v":
                        case "a":
                            setTimeout(function() {
                                ra.call(e, O, 100);
                                ra.call(e, V, 100);
                                Aa.call(e, N, 260);
                                ra.call(e, N, 100);
                                Aa.call(e, ca, 260);
                                ra.call(e, ca, 100);
                            }, 0);
                            break;
                        case "r":
                        case "g":
                        case "b":
                            setTimeout(function() {
                                Va.call(e, v, "transparent");
                                Va.call(e, K, "transparent");
                                ra.call(e, V, 100);
                                ra.call(e, O, 100);
                                Aa.call(e, O, Ca);
                                Aa.call(e, L, Ca - 260);
                                Aa.call(e, V, Qa - 780);
                                Aa.call(e, R, Qa - 520);
                                Aa.call(e, N, Qa);
                                Aa.call(e, ca, Qa - 260);
                                Aa.call(e, Z, 260);
                                ra.call(e, Z, 100);
                            }, 0);
                    }
                    P.val("ahex") != null && za.call(e, P);
                },
                za = function(Q, P) {
                    if (P == null || (P != fa && P != U)) va.call(e, Q, P);
                    setTimeout(function() {
                        tb.call(e, Q);
                        pb.call(e, Q);
                        jb.call(e, Q);
                    }, 0);
                },
                wa = function(Q, P) {
                    var ba = ga.active;
                    if (!(P != U && ba.val() == null)) {
                        var Ca = Q.val("all");
                        switch (p.color.mode) {
                            case "h":
                                ba.val("sv", { s: Ca.x, v: 100 - Ca.y }, P);
                                break;
                            case "s":
                            case "a":
                                ba.val("hv", { h: Ca.x, v: 100 - Ca.y }, P);
                                break;
                            case "v":
                                ba.val("hs", { h: Ca.x, s: 100 - Ca.y }, P);
                                break;
                            case "r":
                                ba.val("gb", { g: 255 - Ca.y, b: Ca.x }, P);
                                break;
                            case "g":
                                ba.val("rb", { r: 255 - Ca.y, b: Ca.x }, P);
                                break;
                            case "b":
                                ba.val("rg", { r: Ca.x, g: 255 - Ca.y }, P);
                        }
                    }
                },
                sa = function(Q, P) {
                    var ba = ga.active;
                    if (!(P != fa && ba.val() == null))
                        switch (p.color.mode) {
                            case "h":
                                ba.val("h", { h: 360 - Q.val("y") }, P);
                                break;
                            case "s":
                                ba.val("s", { s: 100 - Q.val("y") }, P);
                                break;
                            case "v":
                                ba.val("v", { v: 100 - Q.val("y") }, P);
                                break;
                            case "r":
                                ba.val("r", { r: 255 - Q.val("y") }, P);
                                break;
                            case "g":
                                ba.val("g", { g: 255 - Q.val("y") }, P);
                                break;
                            case "b":
                                ba.val("b", { b: 255 - Q.val("y") }, P);
                                break;
                            case "a":
                                ba.val("a", 255 - Q.val("y"), P);
                        }
                },
                va = function(Q, P) {
                    if (P != U)
                        switch (p.color.mode) {
                            case "h":
                                var ba = Q.val("sv");
                                U.val(
                                    "xy", {
                                        x: ba != null ? ba.s : 100,
                                        y: 100 - (ba != null ? ba.v : 100),
                                    },
                                    P
                                );
                                break;
                            case "s":
                            case "a":
                                ba = Q.val("hv");
                                U.val(
                                    "xy", { x: (ba && ba.h) || 0, y: 100 - (ba != null ? ba.v : 100) },
                                    P
                                );
                                break;
                            case "v":
                                ba = Q.val("hs");
                                U.val(
                                    "xy", { x: (ba && ba.h) || 0, y: 100 - (ba != null ? ba.s : 100) },
                                    P
                                );
                                break;
                            case "r":
                                ba = Q.val("bg");
                                U.val(
                                    "xy", { x: (ba && ba.b) || 0, y: 255 - ((ba && ba.g) || 0) },
                                    P
                                );
                                break;
                            case "g":
                                ba = Q.val("br");
                                U.val(
                                    "xy", { x: (ba && ba.b) || 0, y: 255 - ((ba && ba.r) || 0) },
                                    P
                                );
                                break;
                            case "b":
                                ba = Q.val("rg");
                                U.val(
                                    "xy", { x: (ba && ba.r) || 0, y: 255 - ((ba && ba.g) || 0) },
                                    P
                                );
                        }
                    if (P != fa)
                        switch (p.color.mode) {
                            case "h":
                                fa.val("y", 360 - (Q.val("h") || 0), P);
                                break;
                            case "s":
                                ba = Q.val("s");
                                fa.val("y", 100 - (ba != null ? ba : 100), P);
                                break;
                            case "v":
                                ba = Q.val("v");
                                fa.val("y", 100 - (ba != null ? ba : 100), P);
                                break;
                            case "r":
                                fa.val("y", 255 - (Q.val("r") || 0), P);
                                break;
                            case "g":
                                fa.val("y", 255 - (Q.val("g") || 0), P);
                                break;
                            case "b":
                                fa.val("y", 255 - (Q.val("b") || 0), P);
                                break;
                            case "a":
                                ba = Q.val("a");
                                fa.val("y", 255 - (ba != null ? ba : 255), P);
                        }
                },
                tb = function(Q) {
                    try {
                        var P = Q.val("all");
                        qa.css({ backgroundColor: (P && "#" + P.hex) || "transparent" });
                        ra.call(e, qa, (P && Math.precision((P.a * 100) / 255, 4)) || 0);
                    } catch (ba) {}
                },
                pb = function(Q) {
                    switch (p.color.mode) {
                        case "h":
                            Va.call(
                                e,
                                v,
                                new c({ h: Q.val("h") || 0, s: 100, v: 100 }).val("hex")
                            );
                            break;
                        case "s":
                        case "a":
                            var P = Q.val("s");
                            ra.call(e, L, 100 - (P != null ? P : 100));
                            break;
                        case "v":
                            P = Q.val("v");
                            ra.call(e, O, P != null ? P : 100);
                            break;
                        case "r":
                            ra.call(e, L, Math.precision(((Q.val("r") || 0) / 255) * 100, 4));
                            break;
                        case "g":
                            ra.call(e, L, Math.precision(((Q.val("g") || 0) / 255) * 100, 4));
                            break;
                        case "b":
                            ra.call(e, L, Math.precision(((Q.val("b") || 0) / 255) * 100));
                    }
                    Q = Q.val("a");
                    ra.call(e, H, Math.precision(((255 - (Q || 0)) * 100) / 255, 4));
                },
                jb = function(Q) {
                    switch (p.color.mode) {
                        case "h":
                            var P = Q.val("a");
                            ra.call(e, ma, Math.precision(((255 - (P || 0)) * 100) / 255, 4));
                            break;
                        case "s":
                            P = Q.val("hva");
                            var ba = new c({
                                h: (P && P.h) || 0,
                                s: 100,
                                v: P != null ? P.v : 100,
                            });
                            Va.call(e, K, ba.val("hex"));
                            ra.call(e, R, 100 - (P != null ? P.v : 100));
                            ra.call(
                                e,
                                ma,
                                Math.precision(((255 - ((P && P.a) || 0)) * 100) / 255, 4)
                            );
                            break;
                        case "v":
                            P = Q.val("hsa");
                            ba = new c({
                                h: (P && P.h) || 0,
                                s: P != null ? P.s : 100,
                                v: 100,
                            });
                            Va.call(e, K, ba.val("hex"));
                            ra.call(
                                e,
                                ma,
                                Math.precision(((255 - ((P && P.a) || 0)) * 100) / 255, 4)
                            );
                            break;
                        case "r":
                        case "g":
                        case "b":
                            ba = P = 0;
                            Q = Q.val("rgba");
                            if (p.color.mode == "r") {
                                P = (Q && Q.b) || 0;
                                ba = (Q && Q.g) || 0;
                            } else if (p.color.mode == "g") {
                                P = (Q && Q.b) || 0;
                                ba = (Q && Q.r) || 0;
                            } else if (p.color.mode == "b") {
                                P = (Q && Q.r) || 0;
                                ba = (Q && Q.g) || 0;
                            }
                            var Ca = ba > P ? P : ba;
                            ra.call(
                                e,
                                R,
                                P > ba ? Math.precision(((P - ba) / (255 - ba)) * 100, 4) : 0
                            );
                            ra.call(
                                e,
                                N,
                                ba > P ? Math.precision(((ba - P) / (255 - P)) * 100, 4) : 0
                            );
                            ra.call(e, ca, Math.precision((Ca / 255) * 100, 4));
                            ra.call(
                                e,
                                ma,
                                Math.precision(((255 - ((Q && Q.a) || 0)) * 100) / 255, 4)
                            );
                            break;
                        case "a":
                            P = Q.val("a");
                            Va.call(e, K, Q.val("hex") || "000000");
                            ra.call(e, ma, P != null ? 0 : 100);
                            ra.call(e, Z, P != null ? 100 : 0);
                    }
                },
                Va = function(Q, P) {
                    Q.css({
                        backgroundColor: (P && P.length == 6 && "#" + P) || "transparent",
                    });
                },
                Ya = function(Q, P) {
                    if (
                        A &&
                        (P.indexOf("AlphaBar.png") != -1 ||
                            P.indexOf("Bars.png") != -1 ||
                            P.indexOf("Maps.png") != -1)
                    ) {
                        Q.attr("pngSrc", P);
                        Q.css({
                            backgroundImage: "none",
                            filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                                P +
                                "', sizingMethod='scale')",
                        });
                    } else Q.css({ backgroundImage: "url('" + P + "')" });
                },
                Aa = function(Q, P) {
                    Q.css({ top: P + "px" });
                },
                ra = function(Q, P) {
                    Q.css({ visibility: P > 0 ? "visible" : "hidden" });
                    if (P > 0 && P < 100)
                        if (A) {
                            var ba = Q.attr("pngSrc");
                            ba != null &&
                                (ba.indexOf("AlphaBar.png") != -1 ||
                                    ba.indexOf("Bars.png") != -1 ||
                                    ba.indexOf("Maps.png") != -1) ?
                                Q.css({
                                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                                        ba +
                                        "', sizingMethod='scale') progid:DXImageTransform.Microsoft.Alpha(opacity=" +
                                        P +
                                        ")",
                                }) :
                                Q.css({ opacity: Math.precision(P / 100, 4) });
                        } else Q.css({ opacity: Math.precision(P / 100, 4) });
                    else if (P == 0 || P == 100)
                        if (A) {
                            ba = Q.attr("pngSrc");
                            ba != null &&
                                (ba.indexOf("AlphaBar.png") != -1 ||
                                    ba.indexOf("Bars.png") != -1 ||
                                    ba.indexOf("Maps.png") != -1) ?
                                Q.css({
                                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                                        ba +
                                        "', sizingMethod='scale')",
                                }) :
                                Q.css({ opacity: "" });
                        } else Q.css({ opacity: "" });
                },
                Fa = function() {
                    ga.active.val("ahex", ga.current.val("ahex"));
                },
                Ra = function() {
                    ga.current.val("ahex", ga.active.val("ahex"));
                },
                ya = function(Q) {
                    a(this)
                        .parents("tbody:first")
                        .find('input:radio[value!="' + Q.target.value + '"]')
                        .removeAttr("checked");
                    Ja.call(e, Q.target.value);
                },
                eb = function() {
                    Fa.call(e);
                },
                nb = function() {
                    Fa.call(e);
                    p.window.expandable && cb.call(e);
                    a.isFunction(ob) && ob.call(e, ga.active, oa);
                },
                $a = function() {
                    Ra.call(e);
                    p.window.expandable && cb.call(e);
                    a.isFunction(kb) && kb.call(e, ga.active, na);
                },
                Sa = function() {
                    wb.call(e);
                },
                ub = function(Q) {
                    var P = Q.val("hex");
                    pa.css({ backgroundColor: (P && "#" + P) || "transparent" });
                    ra.call(e, pa, Math.precision(((Q.val("a") || 0) * 100) / 255, 4));
                },
                La = function(Q) {
                    var P = Q.val("hex");
                    Q = Q.val("va");
                    Ea.css({ backgroundColor: (P && "#" + P) || "transparent" });
                    ra.call(
                        e,
                        Pa,
                        Math.precision(((255 - ((Q && Q.a) || 0)) * 100) / 255, 4)
                    );
                    if (p.window.bindToInput && p.window.updateInputColor)
                        p.window.input.css({
                            backgroundColor: (P && "#" + P) || "transparent",
                            color: Q == null || Q.v > 75 ? "#000000" : "#ffffff",
                        });
                },
                Ga = function(Q) {
                    ja = parseInt(C.css("left"));
                    ka = parseInt(C.css("top"));
                    aa = Q.pageX;
                    da = Q.pageY;
                    a(document).bind("mousemove", qb).bind("mouseup", fb);
                    Q.preventDefault();
                },
                qb = function(Q) {
                    C.css({
                        left: ja - (aa - Q.pageX) + "px",
                        top: ka - (da - Q.pageY) + "px",
                    });
                    p.window.expandable &&
                        !a.support.boxModel &&
                        C.prev().css({ left: C.css("left"), top: C.css("top") });
                    Q.stopPropagation();
                    Q.preventDefault();
                    return false;
                },
                fb = function(Q) {
                    a(document).unbind("mousemove", qb).unbind("mouseup", fb);
                    Q.stopPropagation();
                    Q.preventDefault();
                    return false;
                },
                rb = function(Q) {
                    Q.preventDefault();
                    Q.stopPropagation();
                    ga.active.val("ahex", a(this).attr("title") || null, Q.target);
                    return false;
                },
                kb = (a.isFunction(k[1]) && k[1]) || null,
                gb = (a.isFunction(k[2]) && k[2]) || null,
                ob = (a.isFunction(k[3]) && k[3]) || null,
                wb = function() {
                    ga.current.val("ahex", ga.active.val("ahex"));
                    var Q = function() {
                        if (!(!p.window.expandable || a.support.boxModel)) {
                            var P = C.find("table:first");
                            C.before("<iframe/>");
                            C.prev().css({
                                width: P.width(),
                                height: C.height(),
                                opacity: 0,
                                position: "absolute",
                                left: C.css("left"),
                                top: C.css("top"),
                            });
                        }
                    };
                    if (p.window.expandable) {
                        a(document.body)
                            .children("div.jPicker.Container")
                            .css({ zIndex: 10 });
                        C.css({ zIndex: 20 });
                    }
                    switch (p.window.effects.type) {
                        case "fade":
                            C.fadeIn(p.window.effects.speed.show, Q);
                            break;
                        case "slide":
                            C.slideDown(p.window.effects.speed.show, Q);
                            break;
                        default:
                            C.show(p.window.effects.speed.show, Q);
                    }
                },
                cb = function() {
                    var Q = function() {
                        p.window.expandable && C.css({ zIndex: 10 });
                        !p.window.expandable || a.support.boxModel || C.prev().remove();
                    };
                    switch (p.window.effects.type) {
                        case "fade":
                            C.fadeOut(p.window.effects.speed.hide, Q);
                            break;
                        case "slide":
                            C.slideUp(p.window.effects.speed.hide, Q);
                            break;
                        default:
                            C.hide(p.window.effects.speed.hide, Q);
                    }
                },
                lb = function() {
                    var Q = p.window,
                        P = Q.expandable ? a(e).next().find(".Container:first") : null;
                    C = Q.expandable ? a("<div/>") : a(e);
                    C.addClass("jPicker Container");
                    Q.expandable && C.hide();
                    C.get(0).onselectstart = function(Na) {
                        if (Na.target.nodeName.toLowerCase() !== "input") return false;
                    };
                    var ba = ga.active.val("all");
                    if (Q.alphaPrecision < 0) Q.alphaPrecision = 0;
                    else if (Q.alphaPrecision > 2) Q.alphaPrecision = 2;
                    var Ca =
                        '<table class="jPicker" cellpadding="0" cellspacing="0"><tbody>' +
                        (Q.expandable ?
                            '<tr><td class="Move" colspan="5">&nbsp;</td></tr>' :
                            "") +
                        '<tr><td rowspan="9"><h2 class="Title">' +
                        (Q.title || Y.text.title) +
                        '</h2><div class="Map"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><img src="' +
                        ia.clientPath +
                        ia.colorMap.arrow.file +
                        '" class="Arrow"/></div></td><td rowspan="9"><div class="Bar"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><span class="Map4">&nbsp;</span><span class="Map5">&nbsp;</span><span class="Map6">&nbsp;</span><img src="' +
                        ia.clientPath +
                        ia.colorBar.arrow.file +
                        '" class="Arrow"/></div></td><td colspan="2" class="Preview"><div class="prev_div">' +
                        Y.text.newColor +
                        '<div class="color_preview"><span class="Active" title="' +
                        Y.tooltips.colors.newColor +
                        '">&nbsp;</span><span class="Current" title="' +
                        Y.tooltips.colors.currentColor +
                        '">&nbsp;</span></div></div>' +
                        Y.text.currentColor +
                        '</td><td rowspan="9" class="Button"><input type="button" class="Ok" value="' +
                        Y.text.ok +
                        '" title="' +
                        Y.tooltips.buttons.ok +
                        '"/><input type="button" class="Cancel" value="' +
                        Y.text.cancel +
                        '" title="' +
                        Y.tooltips.buttons.cancel +
                        '"/><div class="Grid">&nbsp;</div></td></tr><tr class="Hue"><td class="Radio"><label title="' +
                        Y.tooltips.hue.radio +
                        '"><input type="radio" value="h"' +
                        (p.color.mode == "h" ? ' checked="checked"' : "") +
                        '/>H:</label></td><td class="Text"><input type="text" maxlength="3" value="' +
                        (ba != null ? ba.h : "") +
                        '" title="' +
                        Y.tooltips.hue.textbox +
                        '"/>&nbsp;\u00ba</td></tr><tr class="Saturation"><td class="Radio"><label title="' +
                        Y.tooltips.saturation.radio +
                        '"><input type="radio" value="s"' +
                        (p.color.mode == "s" ? ' checked="checked"' : "") +
                        '/>S:</label></td><td class="Text"><input type="text" maxlength="3" value="' +
                        (ba != null ? ba.s : "") +
                        '" title="' +
                        Y.tooltips.saturation.textbox +
                        '"/>&nbsp;%</td></tr><tr class="Value"><td class="Radio"><label title="' +
                        Y.tooltips.value.radio +
                        '"><input type="radio" value="v"' +
                        (p.color.mode == "v" ? ' checked="checked"' : "") +
                        '/>V:</label></td><td class="Text"><input type="text" maxlength="3" value="' +
                        (ba != null ? ba.v : "") +
                        '" title="' +
                        Y.tooltips.value.textbox +
                        '"/>&nbsp;%<br/><br/></td></tr><tr class="Red"><td class="Radio"><label title="' +
                        Y.tooltips.red.radio +
                        '"><input type="radio" value="r"' +
                        (p.color.mode == "r" ? ' checked="checked"' : "") +
                        '/>R:</label></td><td class="Text"><input type="text" maxlength="3" value="' +
                        (ba != null ? ba.r : "") +
                        '" title="' +
                        Y.tooltips.red.textbox +
                        '"/></td></tr><tr class="Green"><td class="Radio"><label title="' +
                        Y.tooltips.green.radio +
                        '"><input type="radio" value="g"' +
                        (p.color.mode == "g" ? ' checked="checked"' : "") +
                        '/>G:</label></td><td class="Text"><input type="text" maxlength="3" value="' +
                        (ba != null ? ba.g : "") +
                        '" title="' +
                        Y.tooltips.green.textbox +
                        '"/></td></tr><tr class="Blue"><td class="Radio"><label title="' +
                        Y.tooltips.blue.radio +
                        '"><input type="radio" value="b"' +
                        (p.color.mode == "b" ? ' checked="checked"' : "") +
                        '/>B:</label></td><td class="Text"><input type="text" maxlength="3" value="' +
                        (ba != null ? ba.b : "") +
                        '" title="' +
                        Y.tooltips.blue.textbox +
                        '"/></td></tr><tr class="Alpha"><td class="Radio">' +
                        (Q.alphaSupport ?
                            '<label title="' +
                            Y.tooltips.alpha.radio +
                            '"><input type="radio" value="a"' +
                            (p.color.mode == "a" ? ' checked="checked"' : "") +
                            "/>A:</label>" :
                            "&nbsp;") +
                        '</td><td class="Text">' +
                        (Q.alphaSupport ?
                            '<input type="text" maxlength="' +
                            (3 + Q.alphaPrecision) +
                            '" value="' +
                            (ba != null ?
                                Math.precision((ba.a * 100) / 255, Q.alphaPrecision) :
                                "") +
                            '" title="' +
                            Y.tooltips.alpha.textbox +
                            '"/>&nbsp;%' :
                            "&nbsp;") +
                        '</td></tr><tr class="Hex"><td colspan="2" class="Text"><label title="' +
                        Y.tooltips.hex.textbox +
                        '">#:<input type="text" maxlength="6" class="Hex" value="' +
                        (ba != null ? ba.hex : "") +
                        '"/></label>' +
                        (Q.alphaSupport ?
                            '<input type="text" maxlength="2" class="AHex" value="' +
                            (ba != null ? ba.ahex.substring(6) : "") +
                            '" title="' +
                            Y.tooltips.hex.alpha +
                            '"/></td>' :
                            "&nbsp;") +
                        "</tr></tbody></table>";
                    if (Q.expandable) {
                        C.html(Ca);
                        a(document.body).children("div.jPicker.Container").length == 0 ?
                            a(document.body).prepend(C) :
                            a(document.body)
                            .children("div.jPicker.Container:last")
                            .after(C);
                        C.mousedown(function() {
                            a(document.body)
                                .children("div.jPicker.Container")
                                .css({ zIndex: 10 });
                            C.css({ zIndex: 20 });
                        });
                        C.css({
                            left: Q.position.x == "left" ?
                                P.offset().left -
                                530 -
                                (Q.position.y == "center" ? 25 : 0) +
                                "px" : Q.position.x == "center" ?
                                P.offset().left - 260 + "px" : Q.position.x == "right" ?
                                P.offset().left -
                                10 +
                                (Q.position.y == "center" ? 25 : 0) +
                                "px" : Q.position.x == "screenCenter" ?
                                (a(document).width() >> 1) - 260 + "px" : P.offset().left + parseInt(Q.position.x) + "px",
                            position: "absolute",
                            top: Q.position.y == "top" ?
                                P.offset().top - 312 + "px" : Q.position.y == "center" ?
                                P.offset().top - 156 + "px" : Q.position.y == "bottom" ?
                                P.offset().top + 25 + "px" : P.offset().top + parseInt(Q.position.y) + "px",
                        });
                    } else {
                        C = a(e);
                        C.html(Ca);
                    }
                    Ca = C.find("tbody:first");
                    v = Ca.find("div.Map:first");
                    K = Ca.find("div.Bar:first");
                    var Qa = v.find("span"),
                        Ua = K.find("span");
                    O = Qa.filter(".Map1:first");
                    L = Qa.filter(".Map2:first");
                    H = Qa.filter(".Map3:first");
                    V = Ua.filter(".Map1:first");
                    R = Ua.filter(".Map2:first");
                    N = Ua.filter(".Map3:first");
                    ca = Ua.filter(".Map4:first");
                    ma = Ua.filter(".Map5:first");
                    Z = Ua.filter(".Map6:first");
                    U = new n(v, {
                        map: { width: ia.colorMap.width, height: ia.colorMap.height },
                        arrow: {
                            image: ia.clientPath + ia.colorMap.arrow.file,
                            width: ia.colorMap.arrow.width,
                            height: ia.colorMap.arrow.height,
                        },
                    });
                    U.bind(wa);
                    fa = new n(K, {
                        map: { width: ia.colorBar.width, height: ia.colorBar.height },
                        arrow: {
                            image: ia.clientPath + ia.colorBar.arrow.file,
                            width: ia.colorBar.arrow.width,
                            height: ia.colorBar.arrow.height,
                        },
                    });
                    fa.bind(sa);
                    ua = new d(
                        Ca,
                        ga.active,
                        Q.expandable && Q.bindToInput ? Q.input : null,
                        Q.alphaPrecision
                    );
                    Qa = ba != null ? ba.hex : null;
                    var hb = Ca.find(".Preview");
                    Ua = Ca.find(".Button");
                    qa = hb
                        .find(".Active:first")
                        .css({ backgroundColor: (Qa && "#" + Qa) || "transparent" });
                    pa = hb
                        .find(".Current:first")
                        .css({ backgroundColor: (Qa && "#" + Qa) || "transparent" })
                        .bind("click", eb);
                    ra.call(e, pa, Math.precision(ga.current.val("a") * 100) / 255, 4);
                    na = Ua.find(".Ok:first").bind("click touchstart", $a);
                    oa = Ua.find(".Cancel:first").bind("click touchstart", nb);
                    Ka = Ua.find(".Grid:first");
                    setTimeout(function() {
                        Ya.call(e, O, ia.clientPath + "Maps.png");
                        Ya.call(e, L, ia.clientPath + "Maps.png");
                        Ya.call(e, H, ia.clientPath + "map-opacity.png");
                        Ya.call(e, V, ia.clientPath + "Bars.png");
                        Ya.call(e, R, ia.clientPath + "Bars.png");
                        Ya.call(e, N, ia.clientPath + "Bars.png");
                        Ya.call(e, ca, ia.clientPath + "Bars.png");
                        Ya.call(e, ma, ia.clientPath + "bar-opacity.png");
                        Ya.call(e, Z, ia.clientPath + "AlphaBar.png");
                        Ya.call(
                            e,
                            hb.find("div:last"),
                            ia.clientPath + "preview-opacity.png"
                        );
                    }, 0);
                    Ca.find("td.Radio input").bind("click  touchstart", ya);
                    if (ga.quickList && ga.quickList.length > 0) {
                        Ua = "";
                        for (i = 0; i < ga.quickList.length; i++) {
                            if ((typeof ga.quickList[i]).toString().toLowerCase() == "string")
                                ga.quickList[i] = new c({ hex: ga.quickList[i] });
                            var Xa = ga.quickList[i].val("a"),
                                ab = ga.quickList[i].val("ahex");
                            if (!Q.alphaSupport && ab) ab = ab.substring(0, 6) + "ff";
                            var Ma = ga.quickList[i].val("hex");
                            Ua +=
                                '<span class="QuickColor"' +
                                ((ab && ' title="#' + ab + '"') || "") +
                                ' style="background-color:' +
                                ((Ma && "#" + Ma) || "") +
                                ";" +
                                (Ma ?
                                    "" :
                                    "background-image:url(" + ia.clientPath + "NoColor.png)") +
                                (Q.alphaSupport && Xa && Xa < 255 ?
                                    ";opacity:" +
                                    Math.precision(Xa / 255, 4) +
                                    ";filter:Alpha(opacity=" +
                                    Math.precision(Xa / 2.55, 4) +
                                    ")" :
                                    "") +
                                '">&nbsp;</span>';
                        }
                        Ya.call(e, Ka, ia.clientPath + "bar-opacity.png");
                        Ka.html(Ua);
                        Ka.find(".QuickColor").click(rb);
                    }
                    Ja.call(e, p.color.mode);
                    ga.active.bind(za);
                    a.isFunction(gb) && ga.active.bind(gb);
                    ga.current.bind(ub);
                    if (Q.expandable) {
                        e.icon = P.parents(".Icon:first");
                        Ea = e.icon
                            .find(".Color:first")
                            .css({ backgroundColor: (Qa && "#" + Qa) || "transparent" });
                        Pa = e.icon.find(".Alpha:first");
                        Ya.call(e, Pa, ia.clientPath + "bar-opacity.png");
                        ra.call(
                            e,
                            Pa,
                            Math.precision(((255 - (ba != null ? ba.a : 0)) * 100) / 255, 4)
                        );
                        Wa = e.icon
                            .find(".Image:first")
                            .css({
                                backgroundImage: "url('" + ia.clientPath + ia.picker.file + "')",
                            })
                            .bind("click", Sa);
                        if (Q.bindToInput && Q.updateInputColor)
                            Q.input.css({
                                backgroundColor: (Qa && "#" + Qa) || "transparent",
                                color: ba == null || ba.v > 75 ? "#000000" : "#ffffff",
                            });
                        Ia = Ca.find(".Move:first").bind("mousedown", Ga);
                        ga.active.bind(La);
                    } else wb.call(e);
                },
                ia = p.images,
                Y = p.localization,
                ga = {
                    active:
                        (typeof p.color.active).toString().toLowerCase() == "string" ?
                        new c({
                            ahex:
                                !p.window.alphaSupport && p.color.active ?
                                p.color.active.substring(0, 6) + "ff" : p.color.active,
                        }) : new c({
                            ahex:
                                !p.window.alphaSupport && p.color.active.val("ahex") ?
                                p.color.active.val("ahex").substring(0, 6) + "ff" : p.color.active.val("ahex"),
                        }),
                    current:
                        (typeof p.color.active).toString().toLowerCase() == "string" ?
                        new c({
                            ahex:
                                !p.window.alphaSupport && p.color.active ?
                                p.color.active.substring(0, 6) + "ff" : p.color.active,
                        }) : new c({
                            ahex:
                                !p.window.alphaSupport && p.color.active.val("ahex") ?
                                p.color.active.val("ahex").substring(0, 6) + "ff" : p.color.active.val("ahex"),
                        }),
                    quickList: p.color.quickList,
                };
            a.extend(true, e, {
                commitCallback: kb,
                liveCallback: gb,
                cancelCallback: ob,
                color: ga,
                show: wb,
                hide: cb,
                destroy: function() {
                    C.find("td.Radio input  touchstart").unbind("click", ya);
                    pa.unbind("click  touchstart", eb);
                    oa.unbind("click  touchstart", nb);
                    na.unbind("click  touchstart", $a);
                    if (p.window.expandable) {
                        Wa.unbind("click", Sa);
                        Ia.unbind("mousedown", Ga);
                        e.icon = null;
                    }
                    C.find(".QuickColor").unbind("click", rb);
                    Z = ma = ca = N = R = V = H = L = O = K = v = null;
                    U.destroy();
                    U = null;
                    fa.destroy();
                    fa = null;
                    ua.destroy();
                    gb = ob = kb = Ka = oa = na = pa = qa = ua = null;
                    C.html("");
                    for (i = 0; i < l.length; i++) l[i] == e && l.splice(i, 1);
                },
            });
            l.push(e);
            setTimeout(function() {
                lb.call(e);
            }, 0);
        });
    };
    a.fn.jPicker.defaults = {
        window: {
            title: null,
            effects: { type: "slide", speed: { show: "slow", hide: "fast" } },
            position: { x: "screenCenter", y: "top" },
            expandable: false,
            liveUpdate: true,
            alphaSupport: false,
            alphaPrecision: 0,
            updateInputColor: true,
        },
        color: {
            mode: "h",
            active: new c({ ahex: "#ffcc00ff" }),
            quickList: [
                new c({ h: 360, s: 33, v: 100 }),
                new c({ h: 360, s: 66, v: 100 }),
                new c({ h: 360, s: 100, v: 100 }),
                new c({ h: 360, s: 100, v: 75 }),
                new c({ h: 360, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 100 }),
                new c({ h: 30, s: 33, v: 100 }),
                new c({ h: 30, s: 66, v: 100 }),
                new c({ h: 30, s: 100, v: 100 }),
                new c({ h: 30, s: 100, v: 75 }),
                new c({ h: 30, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 90 }),
                new c({ h: 60, s: 33, v: 100 }),
                new c({ h: 60, s: 66, v: 100 }),
                new c({ h: 60, s: 100, v: 100 }),
                new c({ h: 60, s: 100, v: 75 }),
                new c({ h: 60, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 80 }),
                new c({ h: 90, s: 33, v: 100 }),
                new c({ h: 90, s: 66, v: 100 }),
                new c({ h: 90, s: 100, v: 100 }),
                new c({ h: 90, s: 100, v: 75 }),
                new c({ h: 90, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 70 }),
                new c({ h: 120, s: 33, v: 100 }),
                new c({ h: 120, s: 66, v: 100 }),
                new c({ h: 120, s: 100, v: 100 }),
                new c({ h: 120, s: 100, v: 75 }),
                new c({ h: 120, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 60 }),
                new c({ h: 150, s: 33, v: 100 }),
                new c({ h: 150, s: 66, v: 100 }),
                new c({ h: 150, s: 100, v: 100 }),
                new c({ h: 150, s: 100, v: 75 }),
                new c({ h: 150, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 50 }),
                new c({ h: 180, s: 33, v: 100 }),
                new c({ h: 180, s: 66, v: 100 }),
                new c({ h: 180, s: 100, v: 100 }),
                new c({ h: 180, s: 100, v: 75 }),
                new c({ h: 180, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 40 }),
                new c({ h: 210, s: 33, v: 100 }),
                new c({ h: 210, s: 66, v: 100 }),
                new c({ h: 210, s: 100, v: 100 }),
                new c({ h: 210, s: 100, v: 75 }),
                new c({ h: 210, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 30 }),
                new c({ h: 240, s: 33, v: 100 }),
                new c({ h: 240, s: 66, v: 100 }),
                new c({ h: 240, s: 100, v: 100 }),
                new c({ h: 240, s: 100, v: 75 }),
                new c({ h: 240, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 20 }),
                new c({ h: 270, s: 33, v: 100 }),
                new c({ h: 270, s: 66, v: 100 }),
                new c({ h: 270, s: 100, v: 100 }),
                new c({ h: 270, s: 100, v: 75 }),
                new c({ h: 270, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 10 }),
                new c({ h: 300, s: 33, v: 100 }),
                new c({ h: 300, s: 66, v: 100 }),
                new c({ h: 300, s: 100, v: 100 }),
                new c({ h: 300, s: 100, v: 75 }),
                new c({ h: 300, s: 100, v: 50 }),
                new c({ h: 180, s: 0, v: 0 }),
                new c({ h: 330, s: 33, v: 100 }),
                new c({ h: 330, s: 66, v: 100 }),
                new c({ h: 330, s: 100, v: 100 }),
                new c({ h: 330, s: 100, v: 75 }),
                new c({ h: 330, s: 100, v: 50 }),
                new c(),
            ],
        },
        images: {
            clientPath: "/jPicker/images/",
            colorMap: {
                width: 256,
                height: 256,
                arrow: { file: "mappoint.gif", width: 15, height: 15 },
            },
            colorBar: {
                width: 20,
                height: 256,
                arrow: { file: "rangearrows.gif", width: 20, height: 7 },
            },
            picker: { file: "picker.gif", width: 25, height: 24 },
        },
        localization: {
            text: {
                title: "Drag Markers To Pick A Color",
                newColor: "new",
                currentColor: "current",
                ok: "OK",
                cancel: "Cancel",
            },
            tooltips: {
                colors: {
                    newColor: "New Color - Press &ldquo;OK&rdquo; To Commit",
                    currentColor: "Click To Revert To Original Color",
                },
                buttons: {
                    ok: "Commit To This Color Selection",
                    cancel: "Cancel And Revert To Original Color",
                },
                hue: {
                    radio: "Set To &ldquo;Hue&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Hue&rdquo; Value (0-360&deg;)",
                },
                saturation: {
                    radio: "Set To &ldquo;Saturation&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Saturation&rdquo; Value (0-100%)",
                },
                value: {
                    radio: "Set To &ldquo;Value&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Value&rdquo; Value (0-100%)",
                },
                red: {
                    radio: "Set To &ldquo;Red&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Red&rdquo; Value (0-255)",
                },
                green: {
                    radio: "Set To &ldquo;Green&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Green&rdquo; Value (0-255)",
                },
                blue: {
                    radio: "Set To &ldquo;Blue&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Blue&rdquo; Value (0-255)",
                },
                alpha: {
                    radio: "Set To &ldquo;Alpha&rdquo; Color Mode",
                    textbox: "Enter A &ldquo;Alpha&rdquo; Value (0-100)",
                },
                hex: {
                    textbox: "Enter A &ldquo;Hex&rdquo; Color Value (#000000-#ffffff)",
                    alpha: "Enter A &ldquo;Alpha&rdquo; Value (#00-#ff)",
                },
            },
        },
    };
})(jQuery, "1.1.6");
(function(a) {
    function n(l) {
        var q = l || window.event,
            b = [].slice.call(arguments, 1),
            k = 0,
            e = 0,
            p = 0;
        l = a.event.fix(q);
        l.type = "mousewheel";
        if (q.wheelDelta) k = q.wheelDelta / 120;
        if (q.detail) k = -q.detail / 3;
        p = k;
        if (q.axis !== undefined && q.axis === q.HORIZONTAL_AXIS) {
            p = 0;
            e = -1 * k;
        }
        if (q.wheelDeltaY !== undefined) p = q.wheelDeltaY / 120;
        if (q.wheelDeltaX !== undefined) e = (-1 * q.wheelDeltaX) / 120;
        b.unshift(l, k, e, p);
        return (a.event.dispatch || a.event.handle).apply(this, b);
    }
    var d = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var c = d.length; c;) a.event.fixHooks[d[--c]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var l = d.length; l;) this.addEventListener(d[--l], n, false);
            else this.onmousewheel = n;
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var l = d.length; l;) this.removeEventListener(d[--l], n, false);
            else this.onmousewheel = null;
        },
    };
    a.fn.extend({
        mousewheel: function(l) {
            return l ? this.bind("mousewheel", l) : this.trigger("mousewheel");
        },
        unmousewheel: function(l) {
            return this.unbind("mousewheel", l);
        },
    });
})(jQuery);
methodDraw.addExtension("eyedropper", function(a) {
    var n = methodDraw.canvas,
        d = svgedit.history.ChangeElementCommand,
        c = {
            fillPaint: "red",
            fillOpacity: 1,
            strokePaint: "black",
            strokeOpacity: 1,
            strokeWidth: 5,
            strokeDashArray: null,
            opacity: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
        },
        l = function(q, b, k) {
            var e = null;
            if (q.indexOf("url(#") === 0) {
                q = (q = n.getRefElem(q)) ?
                    q.cloneNode(true) :
                    $("#" + k + "_color defs *")[0];
                e = { alpha: b };
                e[q.tagName] = q;
            } else
                e =
                q.indexOf("#") === 0 ? { alpha: b, solidColor: q.substr(1) } : { alpha: b, solidColor: "none" };
            return new $.jGraduate.Paint(e);
        };
    return {
        name: "eyedropper",
        svgicons: "extensions/eyedropper-icon.xml",
        buttons: [{
            id: "tool_eyedropper",
            type: "mode",
            title: "Eye Dropper Tool",
            position: 8,
            key: "I",
            icon: "extensions/eyedropper.png",
            events: {
                click: function() {
                    n.setMode("eyedropper");
                },
            },
        }, ],
        mouseDown: function(q) {
            var b = n.getMode(),
                k = q.event;
            k =
                k.target.id === "svgroot" ?
                document.getElementById("canvas_background") :
                k.target;
            if (b == "eyedropper" && k) {
                c.fillPaint = k.getAttribute("fill") || "white";
                c.fillOpacity = k.getAttribute("fill-opacity") || 1;
                c.strokePaint = k.getAttribute("stroke") || "none";
                c.strokeOpacity = k.getAttribute("stroke-opacity") || 1;
                c.strokeWidth = k.getAttribute("stroke-width");
                c.strokeDashArray = k.getAttribute("stroke-dasharray");
                c.strokeLinecap = k.getAttribute("stroke-linecap");
                c.strokeLinejoin = k.getAttribute("stroke-linejoin");
                c.opacity = k.getAttribute("opacity") || 1;
                q.selectedElements = q.selectedElements.filter(Boolean);
                if (q.selectedElements.length) {
                    if ($.inArray(q.selectedElements.nodeName, ["g", "use"]) == -1) {
                        var e = {},
                            p = function(C, v, K) {
                                e[v] = C.getAttribute(v);
                                C.setAttribute(v, K);
                            },
                            A = new a.BatchCommand();
                        q.selectedElements.forEach(function(C) {
                            c.fillPaint && p(C, "fill", c.fillPaint);
                            c.fillOpacity && p(C, "fill-opacity", c.fillOpacity);
                            c.strokePaint && p(C, "stroke", c.strokePaint);
                            c.strokeOpacity && p(C, "stroke-opacity", c.strokeOpacity);
                            c.strokeWidth && p(C, "stroke-width", c.strokeWidth);
                            c.strokeDashArray && p(C, "stroke-dasharray", c.strokeDashArray);
                            c.opacity && p(C, "opacity", c.opacity);
                            c.strokeLinecap && p(C, "stroke-linecap", c.strokeLinecap);
                            c.strokeLinejoin && p(C, "stroke-linejoin", c.strokeLinejoin);
                            A.addSubCommand(new d(C, e));
                            e = {};
                        });
                        q = l(c.fillPaint, c.fillOpacity * 100, "fill");
                        b = l(c.strokePaint, c.strokeOpacity * 100, "stroke");
                        methodDraw.paintBox.fill.update(true);
                        methodDraw.paintBox.stroke.update(true);
                        n.undoMgr.addCommandToHistory(A);
                    }
                } else {
                    q = l(c.fillPaint, c.fillOpacity * 100, "fill");
                    b = l(c.strokePaint, c.strokeOpacity * 100, "stroke");
                    methodDraw.paintBox.fill.setPaint(q);
                    methodDraw.paintBox.stroke.setPaint(b);
                }
            }
        },
    };
});
methodDraw.addExtension("view_grid", function(a) {
    function n(p) {
        k.attr("width");
        k.attr("height");
        var A = svgedit.units.getTypeMap()[methodDraw.curConfig.baseUnit],
            C = [0.01, 0.1, 1, 10, 100, 1e3];
        c.getContentElem().getAttribute("x");
        var v = q;
        A = A * p;
        var K = 100 / A,
            O = 1;
        for (p = 0; p < C.length; p++) {
            var L = C[p];
            O = L;
            if (K <= L) break;
        }
        C = O * A;
        v.width = C;
        v.height = C;
        A = v.getContext("2d");
        K = C / 10;
        A.globalAlpha = 0.2;
        A.strokeStyle = "#000";
        for (p = 1; p < 10; p++) {
            O = Math.round(K * p) + 0.5;
            A.moveTo(O, C);
            A.lineTo(O, 0);
            A.moveTo(C, O);
            A.lineTo(0, O);
        }
        A.stroke();
        A.beginPath();
        A.globalAlpha = 0.5;
        A.moveTo(0.5, C);
        A.lineTo(0.5, 0);
        A.moveTo(C, 0.5);
        A.lineTo(0, 0.5);
        A.stroke();
        v = v.toDataURL("image/png");
        e.setAttribute("width", C);
        e.setAttribute("height", C);
        e.parentNode.setAttribute("width", C);
        e.parentNode.setAttribute("height", C);
        c.setHref(e, v);
    }
    if (!document.getElementById("canvasGrid")) {
        var d = document.getElementById("svgcanvas").ownerDocument,
            c = methodDraw.canvas,
            l = false;
        a = a.assignAttributes;
        var q = document.createElement("canvas");
        $(q).hide().appendTo("body");
        var b = d.createElementNS("http://www.w3.org/2000/svg", "g");
        a(b, {
            id: "canvasGrid",
            width: "100%",
            height: "100%",
            x: 0,
            y: 0,
            overflow: "visible",
            display: "none",
        });
        var k = $("#canvas_background");
        k.after(b);
        b = d.createElementNS("http://www.w3.org/2000/svg", "pattern");
        a(b, {
            id: "gridpattern",
            patternUnits: "userSpaceOnUse",
            x: 0,
            y: 0,
            width: 100,
            height: 100,
        });
        var e = d.createElementNS("http://www.w3.org/2000/svg", "image");
        a(e, { x: 0, y: 0, width: 100, height: 100 });
        b.appendChild(e);
        $("#svgroot defs").append(b);
        d = d.createElementNS("http://www.w3.org/2000/svg", "rect");
        a(d, {
            width: "100%",
            height: "100%",
            x: 0,
            y: 0,
            "stroke-width": 0,
            stroke: "none",
            fill: "url(#gridpattern)",
            style: "pointer-events: none; display:visible;",
        });
        $("#canvasGrid").append(d);
    }
    return {
        name: "view_grid",
        zoomChanged: function(p) {
            l && n(p);
        },
        buttons: [{
            id: "view_grid",
            type: "menu",
            after: "tool_wireframe",
            panel: "view_menu",
            title: "View Grid",
            events: {
                click: function() {
                    if ($("#view_grid").hasClass("push_button_pressed")) {
                        methodDraw.curConfig.showGrid = l = false;
                        $("#view_grid").removeClass("push_button_pressed");
                        $("#canvasGrid").attr("display", "none");
                    } else {
                        methodDraw.curConfig.showGrid = l = true;
                        $("#view_grid").addClass("push_button_pressed");
                        $("#canvasGrid").attr("display", "inline");
                        n(c.getZoom());
                    }
                },
            },
        }, ],
    };
});
methodDraw.addExtension("shapes", function() {
    function a() {
        $("#shape_buttons").empty();
        $("#shape_buttons").append(K.buttons);
    }

    function n(L) {
        var H = v[L];
        if (H) {
            K = H;
            H.buttons.length || d(L, H);
            a();
        } else {
            $("#shape_buttons").html("Loading...");
            $.getJSON("extensions/shapelib/" + L + ".json", function(V) {
                K = v[L] = { data: V.data, size: V.size, fill: V.fill };
                d(L, V);
                a();
            });
        }
    }

    function d(L, H) {
        var V = K.size || 300,
            R = K.fill || false,
            N = V * 0.05;
        N = [-N, -N, V + N * 2, V + N * 2].join(" ");
        V = R ? 0 : V / 30;
        V = new DOMParser().parseFromString(
            '<svg xmlns="http://www.w3.org/2000/svg"><svg viewBox="' +
            N +
            '"><path fill="#333" stroke="transparent" stroke-width="' +
            V +
            '" /></svg></svg>',
            "text/xml"
        );
        V.documentElement.setAttribute("width", 40);
        V.documentElement.setAttribute("height", 40);
        V = $(document.importNode(V.documentElement, true));
        R = H.data;
        K.buttons = [];
        for (var ca in R) {
            N = R[ca];
            var ma = V.clone();
            ma.find("path").attr("d", N);
            N = ma
                .wrap('<div class="tool_button">')
                .parent()
                .attr({ id: O + "_" + ca, title: ca });
            K.buttons.push(N[0]);
        }
    }
    var c,
        l,
        q = methodDraw.canvas,
        b,
        k,
        e,
        p = q.getRootElem(),
        A = {},
        C = {
            basic: "Basic",
            object: "Objects",
            symbol: "Symbols",
            arrow: "Arrows",
            flowchart: "Flowchart",
            nature: "Nature",
            game: "Cards & Chess",
            dialog_balloon: "Dialog balloons",
            music: "Music",
            weather: "Weather &amp; Time",
            ui: "User Interface",
            social: "Social Web",
        },
        v = {
            basic: {
                data: {
                    star_points_5: "m1,116.58409l113.82668,0l35.17332,-108.13487l35.17334,108.13487l113.82666,0l-92.08755,66.83026l35.17514,108.13487l-92.08759,-66.83208l-92.08757,66.83208l35.17515,-108.13487l-92.08758,-66.83026z",
                    donut: "m1,150l0,0c0,-82.29042 66.70958,-149 149,-149l0,0c39.51724,0 77.41599,15.69816 105.35889,43.64108c27.94293,27.94293 43.64111,65.84165 43.64111,105.35892l0,0c0,82.29041 -66.70958,149 -149,149l0,0c-82.29041,0 -149,-66.70959 -149,-149zm74.5,0l0,0c0,41.1452 33.35481,74.5 74.5,74.5c41.14522,0 74.5,-33.3548 74.5,-74.5c0,-41.1452 -33.3548,-74.5 -74.5,-74.5l0,0c-41.14519,0 -74.5,33.35481 -74.5,74.5z",
                    triangle: "m1,280.375l149,-260.75l149,260.75z",
                    right_triangle: "m1,299l0,-298l298,298z",
                    diamond: "m1,150l149,-149l149,149l-149,149l-149,-149z",
                    pentagon: "m1.00035,116.97758l148.99963,-108.4053l148.99998,108.4053l-56.91267,175.4042l-184.1741,0l-56.91284,-175.4042z",
                    hexagon: "m1,149.99944l63.85715,-127.71428l170.28572,0l63.85713,127.71428l-63.85713,127.71428l-170.28572,0l-63.85715,-127.71428z",
                    septagon1: "m0.99917,191.06511l29.51249,-127.7108l119.48833,-56.83673l119.48836,56.83673l29.51303,127.7108l-82.69087,102.41679l-132.62103,0l-82.69031,-102.41679z",
                    heptagon: "m1,88.28171l87.28172,-87.28171l123.43653,0l87.28172,87.28171l0,123.43654l-87.28172,87.28172l-123.43653,0l-87.28172,-87.28172l0,-123.43654z",
                    decagon: "m1,150.00093l28.45646,-88.40318l74.49956,-54.63682l92.08794,0l74.50002,54.63682l28.45599,88.40318l-28.45599,88.40318l-74.50002,54.63681l-92.08794,0l-74.49956,-54.63681l-28.45646,-88.40318z",
                    dodecagon: "m1,110.07421l39.92579,-69.14842l69.14842,-39.92579l79.85159,0l69.14842,39.92579l39.92578,69.14842l0,79.85159l-39.92578,69.14842l-69.14842,39.92578l-79.85159,0l-69.14842,-39.92578l-39.92579,-69.14842l0,-79.85159z",
                    trapezoid: "m1,299l55.875,-298l186.25001,0l55.87498,298z",
                    dialog_balloon_1: "m0.99786,35.96579l0,0c0,-19.31077 15.28761,-34.96524 34.14583,-34.96524l15.52084,0l0,0l74.50001,0l139.68748,0c9.05606,0 17.74118,3.68382 24.14478,10.24108c6.40356,6.55726 10.00107,15.45081 10.00107,24.72416l0,87.41311l0,0l0,52.44785l0,0c0,19.31078 -15.2876,34.96524 -34.14584,34.96524l-139.68748,0l-97.32507,88.90848l22.82506,-88.90848l-15.52084,0c-18.85822,0 -34.14583,-15.65446 -34.14583,-34.96524l0,0l0,-52.44785l0,0z",
                    heart: "m150,73c61,-175 300,0 0,225c-300,-225 -61,-400 0,-225z",
                    cylinder: "m299.0007,83.77844c0,18.28676 -66.70958,33.11111 -149.00002,33.11111m149.00002,-33.11111l0,0c0,18.28676 -66.70958,33.11111 -149.00002,33.11111c-82.29041,0 -148.99997,-14.82432 -148.99997,-33.11111m0,0l0,0c0,-18.28674 66.70956,-33.1111 148.99997,-33.1111c82.29044,0 149.00002,14.82436 149.00002,33.1111l0,132.44449c0,18.28674 -66.70958,33.11105 -149.00002,33.11105c-82.29041,0 -148.99997,-14.82431 -148.99997,-33.11105z",
                    arrow_up: "m1.49805,149.64304l148.50121,-148.00241l148.50121,148.00241l-74.25061,0l0,148.71457l-148.5012,0l0,-148.71457z",
                    arrow_u_turn: "m1.00059,299.00055l0,-167.62497l0,0c0,-72.00411 58.37087,-130.37499 130.375,-130.37499l0,0l0,0c34.57759,0 67.73898,13.7359 92.18906,38.18595c24.45006,24.45005 38.18593,57.61144 38.18593,92.18904l0,18.625l37.24997,0l-74.49995,74.50002l-74.50002,-74.50002l37.25,0l0,-18.625c0,-30.8589 -25.0161,-55.87498 -55.87498,-55.87498l0,0l0,0c-30.85892,0 -55.875,25.01608 -55.875,55.87498l0,167.62497z",
                    arrow_left_up: "m0.99865,224.5l74.50004,-74.5l0,37.25l111.74991,0l0,-111.75l-37.25,0l74.5,-74.5l74.5,74.5l-37.25,0l0,186.25l-186.24989,0l0,37.25l-74.50005,-74.5z",
                    plaque: "m-0.00197,49.94376l0,0c27.5829,0 49.94327,-22.36036 49.94327,-49.94327l199.76709,0l0,0c0,27.5829 22.36037,49.94327 49.94325,49.94327l0,199.7671l0,0c-27.58289,0 -49.94325,22.36034 -49.94325,49.94325l-199.76709,0c0,-27.58292 -22.36037,-49.94325 -49.94327,-49.94325z",
                    page: "m249.3298,298.99744l9.9335,-39.73413l39.73413,-9.93355l-49.66763,49.66768l-248.33237,0l0,-298.00001l298.00001,0l0,248.33234",
                    cross: "m0.99844,99.71339l98.71494,0l0,-98.71495l101.26279,0l0,98.71495l98.71495,0l0,101.2628l-98.71495,0l0,98.71494l-101.26279,0l0,-98.71494l-98.71494,0z",
                    divide: "m150,0.99785l0,0c25.17819,0 45.58916,20.41097 45.58916,45.58916c0,25.17821 -20.41096,45.58916 -45.58916,45.58916c-25.17822,0 -45.58916,-20.41093 -45.58916,-45.58916c0,-25.1782 20.41093,-45.58916 45.58916,-45.58916zm0,296.25203c-25.17822,0 -45.58916,-20.41095 -45.58916,-45.58917c0,-25.17819 20.41093,-45.58916 45.58916,-45.58916c25.17819,0 45.58916,20.41096 45.58916,45.58916c0,25.17822 -20.41096,45.58917 -45.58916,45.58917zm-134.06754,-193.71518l268.13507,0l0,91.17833l-268.13507,0z",
                    minus: "m0.99887,102.39503l297.49445,0l0,95.2112l-297.49445,0z",
                    times: "m1.00089,73.36786l72.36697,-72.36697l76.87431,76.87368l76.87431,-76.87368l72.36765,72.36697l-76.87433,76.87431l76.87433,76.87431l-72.36765,72.36765l-76.87431,-76.87433l-76.87431,76.87433l-72.36697,-72.36765l76.87368,-76.87431l-76.87368,-76.87431z",
                },
                buttons: [],
            },
        },
        K = v.basic,
        O = "shapelib";
    return {
        svgicons: "extensions/ext-shapes.xml",
        buttons: [{
            id: "tool_shapelib",
            type: "mode_flyout",
            position: 6,
            title: "Shape library",
            icon: "extensions/ext-shapes.png",
            events: {
                click: function() {
                    q.setMode(O);
                },
            },
        }, ],
        callback: function() {
            var L = $('<div id="shape_buttons">');
            $("#tools_shapelib > *").wrapAll(L);
            var H = $("#tools_shapelib_show");
            n("basic");
            $("#shape_buttons").mouseup(function(R) {
                R = $(R.target).closest("div.tool_button");
                if (R.length) {
                    var N = R.children().clone().attr({ width: 24, height: 24 });
                    H.children(":not(.flyout_arrow_horiz)").remove();
                    H.append(N)
                        .attr("data-curopt", "#" + R[0].id)
                        .mouseup();
                    q.setMode(O);
                    l = R[0].id.substr((O + "_").length);
                    c = K.data[l];
                    $(".tools_flyout").fadeOut();
                }
            });
            L = $('<div id="shape_cats">');
            var V = "";
            $.each(C, function(R, N) {
                V += "<div data-cat=" + R + ">" + N + "</div>";
            });
            L.html(V)
                .children()
                .bind("mouseup", function() {
                    var R = $(this);
                    R.siblings().removeClass("current");
                    R.addClass("current");
                    n(R.attr("data-cat"));
                    return false;
                });
            L.children().eq(0).addClass("current");
            $("#tools_shapelib").prepend(L);
            H.mouseup(function() {
                q.setMode(c ? O : "select");
            });
            $("#tool_shapelib").remove();
            L = $("#tools_shapelib").height();
            $("#tools_shapelib").css({ "margin-top": -(L / 2), "margin-left": 3 });
        },
        mouseDown: function(L) {
            if (q.getMode() === O) {
                var H = (k = L.start_x);
                L = e = L.start_y;
                var V = q.getStyle();
                b = q.addSvgElementFromJson({
                    element: "path",
                    curStyles: true,
                    attr: {
                        d: c,
                        id: q.getNextId(),
                        opacity: V.opacity / 2,
                        style: "pointer-events:none",
                    },
                });
                b.setAttribute("d", c);
                if (/[a-z]/.test(c)) {
                    c = K.data[l] = q.pathActions.convertPath(b);
                    b.setAttribute("d", c);
                    q.pathActions.fixEnd(b);
                }
                b.setAttribute(
                    "transform",
                    "translate(" +
                    H +
                    "," +
                    L +
                    ") scale(0.005) translate(" +
                    -H +
                    "," +
                    -L +
                    ")"
                );
                q.recalculateDimensions(b);
                q.getTransformList(b);
                A = b.getBBox();
                totalScale = { sx: 1, sy: 1 };
                return { started: true };
            }
        },
        mouseMove: function(L) {
            if (q.getMode() === O) {
                var H = q.getZoom(),
                    V = L.event,
                    R = L.mouse_x / H,
                    N = L.mouse_y / H;
                L = q.getTransformList(b);
                var ca = b.getBBox();
                H = ca.x;
                var ma = ca.y,
                    Z = ca.width,
                    U = ca.height,
                    fa = R - k,
                    ua = N - e,
                    ja = {
                        x: Math.min(k, R),
                        y: Math.min(e, N),
                        width: Math.abs(R - k),
                        height: Math.abs(N - e),
                    },
                    ka = (ca = 0);
                U = U ? (U + ua) / U : 1;
                Z = Z ? (Z + fa) / Z : 1;
                Z = ja.width / A.width;
                U = ja.height / A.height;
                Z = Z || 1;
                U = U || 1;
                if (R < k) ca = A.width;
                if (N < e) ka = A.height;
                R = p.createSVGTransform();
                N = p.createSVGTransform();
                ja = p.createSVGTransform();
                R.setTranslate(-(H + ca), -(ma + ka));
                if (V.shiftKey) {
                    replaced = true;
                    V = Math.min(Math.abs(Z), Math.abs(U));
                    Z = V * (Z < 0 ? -1 : 1);
                    U = V * (U < 0 ? -1 : 1);
                    if (totalScale.sx != totalScale.sy) {
                        V =
                            totalScale.sx > totalScale.sy ? 1 : totalScale.sx / totalScale.sy;
                        Z *=
                            totalScale.sy > totalScale.sx ? 1 : totalScale.sy / totalScale.sx;
                        U *= V;
                    }
                }
                totalScale.sx *= Z;
                totalScale.sy *= U;
                N.setScale(Z, U);
                ja.setTranslate(H + ca, ma + ka);
                L.appendItem(ja);
                L.appendItem(N);
                L.appendItem(R);
                q.recalculateDimensions(b);
                A = b.getBBox();
            }
        },
        mouseUp: function(L) {
            if (q.getMode() === O) {
                if (L.mouse_x == k && L.mouse_y == e)
                    return { keep: false, element: b, started: false };
                q.setMode("select");
                return { keep: true, element: b, started: false };
            }
        },
    };
});
(function() {
    for (
        var a = 0, n = ["ms", "moz", "webkit", "o"], d = 0; d < n.length && !window.requestAnimationFrame;
        ++d
    ) {
        window.requestAnimationFrame = window[n[d] + "RequestAnimationFrame"];
        window.cancelAnimationFrame =
            window[n[d] + "CancelAnimationFrame"] ||
            window[n[d] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(c) {
            var l = new Date().getTime(),
                q = Math.max(0, 16 - (l - a)),
                b = window.setTimeout(function() {
                    c(l + q);
                }, q);
            a = l + q;
            return b;
        };
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(c) {
            clearTimeout(c);
        };
})();
(function(a) {
    function n(v) {
        var K = v.originalEvent;
        if (!K.touches ||
            (K.targetTouches.length === 1 && K.touches.length === 1)
        ) {
            b.call(this, v);
            v = a(this);
            v.bind(A, d);
            v.bind(p, c);
        } else {
            clearTimeout(C);
            q.call(this);
        }
    }

    function d(v) {
        if (C != null) {
            var K = v.originalEvent;
            v = K.changedTouches ? K.changedTouches[0].pageX : K.pageX;
            K = K.changedTouches ? K.changedTouches[0].pageY : K.pageY;
            var O = a(this).data("taphold.point");
            v = v - O.x;
            K = K - O.y;
            if (Math.sqrt(v * v + K * K) > e) {
                clearTimeout(C);
                q.call(this);
            }
        }
    }

    function c() {
        clearTimeout(C);
        q.call(this);
    }

    function l(v) {
        q.call(this);
        a(this).data("taphold.handler").call(this, v);
    }

    function q() {
        C = null;
        a(this).unbind(A, d);
        a(this).unbind(p, c);
    }

    function b(v) {
        if (C == null) {
            var K = this;
            C = setTimeout(function() {
                l.call(K, v);
            }, k);
            var O = v.originalEvent,
                L = {};
            L.x = O.changedTouches ? O.changedTouches[0].pageX : O.pageX;
            L.y = O.changedTouches ? O.changedTouches[0].pageY : O.pageY;
            a(this).data("taphold.point", L);
        }
    }
    var k = 1e3,
        e = 5,
        p = "touchend",
        A = "touchmove",
        C = null;
    a.event.special.taphold = {
        setup: function() {},
        add: function(v) {
            a(this).data("taphold.handler", v.handler);
            v.data ?
                a(this).bind("touchstart", v.data, n) :
                a(this).bind("touchstart", n);
        },
        remove: function(v) {
            clearTimeout(C);
            q.call(this);
            v.data ?
                a(this).unbind("touchstart", v.data, n) :
                a(this).unbind("touchstart", n);
        },
        teardown: function() {},
    };
})(jQuery);
var saveAs =
    saveAs ||
    (function(a) {
        if (!(
                typeof navigator !== "undefined" &&
                /MSIE [1-9]\./.test(navigator.userAgent)
            )) {
            var n = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                d = "download" in n,
                c = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                l = a.webkitRequestFileSystem,
                q = a.requestFileSystem || l || a.mozRequestFileSystem,
                b = function(K) {
                    (a.setImmediate || a.setTimeout)(function() {
                        throw K;
                    }, 0);
                },
                k = 0,
                e = function(K) {
                    var O = function() {
                        typeof K === "string" ?
                            (a.URL || a.webkitURL || a).revokeObjectURL(K) :
                            K.remove();
                    };
                    a.chrome ? O() : setTimeout(O, 500);
                },
                p = function(K, O, L) {
                    O = [].concat(O);
                    for (var H = O.length; H--;) {
                        var V = K["on" + O[H]];
                        if (typeof V === "function")
                            try {
                                V.call(K, L || K);
                            } catch (R) {
                                b(R);
                            }
                    }
                },
                A = function(K) {
                    if (
                        /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                            K.type
                        )
                    )
                        return new Blob(["\ufeff", K], { type: K.type });
                    return K;
                },
                C = function(K, O, L) {
                    L || (K = A(K));
                    var H = this;
                    L = K.type;
                    var V = false,
                        R,
                        N,
                        ca = function() {
                            p(H, "writestart progress write writeend".split(" "));
                        },
                        ma = function() {
                            if (N && c && typeof FileReader !== "undefined") {
                                var ua = new FileReader();
                                ua.onloadend = function() {
                                    var ja = ua.result;
                                    N.location.href =
                                        "data:attachment/file" + ja.slice(ja.search(/[,;]/));
                                    H.readyState = H.DONE;
                                    ca();
                                };
                                ua.readAsDataURL(K);
                                H.readyState = H.INIT;
                            } else {
                                if (V || !R) R = (a.URL || a.webkitURL || a).createObjectURL(K);
                                if (N) N.location.href = R;
                                else if (a.open(R, "_blank") == undefined && c)
                                    a.location.href = R;
                                H.readyState = H.DONE;
                                ca();
                                e(R);
                            }
                        },
                        Z = function(ua) {
                            return function() {
                                if (H.readyState !== H.DONE) return ua.apply(this, arguments);
                            };
                        },
                        U = { create: true, exclusive: false },
                        fa;
                    H.readyState = H.INIT;
                    O || (O = "download");
                    if (d) {
                        R = (a.URL || a.webkitURL || a).createObjectURL(K);
                        setTimeout(function() {
                            n.href = R;
                            n.download = O;
                            var ua = new MouseEvent("click");
                            n.dispatchEvent(ua);
                            ca();
                            e(R);
                            H.readyState = H.DONE;
                        });
                    } else {
                        if (a.chrome && L && L !== "application/octet-stream") {
                            fa = K.slice || K.webkitSlice;
                            K = fa.call(K, 0, K.size, "application/octet-stream");
                            V = true;
                        }
                        if (l && O !== "download") O += ".download";
                        if (L === "application/octet-stream" || l) N = a;
                        if (q) {
                            k += K.size;
                            q(
                                a.TEMPORARY,
                                k,
                                Z(function(ua) {
                                    ua.root.getDirectory(
                                        "saved",
                                        U,
                                        Z(function(ja) {
                                            var ka = function() {
                                                ja.getFile(
                                                    O,
                                                    U,
                                                    Z(function(aa) {
                                                        aa.createWriter(
                                                            Z(function(da) {
                                                                da.onwriteend = function(qa) {
                                                                    N.location.href = aa.toURL();
                                                                    H.readyState = H.DONE;
                                                                    p(H, "writeend", qa);
                                                                    e(aa);
                                                                };
                                                                da.onerror = function() {
                                                                    var qa = da.error;
                                                                    qa.code !== qa.ABORT_ERR && ma();
                                                                };
                                                                "writestart progress write abort"
                                                                .split(" ")
                                                                    .forEach(function(qa) {
                                                                        da["on" + qa] = H["on" + qa];
                                                                    });
                                                                da.write(K);
                                                                H.abort = function() {
                                                                    da.abort();
                                                                    H.readyState = H.DONE;
                                                                };
                                                                H.readyState = H.WRITING;
                                                            }),
                                                            ma
                                                        );
                                                    }),
                                                    ma
                                                );
                                            };
                                            ja.getFile(
                                                O, { create: false },
                                                Z(function(aa) {
                                                    aa.remove();
                                                    ka();
                                                }),
                                                Z(function(aa) {
                                                    aa.code === aa.NOT_FOUND_ERR ? ka() : ma();
                                                })
                                            );
                                        }),
                                        ma
                                    );
                                }),
                                ma
                            );
                        } else ma();
                    }
                },
                v = C.prototype;
            if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob)
                return function(K, O, L) {
                    L || (K = A(K));
                    return navigator.msSaveOrOpenBlob(K, O || "download");
                };
            v.abort = function() {
                this.readyState = this.DONE;
                p(this, "abort");
            };
            v.readyState = v.INIT = 0;
            v.WRITING = 1;
            v.DONE = 2;
            v.error = v.onwritestart = v.onprogress = v.onwrite = v.onabort = v.onerror = v.onwriteend = null;
            return function(K, O, L) {
                return new C(K, O, L);
            };
        }
    })(
        (typeof self !== "undefined" && self) ||
        (typeof window !== "undefined" && window) ||
        this.content
    );
if (typeof module !== "undefined" && module.exports)
    module.exports.saveAs = saveAs;
else
    typeof define !== "undefined" &&
    define !== null &&
    define.amd != null &&
    define([], function() {
        return saveAs;
    });