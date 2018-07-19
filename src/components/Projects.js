import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, Button, CardActions, IconButton, CardMenu } from 'react-mdl'
class Projects extends Component {
    state = { activeTab: 0 }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <div className="ctg-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover' }}>
                            React project #1</CardTitle>
                        <CardText> Ragfmaskgmaskfgmkasmgksgmkgmdsakgm  kfnanfgas</CardText>
                        <CardActions border>
                            <Button> Github</Button>
                            <Button> CodePen</Button>
                            <Button> Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover' }}>
                            React project #2</CardTitle>
                        <CardText> Ragfmaskgmaskfgmkasmgksgmkgmdsakgm  kfnanfgas</CardText>
                        <CardActions border>
                            <Button> Github</Button>
                            <Button> CodePen</Button>
                            <Button> Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover' }}>
                            React project #3</CardTitle>
                        <CardText> Ragfmaskgmaskfgmkasmgksgmkgmdsakgm  kfnanfgas</CardText>
                        <CardActions border>
                            <Button> Github</Button>
                            <Button> CodePen</Button>
                            <Button> Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="ctg-grid">
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://angular.io/assets/images/logos/angular/angular.png) center/cover' }}>
                        Angular project #1</CardTitle>
                    <CardText> Ragfmaskgmaskfgmkasmgksgmkgmdsakgm  kfnanfgas</CardText>
                    <CardActions border>
                        <Button> Github</Button>
                        <Button> CodePen</Button>
                        <Button> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://angular.io/assets/images/logos/angular/angular.png) center/cover' }}>
                        Angular project #2</CardTitle>
                    <CardText> Ragfmaskgmaskfgmkasmgksgmkgmdsakgm  kfnanfgas</CardText>
                    <CardActions border>
                        <Button> Github</Button>
                        <Button> CodePen</Button>
                        <Button> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://angular.io/assets/images/logos/angular/angular.png) center/cover' }}>
                        Angular project #3</CardTitle>
                    <CardText> Ragfmaskgmaskfgmkasmgksgmkgmdsakgm  kfnanfgas</CardText>
                    <CardActions border>
                        <Button> Github</Button>
                        <Button> CodePen</Button>
                        <Button> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="ctg-grid">
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png) center/cover' }}>
                        Vue project #1</CardTitle>
                    <CardText> Ragfmaskgmaskfgmkasmgksgmkgmdsakgm  kfnanfgas</CardText>
                    <CardActions border>
                        <Button> Github</Button>
                        <Button> CodePen</Button>
                        <Button> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png) center/cover' }}>
                        Vue project #2</CardTitle>
                    <CardText> Ragfmaskgmaskfgmkasmgksgmkgmdsakgm  kfnanfgas</CardText>
                    <CardActions border>
                        <Button> Github</Button>
                        <Button> CodePen</Button>
                        <Button> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png) center/cover' }}>
                        Vue project #3</CardTitle>
                    <CardText> Ragfmaskgmaskfgmkasmgksgmkgmdsakgm  kfnanfgas</CardText>
                    <CardActions border>
                        <Button> Github</Button>
                        <Button> CodePen</Button>
                        <Button> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={id => this.setState({ activeTab: id })} ripple>
                    <Tab> React</Tab>
                    <Tab> Angular</Tab>
                    <Tab> Vue</Tab>
                </Tabs>

                <section className="section-grid">
                    <Grid>
                        <Cell col={12}>
                            {this.toggleCategories()}
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects