
import { h } from 'preact'
import t from 'services/i18n'
import { style } from 'glamor'
import CodeExample from 'components/CodeExample'

export default () => (
  <div {...styles.container}>
    <section id='introduction'>
      <h2 {...styles.sectionTitle}>{t('guide.introduction.title')}</h2>
      <p dangerouslySetInnerHTML={{ __html: t('guide.introduction.first') }}></p>
      <p dangerouslySetInnerHTML={{ __html: t('guide.introduction.second') }}></p>
    </section>
    <section id='getting-started'>
      <h2 {...styles.sectionTitle}>{t('guide.getting_started.title')}</h2>
      <p dangerouslySetInnerHTML={{ __html: t('guide.getting_started.first') }}></p>
      <p>{t('guide.getting_started.second')}</p>
    </section>
    <section id='scenes'>
      <h2 {...styles.sectionTitle}>{t('guide.scenes.title')}</h2>
      <p>{t('guide.scenes.first')}</p>
      <CodeExample text={t('guide.scenes.preview')} />

      <p>{t('guide.scenes.second')}</p>
      <p>{t('guide.scenes.third')}</p>
    </section>
    <section id='entities'>
      <h2 {...styles.sectionTitle}>{t('guide.entities.title')}</h2>
      <p>{t('guide.entities.first')}</p>
      <p>{t('guide.entities.second')}</p>
      <CodeExample
        title={t('guide.entities.title')}
        text={t('guide.entities.preview')} />
      <p>{t('guide.entities.third')}</p>
    </section>
    <section id='audio'>
      <h3>{t('guide.audio.title')}</h3>
      <p>{t('guide.audio.description')}</p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>{t('guide.audio.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.source')}</span> ({t('guide.attributes.source_types')}) | {t('guide.entities.required')}</li>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.position')}</span> ({t('guide.attributes.position_types')}) | {t('guide.entities.optional')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Audio example'
        text={t('guide.audio.preview')} />
    </section>
    <section id='panorama'>
      <h3>{t('guide.panorama.title')}</h3>
      <p>{t('guide.panorama.description')}</p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>panorama</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.source')}</span> ({t('guide.attributes.source_types')}) | {t('guide.entities.required')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Panorama example'
        text={t('guide.panorama.preview')} />
    </section>
    <section id='videosphere'>
      <h3>{t('guide.videosphere.title')}</h3>
      <p>{t('guide.videosphere.description')}</p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>{t('guide.videosphere.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.source')}</span> ({t('guide.attributes.source_types')}) | {t('guide.entities.required')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Videosphere example'
        text={t('guide.videosphere.preview')} />
    </section>
    <section id='image'>
      <h3>{t('guide.image.title')}</h3>
      <p>{t('guide.image.description')}</p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>{t('guide.image.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.source')}</span> ({t('guide.attributes.source_types')}) | {t('guide.entities.required')}</li>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.position')}</span> ({t('guide.attributes.position_types')}) | {t('guide.entities.optional')}</li>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.scale')}</span> ({t('guide.attributes.scale_types')}) | {t('guide.entities.optional')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Image example'
        text={t('guide.image.preview')} />
    </section>
    <section id='video'>
      <h3>{t('guide.video.title')}</h3>
      <p>{t('guide.video.description')}</p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>video</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.source')}</span> ({t('guide.attributes.source_types')}) | {t('guide.entities.required')}</li>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.position')}</span> ({t('guide.attributes.position_types')}) | {t('guide.entities.optional')}</li>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.scale')}</span> ({t('guide.attributes.scale_types')}) | {t('guide.entities.optional')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Video example'
        text={t('guide.video.preview')} />
    </section>
    <section id='text'>
      <h3>{t('guide.text.title')}</h3>
      <p>{t('guide.text.description')}</p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>{t('guide.text.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.text')}</span> ({t('guide.attributes.text_types')}) | {t('guide.entities.required')}</li>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.position')}</span> ({t('guide.attributes.position_types')}) | {t('guide.entities.optional')}</li>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.scale')}</span> ({t('guide.attributes.scale_types')}) | {t('guide.entities.optional')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Text example'
        text={t('guide.text.preview')} />
    </section>
    <section id='duration'>
      <h3>{t('guide.duration.title')}</h3>
      <p>{t('guide.duration.description')}</p>
      <p>{t('guide.entities.keywords')}: <span style={styles.attr}>{t('guide.duration.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span style={styles.attr}>{t('guide.attributes.duration')}</span> ({t('guide.attributes.duration_types')}) | {t('guide.entities.required')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Duration example'
        text={t('guide.duration.preview')} />
    </section>
    <section id='voiceover'>
      <h3>{t('guide.voiceover.title')}</h3>
      <p>{t('guide.voiceover.description')}</p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>{t('guide.voiceover.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.text')}</span> ({t('guide.attributes.text_types')}) | {t('guide.entities.required')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Voiceover example'
        text={t('guide.voiceover.preview')} />
    </section>
    <section id='chart'>
      <h3>{t('guide.chart.title')}</h3>
      <p dangerouslySetInnerHTML={{ __html: t('guide.chart.description') }}></p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>{t('guide.chart.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.source')}</span> ({t('guide.attributes.source_types')}) | {t('guide.entities.required')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Chart example'
        text={t('guide.chart.preview')} />
    </section>
    <section id='sky'>
      <h3>{t('guide.sky.title')}</h3>
      <p>{t('guide.sky.description')}</p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>{t('guide.sky.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.sun_position')}</span> ({t('guide.attributes.sun_position_types')}) | {t('guide.entities.optional')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Sky example'
        text={t('guide.sky.preview')} />
    </section>
    <section id='background'>
      <h3>{t('guide.background.title')}</h3>
      <p>{t('guide.background.description')}</p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>{t('guide.background.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.color')}</span> ({t('guide.attributes.color_types')}) | {t('guide.entities.required')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Background example'
        text={t('guide.background.preview')} />
    </section>
    <section id='3dmodel'>
      <h3>{t('guide.3dmodel.title')}</h3>
      <p dangerouslySetInnerHTML={{ __html: t('guide.3dmodel.description') }}></p>
      <p>{t('guide.entities.keywords')}: <span {...styles.attr}>{t('guide.3dmodel.keywords')}</span></p>
      <p>{t('guide.entities.attributes')}:</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>{t('guide.attributes.source')}</span> ({t('guide.attributes.source_types')}) | {t('guide.entities.required')}</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Model example'
        text={t('guide.3dmodel.preview')} />
    </section>
    <section id='links'>
      <h3>{t('guide.links.title')}</h3>
      <p>{t('guide.links.description')}</p>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='Links example'
        text={t('guide.links.preview')} />
    </section>
    <section id='search'>
      <h2 {...styles.sectionTitle}>{t('guide.search.title')}</h2>
      <p>{t('guide.search.description')}</p>
      <p {...styles.sectionDesc}>{t('guide.search.example')}</p>
    </section>
    <section id='ar'>
      <h2 {...styles.sectionTitle}>{t('guide.ar.title')}</h2>
      <p>{t('guide.ar.description')}</p>
      <p>{t('guide.entities.example')}</p>
      <CodeExample title='AR mode example' text={t('guide.ar.preview')} />
    </section>
    {/* <section id='sharing'>
      <h2 {...styles.sectionTitle}>{t('guide.sharing.title')}</h2>
      <p>
        {t('guide.sharing.first')}

        <div {...styles.embed}>
          <iframe border='0' frameborder='none' src='https://s3.amazonaws.com/gurivr/s/5835cb9b5a3fda970fbb672c.html' width='100%' height='300'></iframe>
        </div>

        <span dangerouslySetInnerHTML={{ __html: t('guide.sharing.second') }}></span>

        <div {...styles.embed}>
          <blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'><a href='https://twitter.com/impronunciable'>@impronunciable</a> your scene is here <a href='https://t.co/n2O4S2OTh7'>https://t.co/n2O4S2OTh7</a></p>&mdash; Guri VR (@guri_vr) <a href='https://twitter.com/guri_vr/status/751870382219599872'>July 9, 2016</a></blockquote>
          <script async src='//platform.twitter.com/widgets.js' charset='utf-8'></script>
        </div>
      </p>
    </section> */}
    <section id='api'>
      <h2 {...styles.sectionTitle}>{t('guide.api.title')}</h2>
      <p>{t('guide.api.description')}</p>
      <p><strong>POST https://gurivr.com/api/stories</strong></p>
      <p>{t('guide.api.params')}</p>
      <ul>
        <li {...styles.attrItem}><span {...styles.attr}>text</span> (string) | {t('guide.entities.required')}</li>
        <li {...styles.attrItem}><span {...styles.attr}>mode</span> (vr|ar) | (default: vr)</li>
        <li {...styles.attrItem}><span {...styles.attr}>title</span> (string)</li>
      </ul>
      <p>{t('guide.entities.example')}</p>
      <div class="cm-s-one-dark">
        <pre {...styles.attr}>{t('guide.api.curl')}</pre>
      </div>
      <p dangerouslySetInnerHTML={{ __html: t('guide.api.tweetbot') }}></p>
    </section>

  </div>
)

const styles = {
  container: style({
    position: 'relative',
    left: 250,
    flex: 1,
    maxWidth: 700,
    width: '100%',
    marginTop: -30,
    color: '#666',
    fontSize: 18,
    '& p': {
      lineHeight: 1.5
    },
    '& a': {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: '#333',
      fontSize: 20
    },
    '@media(max-width: 1000px)': {
      left: 0
    }
  }),

  title: style({
    textAlign: 'center'
  }),

  embed: style({
    display: 'flex',
    justifyContent: 'center',
    margin: '15px auto'
  }),

  attr: style({
    backgroundColor: '#eee',
    padding: 3
  }),

  attrItem: style({
    padding: 10
  }),

  sectionTitle: style({
    fontSize: 40,
    color: '#57309D'
  }),

  sectionDesc: style({
    wordBreak: 'break-all'
  })
}
