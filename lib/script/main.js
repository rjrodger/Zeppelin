#!/usr/bin/env node
/* 
 * Author: P.Elger
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED 
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES 
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
 * DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, 
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES 
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR 
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) 
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, 
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING 
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE. 
 */         

var zeppelinCore = require('../core/zeppelin_core');
var config = require('../config').config;

// TODO some sort of validation on config?

// resolve relative paths
var cwd = process.cwd()
config.applications.forEach(function(application){
  var roots = application.roots
  for( var rI = 0; rI < roots.length; rI++ ) 
  {
    var root = roots[rI]
    if( 0 == root.indexOf('./') ) {
      roots[rI] = cwd+'/'+root.substring(2)
    }
  }
})

zeppelinCore.tearUp(config, function()
{
  //zeppelinCore.tearDown();
});

