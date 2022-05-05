class ball
{
    constructor(aradius, xcenter, ycenter, xspeed, yspeed)
    {
        this.radius = aradius;
        this.xcenter = xcenter;
        this.ycenter = ycenter;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }
    get get_radius() { return this.radius;}
    get get_x_center() { return this.xcenter;}
    get get_y_center() { return this.ycenter;}
    get get_x_speed() { return this.xspeed;}
    get get_y_speed() { return this.yspeed;}

    set set_radius(aradius) { this.radius = aradius;}
    set set_x_center(xcenter) { this.xcenter = xcenter;}
    set set_y_center(ycenter) { this.ycenter = ycenter;}
    set set_x_speed(xspeed) { this.xspeed = xspeed;}
    set set_y_speed(yspeed) { this.yspeed = yspeed;}

    draw()
    {
        circle(this.xcenter, this.ycenter, this.radius)
    }
    
    update()
    {
        if (this.x < 0 || this.x > width)
            this.xspeed = -this.xspeed;
        if (this.y < 0 || this.y > height)
            this.yspeed = -this.yspeed;
        this.xcenter += this.xspeed;
        this.ycenter += this.yspeed;
    }
    
    generate_x_collision()
    {
        this.xspeed = -this.xspeed
    }

    generate_y_collision()
    {
        this.yspeed = -this.yspeed
    }
}