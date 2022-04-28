class paddle
{
    constructor(pwidth, pheight, xcenter, ycenter)
    {
        this.width = pwidth;
        this.height = pheight;
        this.xcenter = xcenter;
        this.ycenter = ycenter;
    }

    get get_x_center() { return this.xcenter;}
    get get_y_center() { return this.ycenter;}
    set set_x_center(xcenter) { return this.xcenter;}
    set set_y_center(ycenter) { return this.ycenter;}

    get get_width() { return this.xcenter;}
    get get_height() { return this.ycenter;}
    set set_width(pwidth) { this.width = pwidth;}
    set set_height(pheight) { this.height = pheight;}

    collides(ball)
    {
        if (ball.get_x_center() - this.x_center < ball.get_radius()
            && ball.get_y_center() - this.ycenter < ball.get_radius())
            return true;
        return false;
    }
}