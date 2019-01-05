class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: props.slideImages,
      activeIndex: 1,
      left: 0,
      sliderWidth: 640,
      sliderHeight: 360
    };

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.clickIndicator = this.clickIndicator.bind(this);
  }

  prevSlide() {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + this.state.sliderWidth
    });
    if (this.state.activeIndex === 1) {
      this.setState({
        activeIndex: this.state.activeIndex + this.state.slider.length - 1,
        left:
          this.state.left -
          this.state.sliderWidth * (this.state.slider.length - 1)
      });
    }
  }

  nextSlide() {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.state.sliderWidth
    });
    if (this.state.activeIndex === this.state.slider.length) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.slider.length + 1,
        left: 0
      });
    }
  }

  clickIndicator(e) {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left:
        this.state.sliderWidth -
        parseInt(e.target.textContent) * this.state.sliderWidth
    });
  }

  render() {
    var style = {
      left: this.state.left
      //   width: this.state.sliderWidth,
      //   height: this.state.sliderHeight
    };

    const width = this.state.slider.length * this.state.sliderWidth;

    return (
      <div>
        <div
          className="slider-wrapper"
          style={{
            maxWidth: this.state.sliderWidth,
            maxHeight: this.state.sliderHeight
          }}
        >
          {this.state.slider.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              style={style}
              className={
                index + 1 === this.state.activeIndex ? "slider-item" : "hide"
              }
            />
          ))}
          <div className="buttons-wrapper">
            <button className="prev-button" onClick={this.prevSlide} />
            <button className="next-button" onClick={this.nextSlide} />
          </div>
          <div className="indicators-wrapper">
            <ul className="indicators">
              {this.state.slider.map((item, index) => (
                <li
                  key={index}
                  className={
                    index + 1 === this.state.activeIndex
                      ? "active-indicator"
                      : ""
                  }
                  onClick={this.clickIndicator}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
