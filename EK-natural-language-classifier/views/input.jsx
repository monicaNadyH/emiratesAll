import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({
  propTypes: {
    data: PropTypes.object,
    onClassify: PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return { text: '' };
  },

  getInitialState() {
    return { text: '' };
  },

  /**
   * When pressing the Ask button
   */
  onSubmit() {
    this.props.onClassify(this.state.text);
  },

  /**
   * On sample question click
   */
   onSampleQuestionClick(e) {
     this.setState({ text: e.target.text });
     this.props.onClassify(e.target.text);
   },

  /**
   * During changes to the text input
   */
  handleInputChange(e) {
    this.setState({ text: e.target.value });
  },

  /**
   * On Input text key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onClassify(this.state.text);
    }
  },
  render() {
    return (
      <div>
<h1 className="base--h1">Emirates Airlines</h1>
      <div className="center">
      <img
      src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxcXGBcXGBcYFRcVFRcXFxUVFxgYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALABHwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgEHAAj/xABBEAABAwEGAwUFBQYGAgMAAAABAAIRAwQSITFBUQVhcQYTgZGhIjKx0fAUQlJywQcVYpLh8RYzQ1OCsqLSIyRj/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACgRAAMAAgICAwABBAMBAAAAAAABAgMREiEEQRMxUSIyQmGxFNHhBf/aAAwDAQACEQMRAD8Au7i+uJ60WJ7Mx4jJBDCdFzcifFgqdKUzSsysOGcGqvgiA3ckfotBZ+EiIcB1CD5eh5leyjsdkmP1WjsthutRKPDg04J0NQjE3/UUbS+jJ2+x+0VT2mit3abKDmqG3cL2SPcPszSr6MhXalHrR2jhDko/gr1Scs/pJ4qKMqMKyq8MeNEubKdlVWv0m4f4K3Vy6me4OykKB2TqheLFQEzTEZE+ZC+NOFy8FmzJHS8qTKp1Kg1gdk4IVc3DiR5rchuLLGjUP4j5o5e8fenqP1VO2vzHSQuVOKOas2FFtS4q5hxA9Vf2HtW0QHNP11K84tPHDq1AZx0bIdh5aPbLNxJlQS31hRtVFrxkvKbH2hG5CubN2gcMqnmkqdlFYbtFwp2JAkLzzitncCZBC9Qb2kpkQ+OqStFKz1z7zAhFuPsFSq+jx+sClnFelcV7JtbiC0jqsxaeEgGIXQsqZJw0ZoOXS5Xj+GNSNosQGS3NG0IFRKnUpEIRBW2bR9C4oly5fRMTlfIV9cvrBP0C/jD2uYH2cim6bpoPvTGYh7ZJGuS5ZO01EOM2YxOrmk+RZh5qx4W4NYQWhxkOE4hp0I2OvknLTZKFQtfUbfcARsDJnHovCnydPR6Dxe9DvC+JUagvU2DDMANvN6jOOatadQFUtExgxrWDZoA+CeoK8eb2TrFosF8hU6iKvRi1S2iLWgNVK1XhN1Rgkq1NcPlNplcegDnNUCwHJCrMhL3yvPebvs6FJK12U6BZriNItOy0T7Q8JavXvCHtHgmWXXaA4ZlBWO6l9oO6ta9jou1ulVtp4e9uIIcOWa6Z8hEXiYJ7p0VdarG85FW9GiCMajW/mDhjtMR6oNLiFla4irUeAPwU5noZ/RXWT8JOTP1OG1xkq22UK8+0D5Lcm32A4C0PH8TqZiNiP1XGWmziYtLCNi1wnwghP8zX2b49nnbnVW5g+RUH2upqSvS7K6nm2rTu4kukED8zTpzhGtPAadUS6jTcDjfpm5I0MCQfJb/lJfaN8DPJX2h6615K31v7IMAlr7vJ90/+TT+izdu4K5hy8RiFePImvonWKkV9lqAHEkK1bbWYC8esKofZHDRBcxwzBVN7E+i8q1BpUCWdWOj1VGVB0opAbLQ26oML580B9tdqVXmqVB7yjpC7Y462lAfaUs5xQnOKOkbsYdVUb4SziUMuK2kNsac0FCdRCD3hX3eoaCSdQQzRKmKy73q3Zj9K2ZoIRBSxSTbUGTeMDmpN4xSBifHRfIPZ7jTLSlTTTFW0eJMMQRjkm2WhGb0yFzQ/TKYnBIMrJkVMF7Pi5lxZy3LOkobgud4u94kqlZtNC1ViRq0VaOKG4ArlrHsvF6KZ7SgPVnaGQk3Lnacl00xA2S+QN0s5tNpye4zhBAB8CFY2o/QVbUMYhPFAa2KcTfUaQLxDXTDWgRBy0x8dlUN4MHBxqzJi7jiOf91fGu92ZB5kCR0hBeCrTlpdAeOWZ+1dmrrbwqAnDDqq53BH3S7Qea0tVhnMpO03gIBw1XRjy2/tkbxx+FBYqVVp9iee3itdw+z1HsDYaPywAJ6ayqezWao83KbHOJ/Dj56AdVqeFdhAYfanYf7bT/2f+jfNWqXZOXxQnR7K1nE4iRoXTgfgrdnBKFnberOvu/CCQ2fiVZW3idKzs7uk0ADANaAPrqvNO0naBz3FodJO2Xhy56+ib66ApTeyz4hbm1qnd0KVMEYueG+y1s5knCfrSVPhfCbre7cxtZwm9LcZJJ08tcllLDxKtRBFN5bJkwSJPNX1j7TvIIfUIfhDw1pu+GE+KFK0HcvoctnZ+zOzY+i7l7TfEFVNp7HH/Tex/Im67yctnYOOEs9s03uGrZAI0MaHdIcR7VOpnCiI3zxU5zXvSGrFOtswdt7O1Kfv03N5xh55KsrcNcNFuf8AGVQnFrC38JC+tHFLPVEmjdd/DkuhZci+0ReOH9M87fZyNEF1Irc1qVJ4MtLecKit9ia3JwIVpzbJVi0Z4sQyxWT2BX/ZbsVWtvt/5dCcarhnuKY+8eeQ30Tu9fYqkylg4bVr1BSo03VHnJrRjAzJOTRzMDmry1fs/ttMS5tPoKrZ8dPVerUqdm4fS7qztAn3nHF7zu92vTIaALA9pe1rQSC+T+FuJ8dvFTWWm+vofgkuzEWrhlWmYe2PFp+BKULU3Wtz6xvOwbo0a8ydVC6qqn7EaXo/SVSiHZgFDHDWfgCPRfKZbK+Q2ew6aFaXC6c5HzKsGWUbrjHHZGY5Xxa9kLuiBpxqmKWSGRKNSonUr1PHW30iVV12K1gZS/ekHNW1wL643YeSavEpvaZllS9FU6rIzSrqzxkRCvu7bsPIKLrMw/db5BavFt/VIKyz+FBUc47eaC5r9vVaE2Kn+H4qB4czmPFRfiZf8MdZpM5Upu2SFdpGbStbU4ZOTvMJKvwapo8eMj9CoV42Wf7Ss5Mb9mYLhCHfB1WgrcAqkZ0z5/8Aql6fZh0zUcOjJJ8yAB5LRhyP7Q1XCXTHuzlcCiAGy4uccpOeHwCsqlIPHtAb8gfgfIoFCg2k261sDUAHE/xHNx9OSrOJ8Yu5L05/jKTOJrb2W9a0spjQRoMAI2CznFO0MyGnH0A3J0VBa+JPquIBgak5AKp4nWutw9deZS1foZSK9pePQCGkyczr5adEtwfs1VeW1e/plrgJAHeAbguDxj0jJV1maxz3d9SqPaQIwJbjm7SdMua1fD6Nmpe3SpQSMwLrjrBJxjl8FK6crr7Kyl7FOO8KbTi7qlLDw29iXAD1VjaGuqGSSSn3UoAaMmiNkPlcyk32K4Tra+iFnoNay60xOuqRtrXTnejASMAPop11NQLUs1p7DSbKP93uJk4I32IjUevyVqWIdSnO6p8myfx6KS0PcMCZSRs5eQ1oJcTAAEknYAZrW8O4U6qTda0Nbi57sGMG7nHAdES2dq7LYgRZGNrVog13CGDcMAxI6RO5TrJofF415nqFsJwHsJSot+0cQLYAkUSQGDnVdMH8ow3JyS/an9p9GmLlAXyMBHssAGUGMughYvjFutlsdeqOJGhebrG/kYB6geKrG8DpjF73PPLAeOZPmFWVy7oXPinF/CHuvb9L/sV4v2ptNoJl5AP3WYDpOZ81X0rC7N+A21PXZXLKtIO7ukG3jtGA1LnL60WZwzCsno5Pj9t7EVyUUsUC1Ps2j9F2cbBWdJuCrKbeSZpNOxXxnPR7OSdlmxqM54aJdgk6RPNR4hYu+plhcWnMOGYIyPPou7xM88tNHFkllR2itAeWupVzSrU5uGTcMjJzMnAkNxgmJGpT9HjYuiXCYExlMYxyWN4twK2U59k1W/iZj5tzCzlo4lUYYdIOxBHxXuzxa/iyOmeru4yN1z98DdeSN444a/1UWcdqARfnmQNgJN2NQT4puJtM9H4Txt1QudefHeOumWll0H3SD7W/zQ6Xa15Ddb5e1puggvY1wjB4MFwByGGHMeZWLi1SkA1jjdkm6Y1LjEgH+HzdyChQ4iWdz7Uik55yi93mE4nCJJ5worHUrSZVuW2es2ftZeLIDYe57YJcHC4aktIggODRS1iS/YSxZ+1tNwBiR7OIc2BJYJN4tOF55ymKZ1LQfHbLxF7TSIcCWGsSZ+9VyMI9Dj1WlSp0wYDWODoIm9EgScm+8ZGOWSK5mcz6Pazx2lLRfbL8oIxEE3s8R8wjv4nTES4CTAk6wTHkD5Lwejxt4uRmyzlrZ0qkjDqCi0eNHupFQMcW0wQZa0lkuIqHAkuN6T8dTu/ZuE/p7pS4nTd7tRp6OB0afg9h/wCQ3CN9oC8hsXakOpNNwAxIDsSDIcBJxza3+VuwXXdoMoZhOMQ0wWVWhrSzEAGoccxfOKbbE4nrnfhcc5pzAK8rp9qiA0k1L0XnwX3QRdc4Y4RMjDQEdScL7TVSPaqOwIEENxgMx90HENJ61XbNABtHo9Sw0DnSZv7oz3SFr7L2Sp71Pyc4fqswO0j499hMatIxgxk7ePBEHah8+60jGPbIP34wLY0p6/ed+EXg42bk0W9XsXQPu1Ht8WkfBJVuwzvuVx/yZ+oK7/iQb+qmO1bAYJdnHuuIzaMwIiXjyccgSE+Nfg3IRZ2OtDXA36ZHIuB64tXK/AbSDhTkcnN+as6faykf9QY74HENOR/Oz+YI7e0bDk4HxU6wbexlka6MzWsNdvvUqg/4kjzCUcTMHPY5+q2bePtOyjU4xSPvAHrBSfA/Q3yGLqVABiYGXLHJfWnuqLb9okTi2kIFWoPxGf8ALZzOJ0Cb7W9pKVnp/wD1wxtZ2DSGNlo+8/LDYc+hXltutznFz3vLiZLnEyTuSSisbXR6HjeMsi+TJ1P+/wDwvuPdqKlZtzCnRb7tJmDBzP4nfxOWbdxyjTMmar9APcaeZOZ6SFXvsleuAYuUziJzcN4H9l83gLR7zyegj4yuvHhie6+yfk+e3Px4Fxn/AGfWztXWfkGt/wDI+Zw9FWPtVaqYLnOnTTyGCvafC6I+7P5iT6ZJzhAa57w1ohkDAYXjMxGwHqrc5S6R5fF+2JcLpdy2I9o5n9ByTX2wqwrUBt6JOpZwp8k+2bjoA60yhOqAorrOEF9nTpoGj9IU3BNMIVPTndMsc5fGNaPWvGW4KKwqqZUO6PTrlNjycWc1YmWQco1qLH4Pa1w2cAfilm1kQVV3T5aIvGxC1dlLFU96zsH5Zb/1IVRaP2c2J2XeM6OBHqCtRfUe9V35ugcGYa0fstpfctDx1aD8CFV2n9l1Ue5aGH8zXD4SvSzXUHWhI/Pr0xlDPGeJdgLdSxDW1B/+bpPkYKzFto1qZuvY5h/iBHxX6Gq2lJWt7HiHta4bOAI8inj/AOlX9yKLA2fn3v39VBtpjSPofIeS9ht/ZayVJincO7DHoZHosnxTsO8SaZDx5O8tfBdmPzYr/Bn49IyLLYNz5nnz5n02R22rZ/w5fL1KFbuEPYSCCDzCrn03BdStMk4LtlpcNZUxbXenqqDv3BFZbTqmBovm8SdsfNTbxQ8x9Dbr6FUzLWCpisFgaLkcV5nxkbfMKX7ynJ3qqTvkJ9qWNo0P7yO5XP3gfH6Cz5tW6G+27T5wNd+u2yyNxNI7iLsccxGBgx1GIzKVtnaQtkAy7rgOvyWdqWh7s3QNgo0w0aE9fktorChd12HdVqVXFxMk5k5fXRMU6LG4u9o88vLXxQBVdo1x6Bd7mofuEdcECmTyKtcfQ5VtvVcbbUGnZqmpA6oxso1wPJDoiDqWoHQKFkrNpSGCJMnE5/QUqliIEjEcsf7IDWNnKeSOwNFhZuLX3FoBkCTOk6I5tA2VfSc3G6I8NviiXkHK9CbYw5zToEB4bshEqDnJlJtn6IY0ckZlMbqsbURmVea+RcnqVDLNlJFFJV7LQmadoSnPU0MCmF24EIV10WgLbQmqC3EM0VJtUKJrBPTWkBcgbqB3QHtITDqwQKlUKWys7FqkpaoDsmqlUboLqnNFNnROxZrHOMAGYJ8AQP1CrbXbnUyQ6k8cxBB8ir+xWkNLp1HwP9QkOM8Upghpgk5yQAATEr2vF8eLxqqOfLnubcow3He11mBuVKLzsS2BjpezVKbLQtAmi6Dj7BIvBajitkYZIiP0Xm/G7KHWzu6dJz/ZbPdtlwnFzobngW5rux4JX9JK8zr7D8Q4Q9hxaeqrnWdbvh3A69NoArNcwwSyqyo4xsJfLME7auy1OrPdkNfscj03SryY3rY9YbS20eaGiVKmYIvAkagGD4Egq94jwWpSdde0g+MKuqWcq6vZHRf8O4PZajA5pe7cF2IOoMAQU63g1nblSB6lx+JWOpBzHBzSWuBBBHL4jktRZO01MgCswsdq5olnXceq5MuPIu5bZ047xv7WiwbZaQ/0mfyj5Ln2Kj/tM/lb8kahXpVBLHhw3BnwOykWhc3KveyzlehN1hpaU2/yj5IZoNGQA6CE+WhDdTCdWybkQdSCA+zqyNJqj3IVFkJuSnfQQH0Sr11mG6E6xjQqs5SbgoS0jKQoPg+82eYwPyPkrh9i5pd9kKssiEclUbKD7rvA4H5HzUHBzcHAqxdZXKJY4CMY2zHkU6tCOSuLl8UepTGyC6mqJi6PaaFrcQZbO2eHLDMJ+g4HEi7ymQqWlaUw20hfLNHt8dlq0jXE8sAphyrW2hS7/mlcg+NlmLUMoUhVVSKym2tzSuAfEW4edErbLcKYl2egGZMfXmk/tB3QK9UHEoKP0Cw9j9mts0w55a06idZ0nE4EeaK2sHCWkEcjKpm2nmp07aRkVnCH+F+h+tWGqXNXYqP2/p5JY2iTn6D5IqdDzD9halT+/X6CrrVYmvMlz56jQyNEy+oEI1grxluVqWF4ofbQhW4Q12dSofFv/qj2Wkyk26xoG5gXnc3EDEojnhBfCasmSlqmZREdyg1aqQ28Wm7vBIwzy8Uh+8aZ19CP0W/od0KNNuGDG+cCfWVmeIWKg9xAuk6jyn4jDmF3z4U6+zzn51b+ik/xJQLblUiozLEOkdHEfFDt/ZVtRne2Zwc043dRPNBtvZigDLWBp/hlvoMPRZLh3E61Ou9lntDmlj3tDCC8kMdE4DIxOC6ow8V02RvJyfSGLXw0tJDmkHYhI1LPHRbiy9om12hltsz704VaVMhoHME3p3jyQ+I9mTF+g4Vae494dR9dEyr0Lr9MxY7fUY0CA5o0yd5j9Vb0bReAN0t6wfKCqurZSDsV2lUcMAY+Hkp3jT7RScmumWl5cJQ6OI56wpmkoa10V2Rc9CNQqb6Lku8OCpKQjYQ2gqBtR3QHVOSgao2TqRGxg2o8lD7SgF42Q3OG6dSLsc+0IbrQEoeqi7qmUith3VGlCc1qCSoF6dIDPTqFEnIjbXPZSNNwxMAbyIk4ROQKpQ+MZOGQ0TVO0SA0gEDQ4jyXiPHo9NWWReQYOBC6KhS3fzmpgzhhO04+XhqpcSioO2qVLviln3hm0jwUS6BJBx8kOA6safXQKtYoJqHRHp2Z528x4ZaH4LcdGdiwtBlcNoUK1BwhwIc0/ebJHwQXswm8Dyx/VUUoXmxj7UuG0pMuhDc9FY0b5CydXQXWhLsK48IqED5AzrQoG0pVxQyCU6hCu2XLeOuDQ3YAT0ESq+jbnNcTJPLDn4x46JQtKgSutZaOV4oLGtxd5yHmqCz8IoNN5zb7pvXnwYJMkgaYpwlQeEXkt9bAohehr7WjWbiRYbzHFp3H67qpcwqGISKBnWzWG3We0YV23H/7rB/2b8vRV3E+zz2C+yKlPR7DI8dlUU6ibsfFKlIzTeW7jNp/M04FVm2vsjWNP6EiC3lGqYpW3Rwg7jI/JWFXiFnrj/5GdzU/E0TTceYzafqUnU4a7SC06zLT5J2ppCKqnpnxqjdCe/mhV7G5uWW3ySgeZjGdoSqR+Qw4obm8kKq+M81AV06TQpMsQX00XvJUXFOmLoAWLl1GkoZhNsAJzeaG5qMQFBzOaZMXRu6j2k5QNhgJ3w1U6Fwua2DJ2OQ3OGPRKs4kzvbsNDQSJAkkfLopsrMvXxMDKY56aBeU4Z2qwPGuJPY8U6Xsx7xEXnE84kAbDWU9VtlJtMVamNVwulrDdJImXzpOE549cKd1qaXl8dN/7JG1kuiMOWKqsaaSF5vbZqrFxOg4AF13L2XB7vAObGOQxEYc1YioC51Msyutw5AwSemXJYqyAs5z1EY581Z2fiDwLsxgBhgY5kZqOTCt/wASsZH7HrcXsJDajQDkNWjM5Z5nFcbai1nvSYiRgeXySD7TOeK+viEOHXYeYzS4gRAk+BERtkiMtAiIGJn6lVd5SL4ReNA5svRbAJkgnLfDr+iXqPYcQAFU1KhXGuPzQWILyFj3QJwQ6jDoD5INGoY+H1ovqlZwN72idhPlOiKnsHImykTjkg1cNZ8x8V8LS6IqAg6YETt1/olX1cU6h7A7RJ9onNC7xfPAOqh3aokiboIKiJfGyWNNDewo8UDY2ardlL2SkWUupOkb/qiEn3WiN8hlqScluP4bYY0QvjRCVLnASMRuDIwzE78lFts3R4sGw9Sgl2tc0+yS08iR8EUWmVNr5TLaA+yH22sPvk9Yd8Qh1LaXe9hGwgFOFmGfolK4IzCeMgtSVTlxNVHBLPhUQpG8V8K5CG481G/un0AY+0Ln2hAdCgWhZIDDuqSu3koWlcJKbQDT0G4yU+4G4eacsNhoP9htdvfNN1zTkXx/lty9oGRheGHgq6118APFcT23osmgLaZXX0yDl9dFBtdfd+SZkTt9CAn4g5Bm3cy4NA1I15AYnoEw4XDN4OBxBbBaRJGRGGIOBCrbYGuIuuJ39mBvhjj5KwsNMlog8hO3TbVJc6Q00c70HfyA8OiLSdLf6JunQp3mtcTedhAIyjAyWxB2z6I1Oz05u94XEY+yzCPE4ZeviotocptcZTFMCJJ+uaYrBrXEXZx3In1RLlPNt4HY5A6FFmTKm124sfDCABhhje5uBznbIfE1K1NcJyMZt1PO8UK32FpIc05gXhlDtY2CFTpAESPZ1EnH5Kmpc9C7ex9rSccIyBdHWMPePQINSoQQ2DM4gau0yz5dUM1miCCcNDpOZ+uSnV4s+4Q2Acr/AN6OR0ScWNtEalO0SB3dTDEC64xuZjD+6BWEEhzS08wZPMzolaXEHtBAcTriTnvmpVuIvqReMxO+v9gq8GLtE+8X19AFZfGoN0eIBnv18LQku8UHVPrBHgYtPtg1HlhmlrXbiWll0YwBv/VKsqN1CI+0ge77O5A9qPzLKNMDYCg+rSMi80HcGDyRalpvaAdAlKtY4gHA5kgEnqSlw+NVbjvsTeiwpNJMBO0GkZmNt1TstPNM0KxKSpYyZd06mGZymIx8gq+2Oc4kCJ1GM+oXXWgNbEEknPKAPVFb7VA3Y9kkSZxEg46f2CRTrsZvYoxjmtx9kTiSJk9M/wC6WqVKYJBa+cxOHQQh1alQ44gZYYDwhLvIPvEzsI+P9FeZJNnbQW4RIOuyDeXXuZkG4fik3jhjhMIMKiQuw4qHCNEfuCZLnfqfLTNJNcRiF0V3DVBo2/0OaECScNd52UXTExhvohMtZBTItUgTit2jbR//2Q=='}
        width={240}
        height={240}
      />
      </div>

        <h2 className="base--h2">Tell me about the incident</h2>

        <div className="question-input">
          <div className="question-input--input-container">
            <input
              type=""
              autoFocus
              value={this.state.text}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              id="question"
              placeholder="Enter the incident you want to classify"
              className="base--input question-input--input"
              required="true"
            />
          </div>
          <div className="question-input--button-container">
            <button
              disabled={this.state.text.trim().length === 0}
              onClick={this.onSubmit}
              className="base--button question-input--submit-button"
            >
              Ask
            </button>
          </div>
        </div>





      </div>
    );
  },
});
