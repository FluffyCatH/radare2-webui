function panelOverview() {
	var widget = widgetContainer.getWidget('Overview');
	var c = widgetContainer.getWidgetDOMWrapper(widget);
	updates.registerMethod(widget.getOffset(), panelSettings);

	var out = '<div class="mdl-grid demo-content">';
	out += '<div class="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">';
	out += '	<div id="info"> </div>';
	out += '	<br />';
	out += '	<a id="info_headers" class="mdl-buton mdl-js-buttom mdl-js-ripple-effect" style="cursor:pointer">read more...</a>';
	out += '	<h3>Entropy</h3>';
	out += '		<svg fill="currentColor" viewBox="0 0 500 80" id="entropy-graph"></svg>';
	out += '</div>';

	out += '<div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">';
	out += '	<div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">';
	out += '		<div class="mdl-card__title mdl-card--expand mdl-color--teal-300">';
	out += '			<h2 class="mdl-card__title-text">Fortunes</h2>';
	out += '		</div>';
	out += '		<div class="mdl-card__supporting-text mdl-color-text--grey-600" id="fortune">';
	out += '			Always use r2 from git';
	out += '		</div>';
	out += '		<div class="mdl-card__actions mdl-card--border">';
	out += '			<a href="javascript:updateFortune()" class="mdl-button mdl-js-button mdl-js-ripple-effect">Next</a>';
	out += '		</div>';
	out += '	</div>';
	out += '	<div class="demo-separator mdl-cell--1-col"></div>';
	out += '	<div class="demo-options mdl-card mdl-color--teal-300 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">';
	out += '		<div class="mdl-card__supporting-text mdl-color-grey-600">';
	out += '			<h3 class="mdl-cart__title-text">Analysis Options</h3>';
	out += '			<ul>';
	out += '				<li>';
	out += '					<label for="anal_symbols" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">';
	out += '						<input type="checkbox" id="anal_symbols" class="mdl-checkbox__input" />';
	out += '						<span id="anal_symbols" class="mdl-checkbox__label">Analyze symbols</span>';
	out += '					</label>';
	out += '				</li>';
	out += '				<li>';
	out += '					<label for="anal_calls" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">';
	out += '						<input id="anal_calls" type="checkbox" class="mdl-checkbox__input" />';
	out += '						<span class="mdl-checkbox__label">Analyze calls</span>';
	out += '					</label>';
	out += '				</li>';
	out += '				<li>';
	out += '					<label for="anal_emu" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">';
	out += '						<input id="anal_emu" type="checkbox" class="mdl-checkbox__input" />';
	out += '						<span class="mdl-checkbox__label">Emulate code</span>';
	out += '					</label>';
	out += '				</li>';
	out += '				<li>';
	out += '					<label for="anal_prelude" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">';
	out += '						<input id="anal_prelude" type="checkbox" class="mdl-checkbox__input" />';
	out += '						<span class="mdl-checkbox__label">Find preludes</span>';
	out += '					</label>';
	out += '				</li>';
	out += '				<li>';
	out += '					<label for="anal_autoname" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">';
	out += '						<input type="checkbox" id="anal_autoname" class="mdl-checkbox__input" />';
	out += '						<span id="anal_autoname" class="mdl-checkbox__label">Autoname fcns</span>';
	out += '					</label>';
	out += '				</li>';
	out += '			</ul>';
	out += '		</div>';
	out += '		<div class="mdl-card__actions mdl-card--border">';
	out += '			<a href="#" id="analyze_button" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color--blue-grey-50 mdl-color-text--blue-greu-50">Analyze</a>';
	out += '			<div class="mdl-layout-spacer"></div>';
	out += '			<i class="material-icons">room</i>';
	out += '		</div>';
	out += '	</div>';
	out += '</div>';
	out += '<div class="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">';
	out += '	<svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop clickable" onclick="panelDisasm();seek(\'entry0\');" title="Go to disassembly">';
	out += '		<use xlink:href="#piechart" mask="url(#piemask)" />';
	out += '		<text x="0.3" y="0.2" font-family="Roboto" font-size="0.1" fill="#888" text-anchor="top" dy="0.1">code</text>';
	out += '		<text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">82<tspan font-size="0.2" dy="-0.07">%</tspan></text>';
	out += '	</svg>';
	out += '	<svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop clickable" onclick="panelHexdump();seek(\'0x00\');" title="Go to hexdump">';
	out += '		<use xlink:href="#piechart2" mask="url(#piemask)" />';
	out += '		<text x="0.3" y="0.2" font-family="Roboto" font-size="0.1" fill="#888" text-anchor="top" dy="0.1">data</text>';
	out += '		<text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">22<tspan dy="-0.07" font-size="0.2">%</tspan></text>';
	out += '	</svg>';
	out += '	<svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop clickable" onclick="panelStrings()" title="Go to strings">';
	out += '		<use xlink:href="#piechart" mask="url(#piemask)" />';
	out += '		<text x="0.3" y="0.2" font-family="Roboto" font-size="0.1" fill="#888" text-anchor="top" dy="0.1">strings</text>';
	out += '		<text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">4<tspan dy="-0.07" font-size="0.2">%</tspan></text>';
	out += '	</svg>';
	out += '	<svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop clickable" onclick="panelFunctions()" title="Go to functions">';
	out += '		<use xlink:href="#piechart" mask="url(#piemask)" />';
	out += '		<text x="0.3" y="0.2" font-family="Roboto" font-size="0.1" fill="#888" text-anchor="top" dy="0.1">functions</text>';
	out += '		<text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">82<tspan dy="-0.07" font-size="0.2">%</tspan></text>';
	out += '	</svg>';
	out += '</div>';
	out += '</div>';

	c.innerHTML = out;

	updateFortune();
	updateInfo();
	updateEntropy();
}
