xquery version "1.0-ml";

import module namespace search =
  "http://marklogic.com/appservices/search"
  at "/MarkLogic/appservices/search/search.xqy";

search:search("hello world")
=>
<search:response total="1" start="1" page-length="10" xmlns=""
  xmlns:search="http://marklogic.com/appservices/search">
  <search:result index="1" uri="/hello.xml"
    path="doc(&quot;/hello.xml&quot;)" score="136"
    confidence="0.67393" fitness="0.67393">
    <search:snippet>
      <search:match path="doc(&quot;/hello.xml&quot;)/hello">This is
        where you say "<search:highlight>Hello</search:highlight>
        <search:highlight>World</search:highlight>".
      </search:match>
    </search:snippet>
  </search:result>
  <search:qtext>hello world</search:qtext>
  <search:metrics>
    <search:query-resolution-time>PT0.328S
      </search:query-resolution-time>
    <search:total-time>PT0.352S</search:total-time>
  </search:metrics>
</search:response>s
